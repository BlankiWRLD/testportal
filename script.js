// ==UserScript==
// @name         Hack TestPortal
// @namespace    https://*.testportal.pl/
// @version      1.0.5
// @description  JTTP Hack TestPortal
// @author       BlankiWRLD
// @updateURL    https://raw.githubusercontent.com/BlankiWRLD/testportal/main/script.js
// @downloadURL  https://raw.githubusercontent.com/BlankiWRLD/testportal/main/script.js
// @match        https://*.testportal.net/*
// @match        https://*.testportal.pl/*
// @grant        none
// ==/UserScript==

//(function() {
//    'use strict';
console.log("[TESTPORTAL MULTITOOL] started")
const original = RegExp.prototype.test;
RegExp.prototype.test = function (s) {
    const string = this.toString();
    if (string.includes("native code") && string.includes("function")) {
        return true;
    }
    const r = original.call(this, s);
    return r;
};

logToServer = function(x) { console.log(x) }
function initPage() {
    if (!window.location.href.includes("LoadTestStart.html")) {
        return
    }
    //if (document.getElementsByClassName('test-card-body').length == 1) {

    //} else {
    document.getElementsByClassName('test-card-body')[0].innerHTML += "Witaj byczq, skoncentruj sie na tescie, ale nie za bardzo, tak na luzie. Wszystko będzie git.<br />Mozesz wychodzic poza karte, szukac w przegladarce, lub innej aplikacji, i robic wszystkie te cuda, nauczyciel sie nie dowie.<br /> Btw hopsaj na <a href=\"https://discord.gg/KhMuN7tJfF\" target=\"_blank\">discorda</a> <br />Z fartem. <br />~ Wiesz kto"
    document.getElementsByClassName('test-card-content-with-icon__icon')[0].innerHTML = "<img src=\"https://git.mrcyjanek.net/mrcyjanek/testportal-multitool/raw/branch/main/static/error.svg\" width=\"75\">"
    //}
}
function timeLimit() {
    window.startTime = Infinity;

    document.hasFocus = () => {
        return true;
    };
    document.getElementById("remaining_time_content").outerHTML = "";
    document.getElementById("remaining_time_label").style.color = "#0bc279";
    document.getElementById("remaining_time_label").style.fontWeight = 600;
    document.getElementById("remaining_time_label").innerText = "0 h 0 min. 18 sek.";

}


//setTimeout(initPage, 100)
if (!window.location.href.includes("LoadTestStart.html")) {
    setTimeout(timeLimit, 0)
    setTimeout(answerSearch, 100)
    setTimeout(imageSearch, 200)
}
//})();
