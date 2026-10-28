/**
 * Adobe Flash Version Fingerprinting Implementation
 * Evaluates legacy Flash plugin presence and version telemetry via ActiveX or MIME types.
 */
function generateFlashFingerprint() {
    let flashVersion = 'not installed';

    try {
        if (navigator.plugins && navigator.plugins.length > 0) {
            const plugin = navigator.plugins['Shockwave Flash'];
            if (plugin) {
                flashVersion = plugin.description;
            }
        } else if (window.ActiveXObject) {
            try {
                const ax = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                if (ax) {
                    const version = ax.GetVariable('$version');
                    flashVersion = version;
                }
            } catch (e) {
                flashVersion = 'disabled or blocked';
            }
        }
    } catch (e) {
        flashVersion = 'unsupported';
    }

    return {
        flashSupported: flashVersion !== 'not installed' && flashVersion !== 'unsupported',
        flashVersion: flashVersion
    };
}
