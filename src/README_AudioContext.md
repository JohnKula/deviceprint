# AudioContext Fingerprinting

## Overview
AudioContext fingerprinting measures hardware-level differences in how audio signals are processed and rendered by the client's underlying audio stack, sound card, and audio drivers.

## How It Works
1. **Offline Audio Context:** Instantiates an `OfflineAudioContext` without playing sound through speakers.
2. **Signal Generation & Processing:** Generates an oscillator wave and routes it through a `DynamicsCompressorNode`, which applies non-linear mathematical processing influenced by hardware architecture.
3. **Buffer Analysis:** The rendered PCM audio buffer is analyzed, and specific sample data points are aggregated into a numerical signature.

## Use Cases & Security Considerations
* **Hardware-Level Identification:** Complements visual fingerprinting vectors by capturing audio stack telemetry.
* **Cross-Browser Persistence:** Tends to remain consistent across browser updates on the same machine since it relies heavily on underlying operating system audio drivers and hardware.
