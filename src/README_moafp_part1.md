# MOAFP: The Mother of All Fingerprints (Part 1)

## Overview
MOAFP (The Mother of All Fingerprints) shifts away from traditional fragmented checks (querying isolated properties like color or screen size) and instead harvests the entire breadth of accessible client telemetry. Part 1 focuses on recursively walking the browser's `navigator` object.

## How It Works
1. **Exhaustive Property Walking:** Iterates through all available properties on `window.navigator`, capturing both property keys and their corresponding primitive values.
2. **Order & Structure Preservation:** Because browser families, versions, and internal builds introduce or sequence properties in specific orders, the sequential arrangement of keys provides an immutable signature that is difficult to spoof entirely.
3. **Delimiter Serialization:** Outputs a structured, pipe-delimited string (`key=value|key=value`) for backend machine learning anti-fraud analysis.

## Entropy Estimate
* **Entropy:** Estimated 33+ bits (significantly higher than isolated checks).
