# Guide Generator

A custom LLM-powered integration guide generator for RevenueCat documentation.

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

## Security

All processing happens locally except for OpenAI API calls. No sensitive data is sent externally except to OpenAI's API.

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
