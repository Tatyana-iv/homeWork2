// // задание 1//
// let a = 10;
// let b = 20;
// alert(a);
// alert(b);

// // задание 2 //
// let data = 2007;
// alert("Год выпуска первого iPhone:" + data);

// // задание 3//

// let nameOwner = "Brendan Eich"
// alert ("Имя создателя JavaScript - " + nameOwner);

// // задание 4//

// let first = 10;
// let second = 2;
// let operation = {
//     sum: null,
//     diff: null,
//     product: null,
//     quotient: null,
// };
// function matOperation(a, b) {
//     alert("сумма значений: " + (operation.sum = first + second));
//     alert("разность значений : " + (operation.diff = first - second));
//     alert("произведение значений : " + (operation.product = first * second));
//     alert("частное значений : " + (operation.quotient = first / second));
//     return;
// };
// matOperation(first, second);

// // задание 5//
// let result = 2 ;
// alert(result **5);

// // задание 6//

// let a=9;
// let b=2;
// alert(a % b);

// // задание 7//
// let num =1;
// num +=5;
// num -=3;
// num *=7;
// num /=3;
// num++;
// num--;
// alert(num);

// // задание 8//
// let age = prompt("сколько вам лет?");
// alert("ваш возраст " + age);

// // задание 9//
// let user = {
//     name: 'Tanya',
//     age: 24,
//     isAdmin: true
// };

// user['city of residence'] = null;
// user.age = 25;
// delete user['city of residence'];

// let info = Number(prompt("Какую информацию хотите узнать о \n? \n 1 - name \n 2 - age \n 3 -admin?"));
// let show = () => {
//     let choiceUser = --info;
//     let nameUser = Object.keys(user)[choiceUser];
//     let nameValue = Object.values(user)[choiceUser];
//     if (choiceUser <= 2) {
//         alert(`Дата рождения пользователя ${nameUser} это ${nameValue}`);
//     } else {
//         alert(`Вы не можете выбрать это значение: ${info + 1}`)
//     }
// }
// showData(user);

// задание 10//

let nameU = prompt(`Как тебя зовут?`, Tanya);
alert(`Привет,` + nameU + "!");
