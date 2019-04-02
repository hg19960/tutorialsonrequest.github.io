/*jslint browser: true*/
/*global $*/
/*global document*/
/*global alert*/

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDnRrSfnSJlA3xSk4UoeOE-efr9ZNnLbxU",
    authDomain: "tor-data.firebaseapp.com",
    databaseURL: "https://tor-data.firebaseio.com",
    projectId: "tor-data",
    storageBucket: "tor-data.appspot.com",
    messagingSenderId: "788993838667"
};

$(document).ready(function () {
    'use strict';
    //$('#requestform').attr('action', 'mailto:abc@example.com?subject=' + subject + '&body=' + body);
});

function sendform() {
    var email = 'abc@gmail.com';
    var subject = $('#requestform > input:nth-child(1)').text();
    var body = $('#requestform > input:nth-child(2)').text();
    window.location.href(email + '?subject=' + subject + '&body=' + body);
}