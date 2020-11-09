//Выведите числа от 1 до 50 и от 35 до 8.

for (let i = 1; i < 51; i++) { 
    document.write(i + '\n');
  }

  for (let a = 35; a > 7; a--) { 
    document.write(a);
  }

/*Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
  тегом <br /> друг от друга, чтобы получить столбец, а не строку.*/

  let b = 89;
  while (b > 10) {
    document.write(b + '<br>');
    b--;
  }

//С помощью цикла найдите сумму чисел от 0 до 100.

  let sum = 0;
        for (let d = 0; d <= 100; d++) {
            sum += d; 
        }
 document.write(sum + '<br>');

//Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 (1+2+3).

//Выведите чётные числа от 8 до 56. Решить задание через while и for.

let numb = 8;
while (numb <= 56) {
console.log(numb);
numb = numb + 2;
} 

//Необходимо вывести на экран полную таблицу умножения (от 2 до 10)


for(d = 2; d <= 9; d++) {
  for(r = 1; r <= 9; r++ ) {
      console.log(d + ' * ' + r + ' = ', d * r);
  }
}

/*Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num.*/
  
let n = 1000;
let num = 0;
do {
    n /= 2; 
    num ++;
} while ( n > 49)
console.log(n);
console.log(num);

/*Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.*/

let strNumbers = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    number = '',
    numberCounter = 0,
    min,
    max;

for (let i = 0; ; i++) {
    if (strNumbers[i] == undefined) {
      break;
    }
    
    if (strNumbers[i] != ' ') {
        number += strNumbers[i];
    } else {
       if (numberCounter == 0) {
           min = number;
           max = number;
       }
       numberCounter++;
       if (min > +number) min = +number;
       if (max < +number) max = +number;
        number = '';
    }
}
console.log('MIN: ' + min);
console.log('MAX: ' + max);
