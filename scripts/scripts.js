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
        console.log("")
    }
    
}