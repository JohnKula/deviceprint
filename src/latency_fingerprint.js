/**
 * Latency Fingerprint Implementation
 * Measures network connection handshake delays via the Navigation Timing API (PerformanceTiming).
 */
function fingerprint_latency() {
    "use strict";
    var strOnError, perfData, networkLatency;
    strOnError = "Error";
    perfData = null;
    networkLatency = null;
    try {
        // supported by a number of modern browsers
        perfData = window.performance.timing;
        networkLatency = perfData.ConnectEnd - perfData.ConnectStart;
        return networkLatency;
    } catch (err) {
        return strOnError;
    }
}
