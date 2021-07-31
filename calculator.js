/* PWA  code start*/
if ("serviceWorker" in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('https://github.com/VishalKumarSankhyan/Calculator.github.io/blob/main/serviceWorker.js').then(() => {
            console.log('Service Worker Registered')
        })
    })
}
/* PWA  code end*/

calculator_buttons = document.querySelectorAll('.calculator_button');
oprater_btn = document.querySelectorAll('.oprater_btn');
num_btn = document.querySelectorAll('.num_btn');
equal_btn = document.querySelector('.equal');
display = document.querySelector('.display');
oprater_btn_status = false;
equal_btn_status = false;
display_active = true;
negative_positive_var = '';
var oprater_variable = '';
var number_variable = '';
var oprater_count = '';
var last_oprater = '';
display_value = '';
var cal_var = '';
var pre_res = '';
var nbt;

resetkeybord();
setInterval(function () {
    display_value = display.value;
    display_value = display_value.split('');

    if (display_value.length >= 20) {
        display_active = false;
    }
    else {
        display_active = true;
    }

}, 1)
window.addEventListener('keydown', function (e) {
    e.preventDefault();

    if (e.keyCode == 8) {
        backspace();
    }
    if (e.keyCode == 46) {
        clearall();
    }
    if (e.keyCode == 48) {
        number_variable = '0';
        number_function(number_variable, null);
    }
    if (e.keyCode == 49) {
        number_variable = 1;
        number_function(number_variable, null);
    }
    if (e.keyCode == 50) {
        number_variable = 2;
        number_function(number_variable, null);
    }
    if (e.keyCode == 51) {
        number_variable = 3;
        number_function(number_variable, null);
    }
    if (e.keyCode == 52) {
        number_variable = 4;
        number_function(number_variable, null);
    }
    if (e.keyCode == 53 && !e.shiftKey) {
        number_variable = 5;
        number_function(number_variable, null);
    }
    if (e.keyCode == 54) {
        number_variable = 6;
        number_function(number_variable, null);
    }
    if (e.keyCode == 55) {
        number_variable = 7;
        number_function(number_variable, null);
    }
    if (e.keyCode == 56 && !e.shiftKey) {
        number_variable = 8;
        number_function(number_variable, null);
    }
    if (e.keyCode == 57) {
        number_variable = 9;
        number_function(number_variable, null);
    }

    /*decimal*/
    if (e.keyCode == 110) {
        number_variable = '.';
        number_function(number_variable, null);
    }
    if (e.keyCode == 190) {
        number_variable = '.';
        number_function(number_variable, null);
    }
    /*decimal*/

    /*multiply*/
    if (e.keyCode == 106) {
        if (oprater_btn_status == true) {
            oprater_variable = '×';
            number_function(null, oprater_variable);
        }
    }
    if (e.shiftKey && e.keyCode === 56) {
        if (oprater_btn_status == true) {
            oprater_variable = '×';
            number_function(null, oprater_variable);
        }
    }
    /*multiply*/

    /*plus*/

    if (e.keyCode == 107) {
        if (oprater_btn_status == true) {
            oprater_variable = '+';
            number_function(null, oprater_variable);
        }
    }
    if (e.shiftKey && e.keyCode === 187) {
        if (oprater_btn_status == true) {
            oprater_variable = '+';
            number_function(null, oprater_variable);
        }
    }

    /*plus*/

    /*subtract*/

    if (e.keyCode == 109) {
        if (oprater_btn_status == true) {
            oprater_variable = '−';
            number_function(null, oprater_variable);
        }
    }
    if (e.shiftKey && e.keyCode == 189) {
        if (oprater_btn_status == true) {
            oprater_variable = '−';
            number_function(null, oprater_variable);
        }
    }
    /*subtract*/

    /*devide*/
    if (e.keyCode == 111) {
        if (oprater_btn_status == true) {
            oprater_variable = '÷';
            number_function(null, oprater_variable);
        }
    }
    if (e.keyCode == 191) {
        if (oprater_btn_status == true) {
            oprater_variable = '÷';
            number_function(null, oprater_variable);
        }
    }
    /*devide*/

    /*equal*/
    if (e.keyCode === 187 && !e.shiftKey) {
        if (equal_btn_status == true) {
            display.value += '=';
            result_function()
        }
    }
    /*equal*/

    /*enter*/
    if (e.keyCode === 13) {
        if (equal_btn_status == true) {
            display.value += '=';
            result_function()
        }
    }
    /*enter*/

    // numpade key

    if (e.keyCode == 96) {
        number_variable = 0;
        number_function(number_variable, null);
    }
    if (e.keyCode == 97) {
        number_variable = 1;
        number_function(number_variable, null);
    }
    if (e.keyCode == 98) {
        number_variable = 2;
        number_function(number_variable, null);
    }
    if (e.keyCode == 99) {
        number_variable = 3;
        number_function(number_variable, null);
    }
    if (e.keyCode == 100) {
        number_variable = 4;
        number_function(number_variable, null);
    }
    if (e.keyCode == 101) {
        number_variable = 5;
        number_function(number_variable, null);
    }
    if (e.keyCode == 102) {
        number_variable = 6;
        number_function(number_variable, null);
    }
    if (e.keyCode == 103) {
        number_variable = 7;
        number_function(number_variable, null);
    }
    if (e.keyCode == 104) {
        number_variable = 8;
        number_function(number_variable, null);
    }
    if (e.keyCode == 105) {
        number_variable = 9;
        number_function(number_variable, null);
    }

});

