"use strict";

{
    // Task 1

    for (let i = 1; i <= 50; i++) {
        console.log(i);
    }

    for (let i = 35; i >= 8; i--) {
        console.log(i);
    }
}

{
    // Task 2

    for (let i = 89; i >= 11; i--) {
        document.write(i + "</br>");
    }

}

{
    // Task 3

    let sum = 0;

    for (let i = 0; i <= 100; i++) {
        sum += i;
    }

    console.log(sum);

}

{
    // Task 4

    const a = 5;

    for (let i = 1; i <= a; i++) {
        let sum = 0;

        for (let j = 1; j <= i; j++) {
            sum += j;
        }
        console.log(sum);
    }

}

{
    // Task 5
    
    for (let i = 8; i <= 56; i++) {
        if (i % 2 === 1) {
            continue;
        }
        console.log(i);
    }    

}

{
    // Task 6

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
        console.log("");
    }

}

{
    // Task 7

    let num = 0;
    let n = 1000;

    for (; n >= 50; n /= 2) {
        num++;
    }

    console.log(`Количество итераций = ${num}`);
    console.log(`Конечное число = ${n}`);
    
}

{
    // Task 8

    let sum = 0;
    let count = 0;

     for (;;) {
        let num = +prompt("Введите число!");  // + это преобразование к числу строки (+ = Number)
        if (num === 0) {
            alert("Операция завершена");
            break;  //Выход из цикла
        }
        if (isNaN(num)) {
            alert("Ошибка ввода");
            continue;  //Завершение итерации
        }
        sum += num;
        count++;
     }

     console.log(`Сумма чисел = ${sum}`);
     console.log(`Среднее арифметическое = ${sum / count}`);
     
}

{
    // Task 9

    let numbersStr = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
    let minNumber = Infinity;
    let maxNumber = -Infinity;
    let currentNumber = "";

    for (let i = 0; i < numbersStr.length; i++) {
        const char = numbersStr[i];
        if (char !== " ") {
            currentNumber += char;
        } else {
            if (+currentNumber > maxNumber) {
                maxNumber = +currentNumber;
            }
            if (+currentNumber < minNumber) {
                minNumber = +currentNumber;
            }
            
            currentNumber = "";
        }
    }

    console.log(`Максимальное число ${maxNumber}`);
    console.log(`Минимальное число ${minNumber}`);

}

{
    // Task 10

    const n = 42456365;
    const str = n.toString();
	let sum = 0;
    let reverse = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        console.log(char);

        reverse = char + reverse;
        sum += +char;
    }

    console.log(`Количество цифр в числе = ${str.length}`);
    console.log(`Сумма цифр = ${sum}`);
    console.log(`Обратный порядок чисел = ${reverse}`);
}
