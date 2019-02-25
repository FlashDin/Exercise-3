var num1 = '';
var num2 = '';
var spTor = '';
var calcRes = '';
window.onload = function () {
    // document.querySelector('h1').textContent = "Macan";
    document.querySelector('h1').innerHTML = "Calculator";
    num1 = document.getElementById('calcText');
    num2 = document.getElementById('calcTmp');
    spTor = document.getElementById('calcSpTor');
    calcRes = document.getElementById('calcResult');
};

function numPad(par) {
    num1.value += par;
}

function sepPad(par) {
    spTor.value = par;
    if (num1.value != '' && num1.value != null) {
        if (num2.value != '' && num2.value != null) {
            switch (spTor.value) {
                case '+':
                    num2.value = parseFloat(num2.value) + parseFloat(num1.value);
                    break;
                case '-':
                    num2.value = parseFloat(num2.value) - parseFloat(num1.value);
                    break;
                case '*':
                    num2.value = parseFloat(num2.value) * parseFloat(num1.value);
                    break;
                case '/':
                    num2.value = parseFloat(num2.value) / parseFloat(num1.value);
                    break;
                case '%':
                    num2.value = parseFloat(num2.value) % parseFloat(num1.value);
                    break;
            }
        } else {
            num2.value = num1.value;
        }
    }
    num1.value = '';
    calcRes.innerText = '';
}

function equal() {
    if (num1.value != '' && num1.value != null) {
        if (num2.value != '' && num2.value != null) {
            switch (spTor.value) {
                case '+':
                    num2.value = parseFloat(num2.value) + parseFloat(num1.value);
                    break;
                case '-':
                    num2.value = parseFloat(num2.value) - parseFloat(num1.value);
                    break;
                case '*':
                    num2.value = parseFloat(num2.value) * parseFloat(num1.value);
                    break;
                case '/':
                    num2.value = parseFloat(num2.value) / parseFloat(num1.value);
                    break;
                case '%':
                    num2.value = parseFloat(num2.value) % parseFloat(num1.value);
                    break;
            }
        } else {
            num2.value = num2.value;
        }
    }
    calcRes.innerHTML = 'Hasil Akhir = ' + num2.value;
    spTor.value = '';
    num2.value = '';
    num1.value = '';
}

function clearField() {
    spTor.value = '';
    num2.value = '';
    num1.value = '';
    calcRes.innerText = '';
}