function resetkeybord() {
    for (let i = 0; i < calculator_buttons.length; i++) {
        calculator_buttons[i].disabled = true;
        oprater_btn_status = false;

        for (let i = 0; i < num_btn.length; i++) {
            num_btn[i].disabled = false;
        }
        calculator_buttons[i].addEventListener('click', function () {
            ele = document.getElementById(this.id);
            ele.children[1].classList.add('touched');

            setTimeout(function () {
                ele.children[1].classList.remove('touched');
            }, 700)
        })
    }
}

for (let i = 0; i < num_btn.length; i++) {
    num_btn[i].addEventListener('click', function () {
        number_variable = this.id;
        number_function(number_variable, null);
    });
}

for (let i = 0; i < oprater_btn.length; i++) {
    oprater_btn[i].addEventListener('click', function () {
        oprater_variable = this.id;
        number_function(null, oprater_variable);
    });
}

function number_function(num, opt) {

    if (display_active == true) {
        nbt1 = display.value;

        if (num == null || num == '') {

        }
        else {

            if (num == '.' && display.value == '0' || num == '.') {

                decimal_check = display.value;

                if (decimal_check.includes('×') || decimal_check.includes('−') || decimal_check.includes('+') || decimal_check.includes('÷')) {

                    if (decimal_check.includes('×')) {
                        decimal_check = decimal_check.split('×');
                    }
                    if (decimal_check.includes('−')) {
                        decimal_check = decimal_check.split('−');
                    }
                    if (decimal_check.includes('+')) {
                        decimal_check = decimal_check.split('+');
                    }
                    if (decimal_check.includes('÷')) {
                        decimal_check = decimal_check.split('÷');
                    }

                    if (decimal_check[1].includes('.')) {

                    }
                    else {
                        display.value += num;
                    }
                }

                else {
                    decimal_check = display.value;

                    if (decimal_check.includes('.')) {

                    }
                    else {
                        display.value += num;
                    }

                }

            }

            else {
                if (display.value == '0') {
                    display.value = num;
                }
                else {
                    display.value += num;
                }
            }

            for (let i = 0; i < calculator_buttons.length; i++) {
                calculator_buttons[i].disabled = false;
                oprater_btn_status = true;
                equal_btn.disabled = true;
            }
        }

        if (opt == null) {

        }
        else {

            nbt = nbt1.split('');

            if (nbt[nbt.length - 1] == '×' || nbt[nbt.length - 1] == '−' || nbt[nbt.length - 1] == '+' || nbt[nbt.length - 1] == '÷') {

                if (nbt[nbt.length - 1] == '×') {
                    display.value = nbt1.replace('×', opt);
                }
                if (nbt[nbt.length - 1] == '−') {
                    display.value = nbt1.replace('−', opt);
                }
                if (nbt[nbt.length - 1] == '+') {
                    display.value = nbt1.replace('+', opt);
                }
                if (nbt[nbt.length - 1] == '÷') {
                    display.value = nbt1.replace('÷', opt);
                }
            }

            else {
                display.value += opt;
                cal_var = display.value;

                cal_var = cal_var.split('');
                oprater_count = 0;
                for (let i = 0; i < cal_var.length; i++) {

                    if (cal_var[i] == '×' || cal_var[i] == '−' || cal_var[i] == '+' || cal_var[i] == '÷') {
                        ++oprater_count
                    }
                }
                if (oprater_count >= 2) {
                    last_oprater = cal_var[cal_var.length - 1];
                    display.value = '';
                    for (let i = 0; i < cal_var.length - 1; i++) {
                        display.value += cal_var[i];
                    }
                    result_function()
                }

            }

        }

        pre_res = display.value;

        if (pre_res.includes('×') || pre_res.includes('−') || pre_res.includes('+') || pre_res.includes('÷')) {

            if (pre_res.includes('×')) {
                pre_res = pre_res.split('×');

            }
            if (pre_res.includes('−')) {
                pre_res = pre_res.split('−');

            }
            if (pre_res.includes('+')) {
                pre_res = pre_res.split('+');

            }
            if (pre_res.includes('÷')) {
                pre_res = pre_res.split('÷');

            }

            if (pre_res.length == 2) {
                if (pre_res[1] != '') {
                    equal_btn.disabled = false;
                    equal_btn_status = true;
                }
            }
        }
    }
}

