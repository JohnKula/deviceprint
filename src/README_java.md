# Java Fingerprinting

## Overview
Java fingerprinting evaluates the presence of browser-level Java support by interrogating the `navigator.javaEnabled()` property.

## How It Works
1. **API Interrogation:** Invokes `navigator.javaEnabled()` to check if the browser environment permits Java applets or legacy plugin execution.
2. **Boolean Telemetry:** Returns a stable `"true"` or `"false"` string indicating runtime status.

## Entropy Estimate
* **Entropy:** ~1.0 bit (functions primarily as a stable capability flag).
