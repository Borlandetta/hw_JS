/* №1 Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. Числа передаются параметром. */

function calcSum (a, b, c) {
    return (a - b) / c;
}
let result = calcSum (10, 1, 3);
document.write (result);


/* №2 Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром. */

function calcSum1 (a) {
   return ('5 в квадрате: ' + (a ** 2) + '<br>' + '5 в кубе: ' + (a ** 3))
}
let result1 = calcSum1 (5);
document.write ('<br>' + result1 + '<br>');

// №3 Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

let min = (a, b) => a < b ? a : b;
document.write ('min: ' + min(22,7) + '<br>');

let max = (a, b) => a > b ? a : b;
document.write ('max: ' + max(53, 14) + '<br>');

/* №4 Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив. */

function getNumbers (number1, number2) {
    let arr = [];
    for (let i = number1; i <= number2; i++){
    arr.push(i);
    }
    return arr;
}
let arr = getNumbers (+ prompt('Введите первое число массива'), + prompt('Введите второе число массива'));
document.write('<br>' + arr + '<br>');

function showArray (arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]); 
     }
 }
 showArray(arr);


 /* №5 Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false. */

function isEven (a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
let even = isEven (+ prompt('Введите число'));
document.write(even + '<br>');


/* №6 Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи. */


function getArray (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (isEven(array[i])) {
            newArray.push(array[i]);
        }
    }
    let str = 'Чётные числа: ' + newArray;
    console.log (str + '<br>');
    return newArray;
}


getArray ([2, 5, 33, 18, 60]);


/* №7 Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999 */



function pyramid(height, symbol) {

    symbol = symbol || null;

    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(symbol ? symbol : i);
        }
        document.write('<br>');
    }
}

pyramid (+prompt ('Введите количество рядов'), +prompt ('Введите символ по желанию'));

/* №8 Напишите ф-цию, которая рисует равнобедренный треугольник из
звездочек: Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
цию, но которая выведет перевернутый треугольник.
    *
   ***
  *****
 *******
*********  */

function writeTriangle(rows, isReverse) {
    const indexes = new Array(rows).fill(0).map((_, i) => i);
    if (isReverse) indexes.reverse();
    for (let i of indexes) {
        const spaces = ' '.repeat(rows - 1 - i);
        console.log(spaces + '*'.repeat(1 + i*2) + spaces);
    }
}
 
const n = +prompt('Введите число строк:');
writeTriangle(n);
if (confirm('Вывести перевёрнутый?')) writeTriangle(n, true);


// №10 Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. рекурсию. */

function Sum(number) {
    let sum = 0;
    let str = String(number);   
    for (let i = 0; i < str.length; i++) {
        sum += +str[i];
    } 
    
    if (sum > 9) {
        Sum(sum); 
    }
    console.log(sum);
}

Sum(11475);

/* 11. Дан массив с числами (передается параметром). Выведите
последовательно его элементы, используя рекурсию и не используя цикл. */

let i = 0;

function isArray (arr) {
    console.log(arr[i]);
    i++;
    if (i < arr.length) isArray (arr);
}

isArray([3, 10, 44, 6, 9]); 


