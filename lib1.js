function getLib1Message() {
    return getMessage();
}

function getMessage() {
    return "Hello from lib1.js";
}

exports.getMessage = getLib1Message;