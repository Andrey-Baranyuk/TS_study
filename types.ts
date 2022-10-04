// Задавайте тип для переменной в которую можно сохранить любое значение;
let anything:any;
anything = -20;
anything = 'Text';
anything = {};

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

// Сделай неизменяемый массив
let person: [string, number];
person = ['Max', 21];

//Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

enum Load {LOADING, READY};

/* const page {
  load: Load.READY
}

if (page.load === Load.LOADING) {
  console.log('Страница загружается');
}
if (page.load === Load.READY) {
  console.log('Страница загружена');
} */

//Укажите типы для следующих функций
function showMessage(message:string):void {
  console.log(message);
}


function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}

//Свой тип данных

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  }
}