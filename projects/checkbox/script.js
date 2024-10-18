let choices = document.querySelectorAll('input');
let button = document.querySelector('button');
let result = document.querySelector('.result');

button.addEventListener("click", function() {
    let sum = 0
    for (let i = 0; i < choices.length; i++)
    {
        if (choices[i].checked == true) {
            sum += parseInt(choices[i].value);
        }
    }
    result.textContent = `Общая сумма: ${sum} рублей`;
})