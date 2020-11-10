/* # 1 Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены. */

let str = 'aaa@bbb@ccc';
let regExp = str.replace(/@/g, '!')
document.write(regExp + '<br>');


/* 2 В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025. */

let date = '2025-12-31'.split('-');
let newDate = date[2] + '/' + date[1] + '/' + date[0];
document.write(newDate);

/* 3 Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice). */

let str1 = 'Я учу javascript!';

console.log(str1.substr(2, 3));
console.log(str1.substring(2, 5));
console.log(str1.slice(2, 5)); 


console.log(str1.substr(6, 10));
console.log(str1.substring(6, 16));
console.log(str1.slice(6, 16));

/* 4 Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
}

console.log ('Квадратный корень: ' + Math.sqrt(sum) );

/* 5 Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1. */

let a = 3,
    b = 5,
    c = a - b;
    
console.log(Math.abs(c));

let aa = 6,
    bb = 1,
    cc = aa - bb;
    
console.log(Math.abs(cc));


/* 6 Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014). */


let dateNew = new Date();
console.log(dateNew);

function dateGet(d) {
    let hours = String(d.getHours());
    let min = String(d.getMinutes());
    let sec = String(d.getSeconds());
    let day = String(d.getDate());
    let month = String(d.getMonth() + 1);
    let year = String(d.getFullYear());
    
    if (hours.length < 2) hours = '0' + hours;
    if (min.length < 2) min = '0' + min;
    if (sec.length < 2) sec = '0' + sec;
    if (day.length < 2) day = '0' + day;
    if (month.length < 2) month = '0' + month;
    
    console.log('Время и дата: ' + hours + ':' + min + ':' + sec + ' ' + day +'.' + month + '.' + year);
  }

  dateGet (dateNew);



  /* 7 Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
  найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
  количество раз, буква 'a'. */

  let str2='aa aba abba abbba abca abea';
  let str3=/ab{1,}a/g;

  console.log(str2.match(str3));




/* 8 Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения. */


let phone = /^\+375-[0-9]{2}-[0-9]{7}$/;

function checkPhone (numb) {
    return phone.test(numb);
}

console.log(checkPhone('+375-29-5076863'));



