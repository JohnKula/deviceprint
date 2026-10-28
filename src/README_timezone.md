# Timezone Fingerprinting

## Overview
Timezone fingerprinting evaluates client time offsets across two distinct periods (winter and summer) to ensure temporal stability while capturing intelligence on whether the system automatically adjusts for Daylight Saving Time (DST).

## How It Works
1. **Dual-Date Sampling:** Instantiates `Date` objects for fixed points in winter (January 1st) and summer (July 1st).
2. **Offset Extraction:** Queries `.getTimezoneOffset()` for both dates to record minute offsets.
3. **DST Detection:** Comparing the two offset values allows verification of whether the device actively observes Daylight Saving Time—a crucial anomaly indicator since automated bots or spoofed proxy environments frequently misconfigure or miss regional DST rules.

## Entropy Estimate
* **Entropy:** ~4.4 bits
