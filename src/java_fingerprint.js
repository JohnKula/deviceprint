/**
 * Java Fingerprint Implementation
 * Queries the browser's javaEnabled state to detect legacy runtime support.
 */
function fingerprint_java() {
    "use strict";
    var strOnError, strJavaEnabled, strOut;
    strOnError = "Error";
    strJavaEnabled = null;
    strOut = null;
    try {
        if (navigator.javaEnabled()) {
            strJavaEnabled = "true";
        } else {
            strJavaEnabled = "false";
        }
        strOut = strJavaEnabled;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}
