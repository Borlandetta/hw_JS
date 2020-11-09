//#1
let name = prompt('Ваше имя?', '');
alert(`Вас зовут ${name}!`);
let age = prompt('Сколько Вам лет?', '');
if (age < 25 && age > 22){
alert(`Вам ${age} лет!`);
}
else {
alert(`Вам ${age} года!`);
}
let city = prompt('Ваш город?', '');
alert(`Ваш город: ${city}`);
let phone = prompt('Ваш номер телефона?', '');
alert(`Ваш номер телефона: ${phone}`);
let email = prompt('Ваш почта?', '');
alert(`Ваша почта: ${email}`);
let company = prompt('Ваша компания?', '');
alert(`Вы работаете в компании ${company}`);
document.write(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}.
Мои контактные данные: ${phone}, ${email}. `)


//#2
let yearOfBirth = new Date().getFullYear() - age;
document.write(`${name} родился в ${yearOfBirth} году.`);


//#3

let str = '111111';
let str1 = str.slice(0, 3);
let str2 = str.slice(-3);

let b = Number(str1[0]), c = Number(str1[1]), d = Number(str1[2]), e = Number(str2[0]), f = Number(str2[1]); g = Number(str2[2]); 

let sum1 = b + c + d, sum2 = e + f + g;

if (sum1 == sum2) {
    console.log(true);
}
else {
    console.log(false);
}

//#4

let a;
let com = a > 0;
switch (com) {
    case a == 1:
    console.log(true);
    case a == 0:
    console.log(false);
    case a == -3:
    console.log(false);  
}

//#5

let a = 10,
b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

if ((a + b) > 1) {
    console.log(Math.pow(a + b, 2));
}


//#6

if (a > 2 && a < 11 || b < 14 && b >= 6) {
    console.log(true);
}
else {
    console.log(false);
}

//#7

let n = prompt('Введите число от 0 до 59', '');
let chetvert1 = 60 / 4;
let chetvert2 = chetvert1 * 2;
let chetvert3 = chetvert1 * 3;
let chetvert4 = chetvert1 * 4;
if (n < chetvert1 || n == chetvert1) {
    alert(`Число ${n} попадает в первую четверть часа`);
}
else if (n > chetvert1 && n < chetvert2 || n == chetvert2) {
    alert(`Число ${n} попадает во вторую четверть часа`);
}
else if (n > chetvert2 && n < chetvert3 || n == chetvert3) {
    alert(`Число ${n} попадает в третью четверть часа`);
}
else if (n > chetvert3 && n < chetvert4) {
    alert(`Число ${n} поадает в четвёртую четверть часа`);
}
else {
    alert (`Ошибка!`);
}

//#8

let day = prompt('Введите число от 1 до 31', '');
let month = 30;
let decade1 = month / 3;
let decade2 = decade1 * 2;
let decade3 = decade1 * 3;
if (day < 10 || day == 10) {
    alert(`Число ${day} попадает в первую декаду месяца`);
}
else if (day > 10 && day < 20 || day == 20) {
    alert(`Число ${day} попадает во вторую декаду месяца`);
}
else if (day > 20 && day == 31) {
    alert(`Число ${day} попадает в третью декаду месяца`);
}

//#9

let days = prompt('Введите количество дней', '');
let years = days / 365;
let months = days / 31;
let weeks = days / 7;
let hours = days * 24;
let minutes = hours * 60;
let seconds = minutes * 60;

console.log(days + ' дней');
console.log(years + ' лет');
console.log(monthes + ' месяцев');
console.log(weeks + ' недель');
console.log(hours + ' часов');
console.log(seconds + ' секунд');

if (weeks < 1) {
    console.log('Меньше недели');
} 
else if (months < 1) {
    console.log('Меньше месяца');
} 
else if (years < 1) {
    console.log('Меньше года');
} 
else {
    console.log('Больше года');
}


//#10

let day = prompt('Введите день', '');
let monthNumber;
if (day >= 1 && day <= 31) {
    monthNumber = 1;
    console.log ('Это январь');
} else if (day > 31 && day <= 60) {
    monthNumber = 2;
    console.log ('Это февраль');
} else if (day > 60 && day <= 91) {
    monthNumber = 3;
    console.log ('Это март');
} else if (day > 91 && day <= 121) {
    monthNumber = 4;
    console.log ('Это апрель');
} else if (day > 121 && day <= 152) {
    monthNumber = 5;
    console.log ('Это май');
} else if (day > 152 && day <= 182) {
    monthNumber = 6;
    console.log ('Это июнь');
} else if (day > 182 && day <= 213) {
    monthNumber = 7;
    console.log ('Это июль');
} else if (day > 213 && day <= 244) {
    monthNumber = 8;
    console.log ('Это август');
} else if (day > 244 && day <= 274) {
    monthNumber = 9;
    console.log ('Это сентябрь');
} else if (day > 274 && day <= 305) {
    monthNumber = 10;
    console.log ('Это октябрь');
} else if (day > 305 && day <= 335) {
    monthNumber = 11;
    console.log ('Это ноябрь');
} else if (day > 335 && day <= 365) {
    monthNumber = 12;
    console.log ('Это декабрь');
} 

console.log(monthNumber + 'месяц');

switch(monthNumber) {
    case 1:
    case 2:
        console.log ('Это зима');
    break;
    case 3:
    case 4:
    case 5:
        console.log ('Это весна');
    break;
    case 6:
    case 7:
    case 8:
        console.log ('Это лето');
    break;
    case 9:
    case 10:
    case 11:
        console.log ('Это осень');
    break;
    case 12: 
        console.log('Это зима');
    break;
}


