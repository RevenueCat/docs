const OpenAIEmbeddingProvider = require("../providers/openai/openai-embedding-provider");
const LocalEmbeddingProvider = require("../providers/local/local-embedding-provider");

async function verifyProviders() {
  const openAIProvider = new OpenAIEmbeddingProvider();
  const localProvider = new LocalEmbeddingProvider();

  // Test texts
  const testTexts = [
    "How to implement RevenueCat in iOS",
    "Setting up subscriptions in Android",
    "Configuring webhooks for notifications",
  ];

  console.log("\n🔍 Verifying OpenAI Provider...");
  try {
    await openAIProvider.initialize();
    console.log("✅ OpenAI Provider initialized");

    const openAIEmbedding = await openAIProvider.createEmbedding(testTexts[0]);
    console.log(
      `✅ Created single embedding (dimensions: ${openAIEmbedding.length})`,
    );

    const openAIEmbeddings = await openAIProvider.createEmbeddings(testTexts);
    console.log(
      `✅ Created batch embeddings (count: ${openAIEmbeddings.length})`,
    );
  } catch (error) {
    console.error(`❌ OpenAI Provider error: ${error.message}`);
  }

  console.log("\n🔍 Verifying Local Provider...");
  try {
    await localProvider.initialize();
    console.log("✅ Local Provider initialized");

    const localEmbedding = await localProvider.createEmbedding(testTexts[0]);
    console.log(
      `✅ Created single embedding (dimensions: ${localEmbedding.length})`,
    );

    const localEmbeddings = await localProvider.createEmbeddings(testTexts);
    console.log(
      `✅ Created batch embeddings (count: ${localEmbeddings.length})`,
    );
  } catch (error) {
    console.error(`❌ Local Provider error: ${error.message}`);
  }

  console.log("\n🔍 Comparing Providers...");
  try {
    const openAIEmbedding = await openAIProvider.createEmbedding(testTexts[0]);
    const localEmbedding = await localProvider.createEmbedding(testTexts[0]);

    console.log(`✅ Both providers created embeddings`);
    console.log(`- OpenAI dimensions: ${openAIEmbedding.length}`);
    console.log(`- Local dimensions: ${localEmbedding.length}`);

    if (openAIEmbedding.length === localEmbedding.length) {
      console.log("✅ Embedding dimensions match");
    } else {
      console.warn("⚠️ Embedding dimensions do not match");
    }
  } catch (error) {
    console.error(`❌ Comparison error: ${error.message}`);
  }
}

// Run the verification
verifyProviders().catch((error) => {
  console.error(`❌ Verification failed: ${error.message}`);
  process.exit(1);
});
