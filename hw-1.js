let age = 15;
console.log(age);

let name = "Nikita";
console.log(name);

let isStudent = true;
console.log(isStudent);

let myString = "Не біжи вперед потяга";
console.log(myString);

let myNumber = 13;
myNumber = myNumber + 10;
console.log(myNumber);

let myNull = null;
console.log(myNull);

let userName = prompt("Введіть своє ім’я");
alert("Привіт, " + userName);
console.log(typeof userName);

let userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
console.log(userAnswer);

alert("Увага! Дія може бути небезпечною.");
let dangerConfirm = confirm("Ви впевнені, що хочете продовжити?");

if (dangerConfirm) {
  console.log("Користувач погодився продовжити");
} else {
  console.log("Користувач скасував дію");
}
