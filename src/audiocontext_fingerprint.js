/**
 * AudioContext Fingerprinting Implementation
 * Identifies hardware audio stack configurations via oscillator and dynamics compressor processing.
 */
async function generateAudioFingerprint() {
    try {
        const AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if (!AudioContext) return null;

        // Create offline audio context (1 channel, 44100 sample rate, 5000 samples)
        const context = new AudioContext(1, 44100, 44100);

        // Create oscillator and compressor nodes
        const oscillator = context.createOscillator();
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(10000, context.currentTime);

        const compressor = context.createDynamicsCompressor();
        compressor.threshold.setValueAtTime(-50, context.currentTime);
        compressor.knee.setValueAtTime(40, context.currentTime);
        compressor.ratio.setValueAtTime(12, context.currentTime);
        compressor.attack.setValueAtTime(0, context.currentTime);
        compressor.release.setValueAtTime(0.25, context.currentTime);

        // Connect audio graph
        oscillator.connect(compressor);
        compressor.connect(context.destination);

        oscillator.start(0);
        const renderedBuffer = await context.startRendering();
        const floatData = renderedBuffer.getChannelData(0);

        // Sum sample float data to generate a stable checksum/hash
        let sum = 0;
        for (let i = 4500; i < 5000; i++) {
            sum += Math.abs(floatData[i]);
        }

        return sum.toString();
    } catch (e) {
        return 'unsupported';
    }
}
