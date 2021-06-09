let btn = document.getElementById('btn');
let result = document.getElementById('result');

btn.onclick = function(){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let heightInMetrs = height / 100;

    let bmi = weight / (heightInMetrs * heightInMetrs);

    if (bmi <= 16){
        document.getElementById('result').innerHTML = "Ваш ИМТ: " + bmi.toFixed(1) + ". Выраженный дефицит массы тела";
        result.className = 'danger';
    } else if (bmi <= 18.5){
        document.getElementById('result').innerHTML = "Ваш ИМТ: " + bmi.toFixed(1) + ". Недостаточная масса тела";
        result.className = 'caution';
    } else if (bmi <= 25){
        document.getElementById('result').innerHTML = "Ваш ИМТ: " + bmi.toFixed(1) + ". Норма";
        result.className = 'normal';
    } else if (bmi <= 30){
        document.getElementById('result').innerHTML = "Ваш ИМТ: " + bmi.toFixed(1) + ". Ожирение 1 степени";
        result.className = 'caution';
    } else if (bmi <= 39){
        document.getElementById('result').innerHTML = "Ваш ИМТ: " + bmi.toFixed(1) + ". Ожирение 2 степени";
        result.className = 'danger';
    } else if (bmi >= 40){
        document.getElementById('result').innerHTML = "Ваш ИМТ: " + bmi.toFixed(1) + ". Ожирение 3 степени";
        result.className = 'danger';
    };
};