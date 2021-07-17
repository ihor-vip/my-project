// - створити функцію яка приймає масив та виводить його

 /* let array = [1,2,true];
function arrays(){
    console.log(array);
}
arrays(); */



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


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

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


// - створити функцію яка повертає найбільше число з масиву

  /*  function max(array) {
        let max = array[0];
        for (const maxNum of array) {
            if (maxNum > max) max = maxNum;
        }
        return max;
    }

    let maxReturn = max([1, 4, 5, 8]);
    console.log(maxReturn); */


// - створити функцію яка повертає найменьше число з масиву


    /* function min(array) {
        let min = array[0];
        for (const minNum of array) {
            if (minNum < min) min = minNum;
        }
        return min;
    }

    let minReturn = min([1, 4, 5, 8]);
     console.log(minReturn); */


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

    /* let array4 = [1, 2, 10];
    let i = 0;

    function sum(array) {
        for (const arr of array) {
            i += arr;
        }
        return i;
    }

    console.log(sum(array4)); */


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

   /* let array5 = [1, 2, 3, 4, 5];
    let a = 0;

    function avg(array) {
        for (const arr of array) {
            a += arr;
        }
        return a / array.length;
    }

    console.log(avg(array5)); */


// - створити функцію яка заповнює масив рандомними числами.Цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

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



/* - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
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

/*function array(){
    let arrayNew = [];
    let array = [{}, {}]
    for (let i = 0; i < array.length; i++) {
        const arr = array[i];
        for (const arrKey in arr) {
            arrayNew.push(arr[arrKey])
        }
    }
}
let array() = [{name: 'Dima', age: 13}, {model: 'Camry'}];
console.log(arrayNew);


/* - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    EXAMPLE:
    [1,2,3,4]
    [2,3,4,5]
    результат
    [3,5,7,9]  */

/* let array1 = [1,2,3,4];
let array2 = [2,3,4,5];
 function sumArray (array1,array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i] + array2[i]);
    }
    return newArray;
}
const returnArrayConst = sumArray([1,2,3,4],[2,3,4,5]);
console.log(returnArrayConst);  */



// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

/*     function fill(array1,array2) {

        for (let i = 0; i < array2.length; i++) {
            array1.push(array2[i]);
        }
        return array1;
    }
    const newArray = fill(['a', 'b', 'c'], [1,2,3]);
    console.log(newArray); */



// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

/*        let array = [1, 2, 3];
          array.reverse()
          console.log(array); */



// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

/*        const array = [1, 2, 3];
          const array1 = [4, 5, 6]
          const array2 = array.concat(array1);

          console.log(array2); */




// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

/*        const array = [1, 2, 3];
          const array1 = [4, 5, 6]
          const array2 = array1.concat(array);

          console.log(array2); */



// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

/*        const array = [1, 2, 3, 4, 5];
          array.splice(0,3);
          console.log(array); */



// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

/*        const array = [1, 2, 3, 4, 5];
              array.splice(2,3);
          console.log(array); */



// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

/*        const array = [1, 2, 3, 4, 5];
          const array1 = ['a', 'b', 'c'];
             array.splice(3,2)
          const array2 = array.concat(array1);

          console.log(array2); */



// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

/*        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
          console.log(array[i]);
            }
        } */



// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

 /*       const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const array2= [];
        for (let i = 0; i < array.length; i++) {
             array2[i] = array[i];
        }
        console.log(array2); */



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

/*      const array = [ 'a', 'b', 'c'] ;
      for (const string of ['a', 'b', 'c']) {
         document.write(`${string}`);
      } */



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

/*      const array = [ 'a', 'b', 'c'] ;
        let i = 0;
        while ( i < array.length) {
            document.write(`${array[i]}`);
         i++;
       } */




// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for  зібрати всі букви в слово.

/*        const array = [ 'a', 'b', 'c'];
        for (let i = 0; i < array.length; i++) {
            document.write(array[i]);
        } */


