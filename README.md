# Advanced Device Fingerprinting Library

A modular, zero-dependency collection of client-side browser and hardware fingerprinting scripts designed for telemetry, fraud prevention, session anomaly detection, and anti-bot defense.

---

## Overview & Background

Device fingerprinting creates a unique user identifier that persists across successive sessions and functions reliably even when cookies are cleared, disabled, or when users operate in private browsing modes. 

By capturing non-persistent telemetry attributes regarding a client's operating system, hardware configuration, graphics stack, and browser runtimes, this library enables precise identification and security auditing.

### Core Acquisition Techniques
Device fingerprinting relies on four primary vectors:
1. **Network-Based Web Browser Fingerprinting:** Analyzes server-side HTTP headers (`User-Agent`, `Accept-Language`, encodings) without requiring client-side execution code.
2. **Flash Fingerprinting:** Queries legacy Adobe Flash plugin capabilities (largely deprecated in modern runtimes).
3. **JavaScript Fingerprinting:** Executes client-side routines to extract deep hardware, rendering, and environmental characteristics.
4. **SDK-Based Fingerprinting:** Deploys native application code to access hardware identifiers like IMEI or MAC addresses.

---

## Understanding Entropy

As detailed in [Understanding Entropy](https://www.darkwavetech.com/projects/device-fingerprinting/understanding-entropy), entropy measures the uncertainty and distinctiveness of information. Expressed in bits via the formula:

$$\Delta S = -\log_2 \Pr(X = x)$$

* **The Global Scale:** Because there are billions of active computing devices worldwide, uniquely identifying a specific random computer globally requires approximately **31 bits of entropy** ($2^{31} \approx 2\text{ billion}$). 
* **Stability vs. Volatility:** Ideal fingerprint attributes remain stable over time (e.g., hardware characteristics, underlying OS) rather than rapidly fluctuating parameters like frequently updating browser version strings.

---

## Directory Structure (`src/`)

* [`canvas.js`](src/canvas.js) — [Canvas Fingerprint Documentation](src/canvas.md) (Sub-pixel rendering & GPU discrepancies)
* [`audiocontext.js`](src/audiocontext.js) — [AudioContext Fingerprint Documentation](src/audiocontext.md) (Audio hardware stack & oscillator profiles)
* [`math.js`](src/math.js) — [Math Routine Fingerprint Documentation](src/math.md) (IEEE 754 floating-point & CPU math quirks)
* [`display.js`](src/display.js) — [Display Fingerprint Documentation](src/display.md) (Screen resolution, color depth & workspace metrics — ~10.1 bits)
* [`java_env.js`](src/java_env.js) — [Java Environment Fingerprint Documentation](src/java_env.md) (Legacy plugin & applet runtime status)
* [`flash_fingerprint.js`](src/flash_fingerprint.js) — [Flash Fingerprint Documentation](src/flash.md) (Legacy Adobe Flash plugin & ActiveX telemetry)
* [`clock_speed_vm_fingerprint.js`](src/clock_speed_vm_fingerprint.js) — [Clock Speed / VM Documentation](src/clock_speed_vm.md) (High-res performance counters & hypervisor detection)
* [`font_fingerprint.js`](src/font_fingerprint.js) — [Font Fingerprint Documentation](src/font.md) (System font enumeration via DOM width metrics — ~13.9 bits)
* [`form_fields_fingerprint.js`](src/form_fields_fingerprint.js) — [Form Fields Documentation](src/form_fields.md) (DOM form/input telemetry for MITB malware & injection detection)
* [`indexeddb_fingerprint.js`](src/indexeddb_fingerprint.js) — [IndexedDB Documentation](src/indexeddb.md) (HTML5 persistent storage support flag)
* [`language_fingerprint.js`](src/language_fingerprint.js) — [Language Fingerprint Documentation](src/language.md) (Standard locales & legacy Microsoft OS telemetry — ~10.1 bits)
* [`latency_fingerprint.js`](src/latency_fingerprint.js) — [Latency Fingerprint Documentation](src/latency.md) (Navigation Timing network handshake metrics — ~4.3 bits)
* [`math_routine_fingerprint.js`](src/math_routine_fingerprint.js) — [Math Routine Documentation](src/math_routine.md) (Specialized transcendental functions: COSH/TAN — >4.0 bits)
* [`sessionstorage_fingerprint.js`](src/sessionstorage_fingerprint.js) — [SessionStorage Documentation](src/sessionstorage.md) (Session feature capability flag)
* [`timezone_fingerprint.js`](src/timezone_fingerprint.js) — [Timezone Documentation](src/timezone.md) (Dual-date offset sampling & DST auto-adjustment tracking — ~4.4 bits)
* [`moafp_part1_fingerprint.js`](src/moafp_part1_fingerprint.js) — [MOAFP Part 1 Documentation](src/moafp_part1.md) (Exhaustive navigator object property walker — 33+ bits)

---

## License & Usage
Developed by Darkwave Technologies. Designed for integration into robust fraud-prevention architectures and multi-layered risk engines.
