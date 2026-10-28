# Latency Fingerprinting

## Overview
Latency fingerprinting leverages the W3C Navigation Timing API (`window.performance.timing`) to quantify network connection metrics, helping evaluate physical distance from servers and identify proxy or tunnel hops.

## How It Works
1. **Timing Interrogation:** Queries `perfData.ConnectEnd` and `perfData.ConnectStart` to measure the precise time elapsed during the underlying TCP handshake/connection phase.
2. **Proxy & Tunnel Detection:** Discrepancies between expected geographic latency and measured connection delays help uncover intermediate proxies, SOCKS routing, or Man-in-the-Middle configurations.

## Entropy Estimate
* **Entropy:** ~4.3 bits
