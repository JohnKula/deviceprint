# Language Fingerprinting

## Overview
Language fingerprinting queries both standard browser localization properties and legacy Microsoft-specific environment interfaces (`browserLanguage`, `systemLanguage`, `userLanguage`) to establish deep locale configuration profiles.

## How It Works
1. **Standard Properties:** Interrogates `navigator.language` and `navigator.languages` to capture preferred locales and ordered language arrays.
2. **Proprietary Extensions:** Queries legacy Microsoft telemetry fields to capture underlying operating system language editions and regional control panel configurations even when user-agent strings are spoofed.
3. **Delimiter Concatenation:** Packs collected identifiers into a structured, delimited telemetry payload.

## Entropy Estimate
* **Entropy:** ~10.1 bits
