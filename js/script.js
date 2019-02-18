function convertTemp() {
    var tempStr = document.getElementById('#tempC').value;
    var temp = parseInt(tempStr);
    if (isNaN(temp)) {
        alert("Dear friend! U inputed not a number, please try again!");
    } else {
        document.getElementById('#tempF').value = (9 / 5) * temp + 32;
    }
}
