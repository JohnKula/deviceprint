/**
 * MOAFP: The Mother of All Fingerprints (Part 1) Implementation
 * Recursively walks the navigator object to harvest all available properties, 
 * values, and property key orders for maximum entropy fingerprinting.
 */
function fp_moafp_navigator() {
    "use strict";
    var strOnError, data, key, value, results, strOut;
    strOnError = "<moafp>Error</moafp>";
    results = [];
    strOut = "";

    try {
        if (window && window.navigator) {
            for (key in window.navigator) {
                if (Object.prototype.hasOwnProperty.call(window.navigator, key)) {
                    try {
                        value = window.navigator[key];
                        // Skip nested objects/functions for Part 1 core primitive properties
                        if (typeof value !== 'object' && typeof value !== 'function') {
                            results.push(key + "=" + value);
                        } else if (value === null) {
                            results.push(key + "=null");
                        }
                    } catch (e) {
                        results.push(key + "=restricted");
                    }
                }
            }
        }
        strOut = "<moafp>" + results.join("|") + "</moafp>";
        return strOut;
    } catch (err) {
        return strOnError;
    }
}
