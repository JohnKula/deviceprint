# Display (Screen) Fingerprinting

## Overview
Display fingerprinting leverages basic browser window and physical screen measurements to establish a baseline hardware profile.

## How It Works
1. **Screen Metrics Collection:** Queries properties from the `window.screen` interface, including total resolution, available workspace resolution (minus operating system taskbars/docks), color depth, and pixel density (`devicePixelRatio`).
2. **Aggregation:** Combines these metrics into a structured telemetry profile.
