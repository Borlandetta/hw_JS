/* №2 Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9,
a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль
результат выражений: */


let a1 = 5 % 3;
let a2 = 3 % 5;
let a3 = 5 + '3';
let a4 = '5' - 3;
let a5 = 75 + 'кг';
let a6 = 785 * 653;
let a7 = 100 / 25;
let a8 = 0 * 0;
let a9 = 0 / 2;
let a10 = 89 / 0;
let a11 = 98 + 2;
let a12 = 5 - 98;
let a13 = (8 + 56 * 4) / 5;
let a14 = (9 - 12) * 7 / (5 + 2);
let a15 = +"123";
let a16 = 1 || 0;
let a17 = false || true;
let a18 = true > 0;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
console.log(a11);
console.log(a12);
console.log(a13);
console.log(a14);
console.log(a15);
console.log(a16);
console.log(a17);
console.log(a18);

console.log(typeof a1);
console.log(typeof a2);
console.log(typeof a3);
console.log(typeof a4);
console.log(typeof a5);
console.log(typeof a6);
console.log(typeof a7);
console.log(typeof a8);
console.log(typeof a9);
console.log(typeof a10);
console.log(typeof a11);
console.log(typeof a12);
console.log(typeof a13);
console.log(typeof a14);
console.log(typeof a15);
console.log(typeof a16);
console.log(typeof a17);
console.log(typeof a18);


/* №3 Напишите скрипт, который находит площадь прямоугольника высотой 23см и
шириной 10см, значение высоты и ширины должны хранится в width и height,
соответственно, а значение площади должно хранится в числовой переменной SPryam. */

let height = 23;
let width = 10;
let SPryam = height * width;
console.log('Площадь прямоугольника равна =' + " " + SPryam + 'см');

// #4 

let hCilindra = 10;
let dCilindra = a7;
let rCilindra = dCilindra / 2;
let stepen = 2;
let rCilindra2 = Math.pow(rCilindra, stepen);
let numberP = 3.14;
let vCilindra = numberP * rCilindra2 * hCilindra;
console.log(vCilindra);

//№5 

let rKruga = 5;
let rStepen = Math.pow(rKruga, stepen);
let SKruga = rStepen * numberP;
console.log(SKruga);

// #6

let aTrap = 5;
let bTrap = 7;
let hTrap = 10;
let Summ = (aTrap + bTrap) / 2;
let STrap = Summ * hTrap;
console.log(STrap);

//#8

let a = 8,
b = 3,
x = ((16 - a) + (2 * b)) / 2;
console.log(x);

let xNomer2 = (a-(b*15))/-3;
console.log(xNomer2);