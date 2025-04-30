# Guide Generator Test Suite

This directory contains test scenarios and utilities for testing different components of the guide generation system.

## System Flow

```
User Input --> LLM Pre-processing Step (reasoning) --> Reformulated Query --> Retrieve Chunks --> LLM Final Output (step-by-step guide)
```

## Test Files

### 1. Core Tests

- `test-analysis.js`: Tests the analysis component
- `test-chunking.js`: Tests the chunking service
- `test-pipeline.js`: Tests the full generation pipeline
- `verify-providers.js`: Verifies embedding providers functionality

### 2. Scenario Tests

- `test-analysis-scenarios.js`: Tests analysis with predefined scenarios
- `test-chunking-scenarios.js`: Tests chunking with predefined scenarios
- `test-scenarios.js`: Common test scenarios and utilities
- `mock-analysis.js`: Mock data for testing

## Running Tests

```bash
# Test Analysis
yarn test-analysis

# Test Chunking
yarn test-chunking

# Test Full Pipeline
yarn test-pipeline

# Verify Providers
yarn verify-providers
```

## Test Scenarios

### Analysis Scenarios

- `android_new_user`: New Android integration with backend
- `ios_existing_user`: Adding iOS to existing React Native app
- `flutter_setup`: Setting up Flutter with custom backend

### Chunking Scenarios

- `android_new_user`: Technical implementation details for Android
- `ios_existing_user`: Migration and integration details for iOS
- `flutter_setup`: Flutter-specific setup and configuration

### Provider Verification

- Tests both OpenAI and local embedding providers
- Verifies embedding generation and storage
- Checks provider initialization and error handling

## Example Outputs

### Analysis Output

```javascript
{
  description: "I want to integrate RevenueCat into my product. I have a native android app...",
  platforms: ["android"],
  hasRevenueCatAccount: false,
  hasBackend: true,
  currentStage: "starting"
}
```

### Chunking Output

```javascript
{
  platform: 'android',
  experience: 'new_user',
  goals: [
    'Set up RevenueCat SDK',
    'Configure in-app purchases',
    'Handle subscription status'
  ],
  constraints: [
    'Using Kotlin',
    'Targeting Android 12+',
    'Using Google Play Billing'
  ]
}
```
