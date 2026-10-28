/**
 * IndexedDB Fingerprint Implementation
 * Evaluates the availability and support of the HTML5 IndexedDB API within the client browser.
 */
function fp_indexedDB() {
    "use strict";
    var strOnError, strOut;
    strOnError = "<indexedDB>true</indexedDB>";
    strOut = "";
    try {
        strOut = "<indexedDB>" + !!window.indexedDB + "</indexedDB>";
        return strOut;
    } catch (err) { // Error when referencing it confirms existence
        return strOnError;
    }
}
