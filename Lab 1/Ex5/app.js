function printValue(divId, value) {
    $("#" + divId).html(value);
}

window.onload = function () {
    var eq = document.getElementById("equal");
    eq.addEventListener("click", showResult);
    document.getElementById("sum").addEventListener("click", readOperation);
    document.getElementById("dif").addEventListener("click", readOperation);
    document.getElementById("prod").addEventListener("click", readOperation);
    document.getElementById("div").addEventListener("click", readOperation);
    document.getElementById("mod").addEventListener("click", readOperation);
}
var operation = "";
function readOperation() {
    operation = this.id;
}

function showResult() {
    var firstNumberText = $('#firstNumber').val();
    var secondNumberText = $('#secondNumber').val();

    var firstNumber = parseFloat(firstNumberText);
    var secondNumber = parseFloat(secondNumberText);

    var result;
    switch (operation) {
        case "sum":
            result = firstNumber + secondNumber;
            break;
        case "dif":
            result = firstNumber - secondNumber;
            break;
        case "prod":
            result = firstNumber * secondNumber;
            break;
        case "div":
            result = firstNumber / secondNumber;
            break;
        case "mod":
            result = firstNumber % secondNumber;
            break;
        default:
            result = 0;
    }

    printValue("result",result);
}