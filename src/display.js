/**
 * Display (Screen) Fingerprint Implementation
 * Gathers screen dimensions, color depth, pixel ratios, and orientation metrics.
 */
function generateDisplayFingerprint() {
    const screenObj = window.screen;
    const metrics = {
        width: screenObj.width,
        height: screenObj.height,
        availWidth: screenObj.availWidth,
        availHeight: screenObj.availHeight,
        colorDepth: screenObj.colorDepth,
        pixelDepth: screenObj.pixelDepth,
        devicePixelRatio: window.devicePixelRatio || 1,
        orientation: screenObj.orientation ? screenObj.orientation.type : 'unknown'
    };

    const rawString = Object.values(metrics).join('|');
    return rawString;
}
