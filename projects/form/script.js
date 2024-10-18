let text_1 = document.querySelector(".text_1");
let text_2 = document.querySelector(".text_2");
let button = document.querySelector('[type="button"]');
let ans = document.querySelector('.answer');

button.addEventListener('click', function(){
    if (text_1.value !== "" && text_1.value[0] !== " " && text_1.value[text_1.value.length-1] !== " " && text_2.value !== "" && text_2.value[0] !== " " && text_2.value[text_2.value.length-1] !== " ") {
        ans.textContent = `Ответ: Привет, ${text_1.value} ${text_2.value}!`;
        text_1.value = "";
        text_2.value = ""; 
    } else {
        ans.textContent = "Ответ: Пожалуйста, повторите ввод данных! Возможно, одно из полей оказалось пустым или оно содержит лишние пробелы";
    }
});
