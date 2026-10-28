/**
 * Language Fingerprint Implementation
 * Collects standard browser languages and legacy Microsoft-specific localization properties.
 */
function fp_languages() {
    "use strict";
    var strSep, strOnError, strLang, strOut;
    strSep = "|";
    strOnError = "Error";
    strLang = "";
    strOut = "";
    try {
        if (navigator.language) {
            strLang = "lang=" + navigator.language + strSep;
        } else {
            strLang = "lang=" + "undefined" + strSep;
        }
        if (navigator.languages) {
            strLang = strLang + "langs=" + navigator.languages + strSep;
        } else {
            strLang = strLang + "langs=" + "undefined" + strSep;
        }
        // Microsoft specific properties
        if (navigator.browserLanguage) {
            strLang = strLang + "brlang=" + navigator.browserLanguage + strSep;
        } else {
            strLang = strLang + "brlang=" + "undefined" + strSep;
        }
        if (navigator.systemLanguage) {
            strLang = strLang + "syslang=" + navigator.systemLanguage + strSep;
        } else {
            strLang = strLang + "syslang=" + "undefined" + strSep;
        }
        if (navigator.userLanguage) {
            strLang = strLang + "usrlang=" + navigator.userLanguage;
        } else {
            strLang = strLang + "usrlang=" + "undefined";
        }
        strOut = strLang;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}
