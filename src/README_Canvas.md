# HTML5 Canvas Fingerprinting

## Overview
Canvas fingerprinting is a browser identification technique that exploits subtle discrepancies in how different operating systems, graphics cards, device drivers, and browser rendering engines draw HTML5 `canvas` elements. 

## How It Works
1. **The Render Request:** A script dynamically creates an off-screen HTML5 canvas element and renders specific text strings, shapes, color fills, and Unicode emojis with predefined styling.
2. **Sub-Pixel Variations:** Due to differences in anti-aliasing algorithms, font-rendering engines, and GPU instruction sets across devices, the resulting pixel matrix contains microscopic variances.
3. **Serialization & Hashing:** The rendered image is extracted via `.toDataURL()` and passed through a cryptographic hash function (SHA-256) to produce a consistent, unique fingerprint hash.

## Use Cases & Security Considerations
* **Fraud Prevention & Bot Detection:** Used in multi-layered risk engines to flag automated scraping frameworks or suspicious session anomalies.
* **Privacy Defenses:** Modern privacy-focused browsers and extensions (such as Brave or Firefox with `resistFingerprinting` enabled) mitigate this vector by injecting noise or returning randomized/uniform hashes.
