# sessionStorage & Clock Speed Fingerprinting

## Overview
This module evaluates high-resolution performance counters to measure hardware clock frequency characteristics, assisting in physical hardware identification and virtual machine detection.

## How It Works
1. **High-Resolution Sampling:** Samples `performance.now()` to calculate precise timing delta loops.
2. **Euclidean GCD Resolution:** Processes timing increments recursively through a Euclidean greatest common divisor calculation to isolate hardware clock ticks.
3. **VM Detection:** Virtual machines often expose synthetic timers (such as HPET or ACPI counters resulting in distinct frequency benchmarks like 10,000 MHz or 35,795 MHz) which diverge from bare-metal processor profiles.
