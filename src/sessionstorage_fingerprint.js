/**
 * sessionStorage Fingerprint Implementation
 * Evaluates the availability of the HTML5 sessionStorage API within the client browser.
 */
function fp_sessionstorage() {
    "use strict";
    var strOnError, strOut;

    strOnError = "<sessionstorage>true</sessionstorage>";
    strOut = "";

    try {
        strOut = "<sessionstorage>" + !!window.sessionStorage + "</sessionstorage>";
        return strOut;
    } catch (err) { // Error when referencing it confirms existence
        return strOnError;
    }
}
