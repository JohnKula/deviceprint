# IndexedDB Fingerprinting

## Overview
IndexedDB fingerprinting evaluates client-side storage feature support to help distinguish between modern HTML5-compatible runtimes and older or restricted browser environments.

## How It Works
1. **API Existence Check:** Evaluates the boolean truthiness of `window.indexedDB` to check if persistent client-side database storage is supported.
2. **Error Handling & Fallback:** Safely catches environmental reference exceptions to construct a structured telemetry tag (`<indexedDB>true/false</indexedDB>`).

## Entropy Estimate
* **Entropy:** ~1 bit (useful primarily for capability flagging and baseline browser feature profiling).
