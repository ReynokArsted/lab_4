let choices = document.querySelectorAll('[type="checkbox"]');
let counters = document.querySelectorAll('.count');
let data = document.querySelectorAll('.data');
let button = document.querySelector('button');
let result = document.querySelector('.result');

const costs = [];
for (let i = 0; i < choices.length; i++)
{
    costs[i] = {
        value: 0,
        count: 0,
    }
}

function sum() 
{
    let sum = 0;
    for (let i = 0; i < costs.length; i++)
    {
         sum += costs[i].value;
    }
    return sum;
}

for (let i = 0; i < counters.length; i++) 
{
    counters[i].value = "0";
    counters[i].addEventListener("change", function() {
        if (choices[i].checked == true)
        {
            if (Number.isInteger(parseInt(counters[i].value)) !== true || parseInt(counters[i].value) < 0 || (counters[i].value[0] === "0" && counters[i].value[1] !== "0")) 
            {
                counters[i].value = "1";
                costs[i].value -= parseInt(choices[i].value) * costs[i].count;
                costs[i].count = 1;
                costs[i].value += parseInt(choices[i].value) * costs[i].count;
            }
            else
            {
                costs[i].value -= parseInt(choices[i].value) * costs[i].count;
                costs[i].count = parseInt(counters[i].value);
                costs[i].value += parseInt(choices[i].value) * costs[i].count;
            }
        }
        else
        {
            counters[i].value = "0";
            costs[i].value -= parseInt(choices[i].value) * costs[i].count; 
            costs[i].count = 0;
        }
        result.textContent = `Итого: ${sum()} рублей`;
    });

    choices[i].checked = false;
    choices[i].addEventListener("change", function() 
    {
        if (choices[i].checked == true)
        {
            counters[i].value = "1";
            costs[i].count = 1;
            costs[i].value += parseInt(choices[i].value) * costs[i].count;
        }
        else
        {
            counters[i].value = "0";
            costs[i].value -= parseInt(choices[i].value) * costs[i].count; 
            costs[i].count = 0;
        }
        result.textContent = `Итого: ${sum()} рублей`;
    });
}

data[0].value = "";
data[1].value = "";
button.addEventListener("click", function() 
{
    if (data[0].value !== "" && data[0].value[0] !== " " && data[0].value[data[0].value.length-1] !== " " && data[1].value !== "" && data[1].value[0] !== " " && data[1].value[data[1].value.length-1] !== " " && sum() !== 0)
    {
        alert(`Заказчик: ${data[0].value} ${data[1].value}\nИтого: ${sum()} рублей`);
    }
    else if (data[0].value == "" && data[1].value == "" && sum() == 0)
    {
        alert("Пожалуйста, введите фамилию и имя, а также выберите что-либо!")
    }
    else if(sum() == 0)
    {
        alert("Пожалуйста, выберите хотя бы что-то одно, чтобы оформить заказ!")
    }
    else
    {
        alert("Пожалуйста, повторите ввод фамилии и имени!\nВозможно, поля для ввода пусты или они содержат лишние пробелы")
    }
})
