// - створити функцію яка приймає масив та виводить його

 /* let array = [1,2,true];
function array(){
    console.log(array);
}
array(); */



// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

    /* function minimum(a, b, c) {

        if (a < b && a < c) {
            console.log(a);
            return a;
        }

        if (b < a && b < c) {
            console.log(b);
            return b;
        } else {
            console.log(c);
            return c;
        }
    }

   console.log(minimum(2, 1, 4)); */


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

   /* function maximum(a, b, c) {

        if (a > b && a > c) {
            console.log(a);
            return a;
        }

        if (b > a && b > c) {
            console.log(b);
            return b;
        } else {
            console.log(c);
            return c;
        }
    }

    console.log(maximum(5, 7, 3)); */


//- створити функцію яка повертає найбільше число з масиву

   /* function max(array) {
        let max = array[0];
        for (const maxNum of array) {
            if (maxNum > max) max = maxNum;
        }
        return max;
    }

    let maxReturn = max([1, 4, 5, 8]);
    console.log(maxReturn); */


//- створити функцію яка повертає найменьше число з масиву


    /* function min(array) {
        let min = array[0];
        for (const minNum of array) {
            if (minNum < max) min = minNum;
        }
        return min;
    }

    let minReturn = min([1, 4, 5, 8]);
     console.log(minReturn); */


//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

    /* let array4 = [1, 2, 10];
    let i = 0;

    function sum(array) {
        for (const arr of array) {
            i += arr;
        }
        return i;
    }

    console.log(sum(array4)); */


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

   /* let array5 = [1, 2, 3, 4, 5];
    let a = 0;

    function avg(array) {
        for (const arr of array) {
            a += arr;
        }
        return a / array.length;
    }

    console.log(avg(array5)); */


//- створити функцію яка заповнює масив рандомними числами.Цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

   /* function random(count, max) {
        const array = [];
        for (let j = 0; j < count; j++) {

            array.push(Math.round(Math.random() * max));
        }

        return array;

       }
    console.log(random(33,100)); */



/* - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
 EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ] */


/*let array6 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
let array7 =[];
for (let j = 0; j < array6.length; j++) {
    const array6Element = array6[j];
for (const array6ElementKey in array6Element) {
        array7.push(array6ElementKey)  ;
   }
}
console.log(array7);



/*- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ] */


/*let arrayNew = [];
let array = [{name: 'Dima', age: 13}, {model: 'Camry'}]
for (let i = 0; i < array.length; i++) {
    const arr = array[i];
    for (const arrKey in arr) {
        arrayNew.push(arr[arrKey])
    }
}
console.log(arrayNew); */


