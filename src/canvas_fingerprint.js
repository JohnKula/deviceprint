/**
 * Canvas Fingerprinting Implementation
 * Generates a unique browser/hardware fingerprint based on sub-pixel text and graphics rendering differences.
 */
async function generateCanvasFingerprint() {
    const canvas = document.createElement('canvas');
    canvas.width = 280;
    canvas.height = 60;
    const ctx = canvas.getContext('2d');

    // Layered text, fonts, and emoji to maximize rendering entropy
    ctx.textBaseline = 'top';
    ctx.font = '14px "Arial", sans-serif';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);

    ctx.fillStyle = '#069';
    ctx.fillText('Darkwave Tech ⚡ fingerprint', 2, 15);
    
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText('Darkwave Tech ⚡ fingerprint', 4, 17);

    // Extract base64 encoded PNG data URL
    const dataUrl = canvas.toDataURL();

    // Hash using SubtleCrypto for a fixed-length identifier
    const enc = new TextEncoder().encode(dataUrl);
    const buf = await crypto.subtle.digest('SHA-256', enc);
    
    return Array.from(new Uint8Array(buf))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}
