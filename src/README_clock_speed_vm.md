# Device Clock Speed & VM Detection Fingerprinting

## Overview
This fingerprinting module evaluates execution pacing, environment indicators, and storage object availability to help distinguish between bare-metal hardware and virtualized or sandboxed instances.

## How It Works
1. **Environment & Storage Probing:** Tests for the presence and behavior of session storage flags (`sessionStorage`) within the browser runtime.
2. **Timing & Pacing Telemetry:** Measures execution delta constraints to detect hypervisor-induced scheduling delays or emulated CPU throttling.
