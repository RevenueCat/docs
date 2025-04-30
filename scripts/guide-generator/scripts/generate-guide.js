const path = require("path");
const fs = require("fs").promises;
const { analyzeUserContext } = require("../services/analysis");
const { findRelevantChunks } = require("../services/chunking");
const { generateGuide } = require("../services/generation");
const { generatePdf } = require("../services/pdf-generator");
const { log } = require("../utils/env");
const { getEnv, validatePath } = require("../utils/security");

// Check if we're in test mode
const isTestMode = getEnv("TEST_MODE") === "true";

async function ensureDirectoryExists(dirPath) {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
  }
}

async function main() {
  try {
    // Test context
    const userContext = {
      description: "I need to implement subscriptions in my Android app",
      platforms: ["android"],
      hasRevenueCatAccount: false,
      hasBackend: true,
      currentStage: "starting",
    };

    log("Starting guide generation process...");
    if (isTestMode) {
      log("Running in TEST MODE - using mock data");
    }

    // 1. Analysis
    log("\nStep 1: Analyzing user context...");
    const analyzedContext = await analyzeUserContext(userContext);
    if (!analyzedContext) {
      log("Analysis failed", true);
      process.exit(1);
    }
    log("Analysis complete!");

    // 2. Find relevant chunks
    log("\nStep 2: Finding relevant documentation chunks...");
    const relevantChunks = await findRelevantChunks(analyzedContext);
    if (!relevantChunks || relevantChunks.length === 0) {
      log("No relevant chunks found", true);
      process.exit(1);
    }
    log(`Found ${relevantChunks.length} relevant chunks`);

    // 3. Generate guide
    log("\nStep 3: Generating guide...");
    const guide = await generateGuide(relevantChunks, analyzedContext);
    if (!guide) {
      log("Guide generation failed", true);
      process.exit(1);
    }
    log("Guide generated successfully!");

    // 4. Generate PDF
    log("\nStep 4: Generating PDF...");
    const outputDir = validatePath(
      path.join(process.cwd(), "scripts/guide-generator/output"),
    );
    await ensureDirectoryExists(outputDir);

    // Add timestamp to filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const pdfPath = validatePath(
      path.join(outputDir, `guide-${timestamp}.pdf`),
    );

    const pdfResult = await generatePdf(guide, pdfPath);

    if (!pdfResult) {
      log("PDF generation failed", true);
      process.exit(1);
    }
    log(`PDF generated successfully at: ${pdfPath}`);

    // Also save the markdown for reference
    const markdownPath = validatePath(
      path.join(outputDir, `guide-${timestamp}.md`),
    );
    await fs.writeFile(markdownPath, guide);
    log(`Markdown saved at: ${markdownPath}`);
  } catch (error) {
    log(`Error in guide generation: ${error.message}`, true);
    process.exit(1);
  }
}

main();
