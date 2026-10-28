/**
 * Math Routine Fingerprint Implementation
 * Profiles floating-point rounding quirks and instruction handling by evaluating COSH(10) and TAN(-1e300).
 */
function fp_mathroutines() {
    "use strict";
    var strOnError, strOut;
    strOnError = "<mathroutines>Error</mathroutines>";
    strOut = "";
    try {
        strOut = "<mathroutines>" + ((Math.exp(10) + 1 / Math.exp(10)) / 2) + "|" + Math.tan(-1e300) + "</mathroutines>";
        return strOut;
    } catch (err) {
        return strOnError;
    }
}
