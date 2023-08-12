function setMode(mode) {
    console.log("Setting mode to " + mode);
}

function setTemp(temp) {
    console.log("Setting temperature to " + temp + " degrees");
}

function bake(degrees) {
    var message;

    if (degrees > 500) {
        message = "I'm not a nuclear reactor!";
    } else if (degrees < 100) {
        message = "I'm not a refrigerator!";
    } else {
        message = "That's a very comfortable temperature for me.";
        setMode("bake");
        setTemp(degrees);
    }
    return message;
}

var status = bake(350);

console.log(status);