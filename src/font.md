# Font Enumeration Fingerprinting

## Overview
Font enumeration fingerprinting surveys the client system's installed fonts by testing how sample text strings render when forced against fallback generic font families.

## How It Works
1. **DOM Injection:** Creates hidden span elements containing benchmark strings (`wwmmllii`) styled with a target font coupled against a generic fallback (`sans-serif` or `monospace`).
2. **Width Discrepancy Measurement:** If the targeted font is installed on the underlying operating system, the browser renders it and matches expected dimensions. If it is missing, the browser falls back to a default font width, signaling absence.
3. **Optimized Batching:** Appends elements via a document fragment and processes DOM insertion and cleanup in distinct loops to avoid repeated layout reflows and performance penalties.

## Entropy Estimate
* **Entropy:** ~13.9 bits (scales depending on the comprehensiveness of the font array checked).
