// №1 Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

let num = [1, 2, 3, 4, 5];
for (q = 0; q < num.length; q++) { 
    document.write(num [q] + '\n'); 
}

/* №2  Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
быть положительными и отрицательными. Выведите на экран только отрицательные
числа, которые больше -10, но меньше -3. */

let str = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < str.length; i++) {
    if (str[i] > -10 && str[i] < -3) console.log (str[i]);

}


/* Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
массива. Запишите ее в переменную result и выведите. */

let arr1 = [];
let result = 0;
for (let i = 23; i < 58; i++) {
    arr1.push(i);  
}
console.log (arr1);

for (let t = 0; t < arr1.length; t++) {
    result += arr1[t];
}
console.log(result);



/*Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.*/

let arr2 = ['10', '20', '30', '50', '235', '3000'];

for (let r = 0; r < arr2.length; r++) {
    if (arr2[r][0] == 1 || arr2[r][0] == 2 || arr2[r][0] == 5) {
        console.log(arr2[r]);
    }
}


/* Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
дни недели, а выходные дни выведите жирным. */

let arr3 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let y = 0; y < arr3.length; y++) {
    if(arr3[y] == 'СБ' || arr3[y] == 'ВС') {
        document.write('<br>' + '<b>' + arr3[y] + '</b>');
    } else{
        document.write('<br>' + arr3[y]);
    }
}

/* Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
и получите последний элемент массива, используя свойство length. */

let city = ['Minsk', 'Vitebsk', 'Grodno'];
city.push ('Gomel');
document.write ('<br>' + city[city.length -1] + '<br>');

/* Запросите у пользователя по очереди числовые значения при помощи prompt и
сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
значение. Выведите получившийся массив на экран. Выполните сортировку чисел
массива, и выведите его на экран. */

let arr4 = [];
for (u = 0; ; u++) {
    arr4[u] = prompt ('Введите число');
    if (arr4[u] == '') break;
}
document.write (arr4 + '<br>');

arr4.sort(function(a, b) {
    return a - b;
});

document.write (arr4 + '<br>');

/* Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
используя цикл while и метод reverse. */


let arr5 = [12, false, 'Текст', 4, 2, -5, 0];
console.log (arr5.reverse());

let a = arr5.length;
while (a >= 0) {
    a--;
}
console.log(arr5);

/* Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6]. */

let arr6 = [5, 9, 21, , , 9, 78, , , , 6];
let amount = 0;
for (let o = 0; o < arr6.length; o++) {
    if (arr6[o] == undefined) {
        amount++
    }
}
console.log (amount);

/* Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
пользователь. Например: высота = 5.*/

let height = 5,
    c = 0,
    n = 0,
    space = "",
    symbol = "";

while (c < height) {
    space = "";
    symbol = "";

    for (n = 0; n < height - c; n++){
        space += " ";
    }
   
    for (n = 0; n < 2 * c + 1; n++) {
        symbol += "^";
    } 

    console.log(space + symbol);
    c++;
}