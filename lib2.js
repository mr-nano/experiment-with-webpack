let lib1 = require("./lib1");

function getLib2Message() {
    return lib1.getMessage() + " & " + getMessage();
}

function getMessage() {
    return "Hello from lib2.js";
}

exports.getMessage = getLib2Message