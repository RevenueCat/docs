# Guide Generator

A custom LLM-powered integration guide generator for RevenueCat documentation.

## Security

The guide generator handles sensitive information and requires proper security setup:

1. **Environment Variables**

   - All sensitive data is stored in `.env` file
   - `.env` is gitignored and should never be committed
   - Required variables:
     ```
     OPENAI_API_KEY=your_api_key
     VERBOSE_LOGS=false
     TEST_MODE=false
     ```
   - `OPENAI_API_KEY`: Your OpenAI API key for guide generation
   - `VERBOSE_LOGS`: Enable detailed logging (true/false)
   - `TEST_MODE`: Enable test mode for development (true/false)

2. **File Structure**

   - All sensitive code is in `/scripts/guide-generator/`
   - Utils are split between shared and guide-specific
   - Security utilities handle sensitive data

3. **API Keys**

   - API keys are validated and sanitized in logs
   - Missing keys result in graceful degradation
   - Keys are never logged or exposed

4. **File Access**
   - All file paths are validated
   - Directory traversal is prevented
   - Output files are timestamped

## Approach

The guide generator uses a hybrid approach combining multiple technologies for optimal results:

1. **OpenAI Embeddings** (`openai` package)

   - Used for high-quality semantic understanding
   - Better at capturing complex context
   - More expensive but higher quality
   - Primary scoring method (weighted 5x)

2. **Local Embeddings** (`@xenova/transformers` package)

   - Uses the `all-MiniLM-L6-v2` model
   - Fast, local processing without API calls
   - Good for basic similarity matching
   - Secondary scoring method (weighted 3x)

3. **Traditional Semantic Scoring** (fallback)
   - Used if both embedding methods fail
   - Based on text preprocessing and similarity
   - Ensures reliability even if APIs are unavailable

## Why This Approach?

This hybrid approach was inspired by RevenueCat's existing support ticket analysis system, which successfully uses both local embeddings and OpenAI for different purposes:

- **Local Processing**: Fast, efficient similarity matching
- **OpenAI**: Complex understanding and generation
- **Fallback**: Ensures reliability

## Dependencies

- `openai`: For high-quality embeddings and text generation
- `@xenova/transformers`: For local text processing and embeddings
- `dotenv`: For environment variable management

## Usage

```bash
# Test the analysis component
yarn test-guide-generator-analysis

# Test the chunking component
yarn test-guide-generator-chunking
```

## Architecture

1. **Analysis**: Uses OpenAI to understand user requirements
2. **Chunking**: Finds relevant documentation sections using hybrid approach
3. **Generation**: Creates custom guides based on analysis and chunks

## Embeddings Management

The guide generator uses pre-computed embeddings stored in `data/embeddings.json` to efficiently match documentation chunks with user requirements.

### Current Implementation (MVP)

- **Location**: `scripts/guide-generator/data/embeddings.json`
- **Size**: ~80MB (as of initial implementation)
- **Contents**:
  - Documentation chunks with their OpenAI and local embeddings
  - Metadata including file paths and last update timestamps
- **Generation**: Use `scripts/compute-embeddings.js` to generate/update embeddings
- **Storage**: Currently stored in the repository for MVP simplicity

### Future Plans

- Move to a dedicated microservice for:
  - Better scalability
  - Proper database storage
  - Versioning support
  - Caching and performance optimization
  - Authentication and rate limiting
- This is tracked as a technical debt item for future implementation

## CLI Interface

The `cli.js` file provides the main command-line interface for the guide generator. It:

1. Parses command-line arguments
2. Validates input options
3. Coordinates the guide generation process
4. Handles errors and logging

This is part of the planned full guide generation flow, which will allow users to:

- Generate custom guides from the command line
- Specify platform and requirements
- Get tailored documentation

Currently, we're using test scripts for development, but this CLI will be the main entry point for production use.
