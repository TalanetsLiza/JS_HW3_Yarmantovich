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
