/**
 * Timezone Fingerprint Implementation
 * Evaluates dual-date offset measurements (January and July) to capture timezone offsets 
 * and detect whether the system automatically adjusts for Daylight Saving Time (DST).
 */
function fp_timezone() {
    "use strict";
    var strOnError, dtDate1, dtDate2, strOffset1, strOffset2, strOut;
    strOnError = "<timezone>Error</timezone>";
    dtDate1 = null;
    dtDate2 = null;
    strOffset1 = "";
    strOffset2 = "";
    strOut = "";
    try {
        dtDate1 = new Date(2018, 0, 1);
        dtDate2 = new Date(2018, 6, 1);
        strOffset1 = dtDate1.getTimezoneOffset();
        strOffset2 = dtDate2.getTimezoneOffset();
        strOut = "<timezone>" + strOffset1 + "|" + strOffset2 + "</timezone>";
        return strOut;
    } catch (err) {
        return strOnError;
    }
}