function backspace() {
    var backspacevar = '';
    var backspace_var = '';

    backspacevar = display.value;
    backspacevar = backspacevar.split('');

    for (let i = 0; i < backspacevar.length - 1; i++) {
        backspace_var += backspacevar[i];
    }

    if (backspace_var == '') {
        display.value = 0;
        resetkeybord();
    }
    else {
        display.value = backspace_var;
    }

}

function clearall() {
    display.value = '0';
    resetkeybord();
}

function result_function() {
    equal_btn.disabled = true;
    equal_btn_status = false;
    result_variable = display.value;

    if (result_variable.includes('×') || result_variable.includes('−') || result_variable.includes('+') || result_variable.includes('÷')) {

        if (result_variable.includes('×')) {
            result_variable = result_variable.split('×');


            if (result_variable[0].includes('.') && result_variable[1].includes('.')) {
                display.value = parseFloat(result_variable[0]) * parseFloat(result_variable[1]);
            }

            else if (result_variable[0].includes('.')) {
                display.value = parseFloat(result_variable[0]) * parseInt(result_variable[1]);
            }
            else if (result_variable[1].includes('.')) {
                display.value = parseInt(result_variable[0]) * parseFloat(result_variable[1]);
            }

            else {
                display.value = parseInt(result_variable[0]) * parseInt(result_variable[1]);
            }

        }
        if (result_variable.includes('−')) {
            result_variable = result_variable.split('−');


            if (result_variable[0].includes('.') && result_variable[1].includes('.')) {
                display.value = parseFloat(result_variable[0]) - parseFloat(result_variable[1]);
            }

            else if (result_variable[0].includes('.')) {
                display.value = parseFloat(result_variable[0]) - parseInt(result_variable[1]);
            }
            else if (result_variable[1].includes('.')) {
                display.value = parseInt(result_variable[0]) - parseFloat(result_variable[1]);
            }

            else {
                display.value = parseInt(result_variable[0]) - parseInt(result_variable[1]);
            }

        }
        if (result_variable.includes('+')) {
            result_variable = result_variable.split('+');


            if (result_variable[0].includes('.') && result_variable[1].includes('.')) {
                display.value = parseFloat(result_variable[0]) + parseFloat(result_variable[1]);
            }

            else if (result_variable[0].includes('.')) {
                display.value = parseFloat(result_variable[0]) + parseInt(result_variable[1]);
            }
            else if (result_variable[1].includes('.')) {
                display.value = parseInt(result_variable[0]) + parseFloat(result_variable[1]);
            }

            else {
                display.value = parseInt(result_variable[0]) + parseInt(result_variable[1]);
            }


        }
        if (result_variable.includes('÷')) {
            result_variable = result_variable.split('÷');


            if (result_variable[0].includes('.') && result_variable[1].includes('.')) {
                display.value = parseFloat(result_variable[0]) / parseFloat(result_variable[1]);
            }

            else if (result_variable[0].includes('.')) {
                display.value = parseFloat(result_variable[0]) / parseInt(result_variable[1]);
            }
            else if (result_variable[1].includes('.')) {
                display.value = parseInt(result_variable[0]) / parseFloat(result_variable[1]);
            }

            else {
                display.value = parseInt(result_variable[0]) / parseInt(result_variable[1]);
            }

        }

        if (display.value.includes('.')) {
            display.value = parseFloat(display.value).toFixed(2);
        }

        if (last_oprater == '×' || last_oprater == '−' || last_oprater == '+' || last_oprater == '÷') {
            display.value += last_oprater;
            last_oprater = '';
        }

        if (display.value == 0) {
            resetkeybord();
        }


    }
}

function negative_positive_converter() {
    negative_positive_var = display.value;

    if (negative_positive_var.includes('×') || negative_positive_var.includes('−') || negative_positive_var.includes('+') || negative_positive_var.includes('÷')) {

    }

    else {
        if (Math.sign(negative_positive_var) == 1) {
            negative_positive_var = -Math.abs(negative_positive_var);
            display.value = negative_positive_var;
        }

        else {
            negative_positive_var = Math.abs(negative_positive_var);
            display.value = negative_positive_var;
        }
    }
}

