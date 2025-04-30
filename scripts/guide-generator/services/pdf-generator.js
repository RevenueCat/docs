const fs = require("fs").promises;
const path = require("path");
const { marked } = require("marked");
const puppeteer = require("puppeteer");
const { validatePath, safeOperation } = require("../utils/security");

/**
 * Converts markdown to HTML
 * @param {string} markdown - The markdown content
 * @returns {string} - The HTML content
 */
function markdownToHtml(markdown) {
  return marked(markdown);
}

/**
 * Generates a PDF from markdown content
 * @param {string} markdown - The markdown content
 * @param {string} outputPath - Where to save the PDF
 * @returns {Promise<string>} - Path to the generated PDF
 */
async function generatePdf(guide, outputPath) {
  return safeOperation(async () => {
    const validatedOutputPath = validatePath(outputPath);
    const tempHtmlPath = validatePath(
      path.join(path.dirname(validatedOutputPath), "temp-guide.html"),
    );
    const html = markdownToHtml(guide);

    // Create a temporary HTML file
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              line-height: 1.6;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            h1, h2, h3 {
              color: #2c3e50;
              margin-top: 24px;
            }
            code {
              background: #f8f9fa;
              padding: 2px 4px;
              border-radius: 4px;
              font-family: monospace;
            }
            pre {
              background: #f8f9fa;
              padding: 16px;
              border-radius: 4px;
              overflow-x: auto;
            }
            blockquote {
              border-left: 4px solid #3498db;
              margin: 0;
              padding: 0 16px;
              color: #666;
            }
            a {
              color: #3498db;
              text-decoration: none;
            }
            .warning {
              background: #fff3cd;
              border-left: 4px solid #ffc107;
              padding: 16px;
              margin: 16px 0;
            }
          </style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `;

    await fs.writeFile(tempHtmlPath, htmlContent);

    // Generate PDF using Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${tempHtmlPath}`, { waitUntil: "networkidle0" });
    await page.pdf({
      path: validatedOutputPath,
      format: "A4",
      margin: {
        top: "20mm",
        right: "20mm",
        bottom: "20mm",
        left: "20mm",
      },
    });

    await browser.close();
    await fs.unlink(tempHtmlPath); // Clean up temp file

    return validatedOutputPath;
  }, "generatePdf");
}

module.exports = {
  generatePdf,
};
