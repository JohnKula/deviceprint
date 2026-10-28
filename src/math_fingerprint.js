/**
 * Math Routine Fingerprinting Implementation
 * Measures floating-point arithmetic quirks across different CPU architectures and JS engines.
 */
function generateMathFingerprint() {
    const results = {};
    
    // Evaluate mathematical trigonometric variations
    results.sin = Math.sin(10000);
    results.tan = Math.tan(10000);
    results.acos = Math.acos(0.123);
    results.atan = Math.atan(0.5);
    results.exp = Math.exp(1);
    
    // Combine into a deterministic string representation
    const rawString = Object.values(results).join('|');
    
    // Simple numeric hash calculation
    let hash = 0;
    for (let i = 0; i < rawString.length; i++) {
        const char = rawString.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    
    return hash.toString(16);
}
