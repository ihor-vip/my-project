// -- створити функцію яка обчислює та повертає площу прямокутника висотою

/*        function square(a,b){
            return a * b;
        }
        let res1 = square(3,4);
        console.log(res1) */



// - створити функцію яка обчислює та повертає площу кола

/*       function square(r){
            return 3.14 * r * r ;
        }
        let res1 = square(2);
        console.log(res1) */




// - створити функцію яка обчислює та повертає площу циліндру

/*       function square(r, h){
            return  2 * 3.14 * r * h ;
         }
         let res1 = square(2, 5);
        console.log(res1) */




// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

/*  function max(array) {
        let max = array[0];
        for (const maxNum of array) {
            if (maxNum > max) max = maxNum;
        }
        return max;
    }

    let maxReturn = max([1, 4, 5, 8]);
    console.log(maxReturn); */



// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

/*        function create(text) {
            return text;
        }
         create();
        console.log(create('apple')) */



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*        let cars = [{models:['model','model','model']}]
        document.write(`<div`);
        for (const car of cars) {
            document.write(`<div>`);
                document.write(`<ul>car`);
                         for (const model of car.models) {
                             document.write(`<li>${model}</li>`);
                }
                document.write(`</ul>`);
            document.write(`<div>`);
        }
        document.write((`</div>`)) */



//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

         /* let cars = [{car:['model','model','model']}]
        document.write(`<div`);
        for (const car of cars) {
             document.write(`<div>`);
                document.write(`<ul>car`);
                        for (let i = 0; i < car.length; i++) {
                           document.write(`<li>${}</li>`)
                }
               document.write(`</ul>`);
             document.write(`<div>`);
        }
        document.write((`</div>`))*/



//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


/* function sort(array){
    let arrayN = [];
    let arrayS = [];
    let arrayB = [];
    for (let i = 0; i < array.length; i++) {
        const arr = array[i];

        if( typeof arr == 'number'){
            return  arrayN.push[i];
        }

        else if (typeof arr == 'string') {
            return arrayS.push[i];
        }

        else if( typeof arr == 'boolean') {
            return  arrayB.push[i];
        }
    }

}
console.log(sort([1,2,4,true,false,'apple']));  */









