# Guide Generator Test Suite

This directory contains test scenarios and utilities for testing different components of the guide generation system.

## System Flow

```
User Input --> LLM Pre-processing Step (reasoning) --> Reformulated Query --> Retrieve Chunks --> LLM Final Output (step-by-step guide)
```

## Test Files

### 1. `test-analysis-scenarios.js`

- Tests the LLM pre-processing step
- Contains natural language user inputs
- Verifies the LLM's ability to understand and structure user requirements
- Outputs analyzed context with platform-specific needs, credentials, etc.

Example:

```javascript
{
  description: "I want to integrate RevenueCat into my product. I have a native android app...",
  platforms: ["android"],
  hasRevenueCatAccount: false,
  hasBackend: true,
  currentStage: "starting"
}
```

### 2. `test-chunking-scenarios.js`

- Tests the documentation chunking service
- Contains detailed technical scenarios with specific goals and constraints
- Verifies the chunking service's ability to find relevant documentation
- Used to test scoring and relevance of documentation chunks

Example:

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

## Running Tests

1. Test Analysis:

```bash
yarn test-analysis android_new_user
```

2. Test Chunking:

```bash
yarn test-chunking android_new_user
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
