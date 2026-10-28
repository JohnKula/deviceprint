# Adobe Flash Version Fingerprinting

## Overview
Adobe Flash Version fingerprinting is a legacy browser identification technique that queries plugin registries or ActiveX controls to determine whether the Adobe Flash Player runtime is installed and identify its exact sub-version.

## How It Works
1. **Plugin Inspection (Standard Browsers):** Iterates through `navigator.plugins` to check for the presence of the `Shockwave Flash` plugin and extracts its descriptive string version.
2. **ActiveX Inspection (Legacy IE):** Attempts to instantiate the `ShockwaveFlash.ShockwaveFlash` ActiveX control and queries the runtime variable `$version`.
3. **Telemetry & Entropy:** Provides historical fingerprinting entropy, though modern browsers have fully deprecated and removed Flash support.
