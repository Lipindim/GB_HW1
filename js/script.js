function convertTemperature() {
    var temperatureStr = document.getElementById('#temperatureC').value;
    var temperature = parseInt(temperatureStr);
    if (isNaN(temperature)) {
        alert("Dear friend! U inputed not a number, please try again!");
    } else {
        document.getElementById('#temperatureF').value = (9 / 5) * temperature + 32;
    }
}
