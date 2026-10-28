/**
 * Device Clock Speed / VM Detection Fingerprint Implementation
 * Uses high-resolution performance timers and a recursive Euclidean algorithm 
 * to profile CPU clock intervals and detect virtualization pacing.
 */
function clock() {
    "use strict";
    var strOnError, lngInitClk, lngDiffClk, lngTmp, strOut, i;

    strOnError = "<clkhz>error</clkhz>";
    lngInitClk = 0;
    lngDiffClk = 0;
    lngTmp = 0;
    strOut = "";
    i = 0;

    try {
        lngInitClk = performance.now() / 1000;
        lngDiffClk = performance.now() / 1000 - lngInitClk;
        for (i = 0; i < 20; i++) {
            lngDiffClk = clockcalc(lngDiffClk, performance.now() / 1000 - lngInitClk);
        }
        lngTmp = (Math.round(1 / lngDiffClk));
        strOut = "<clkMHz>" + lngTmp + "</clkMHz>";
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function clockcalc(lngDiff, lngElapse) {
    var lngOnError;
    lngOnError = 0;
    try {
        if (lngDiff < 0.00000001) {
            return lngElapse;
        }
        if (lngDiff < lngElapse) {
            return clockcalc(lngElapse - Math.floor(lngElapse / lngDiff) * lngDiff, lngDiff);
        } else if (lngDiff == lngElapse) {
            return lngDiff;
        } else {
            return clockcalc(lngElapse, lngDiff);
        }
    } catch (err) {
        return lngOnError;
    }
}
