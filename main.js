//задача 1

let num = 10;
if (num === 10) {
  console.log("верно");
} else {
  console.log("неверно");
}

//задача 2

let baatir = 25;
if (baatir > 20 && baatir < 21) {
  console.log("первый подьезд");
} else if (baatir > 21 && baatir < 48) {
  console.log("второй подьезд");
} else if (baatir > 49 && baatir < 90) {
  console.log("третий подьезд");
}
//задача 3

let b = 10;
if (b > 0 && b < 7) {
  console.log("true");
} else {
  console.log("false");
}

//задача 4-5

let userName = prompt("ваше имя?");
let userTime = 12;
if (userTime >= 6 && userTime <= 12) {
  console.log("доброе утро," + userName + "!");
} else if (userTime >= 13  && userTime <= 17) {
  console.log("добрый день," + userName + "!");
} else {
  console.log("добрый вечер," + userName + "!");
}

//задача 6

let userAge = 6;
if (userAge < 6 && userAge > 65) {
  console.log("скидка");
} else {
  console.log("без скидки");
}

//задача 7-8

let userChoose1 = prompt("Камень, ножницы, бумага (player-1)");

let userChoose2 = prompt("Камень, ножницы, бумага (player-2)");

if (userChoose1 === "бумага" && userChoose2 === "бумага") {
  console.log("не правилбно!");
} else if (userChoose1 === "бумага" && userChoose2 === "ножницы") {
  console.log("player-2 winner");
} else if (userChoose1 === "бумага" && userChoose2 === "комень") {
  console.log("player-1 winner");
} else if (userChoose1 === "ножницы" && userChoose2 === "бумага") {
  console.log("player-1 winner");
} else if (userChoose1 === "ножницы" && userChoose2 === "ножницы") {
  console.log("не правилбно");
} else if (userChoose1 === "ножницы" && userChoose2 === "комень") {
  console.log("player-2 winner");
} else if (userChoose1 === "комень" && userChoose2 === "бумага") {
  console.log("player-2 winner");
} else if (userChoose1 === "комень" && userChoose2 === "ножницы") {
  console.log("player-1 winner");
} else if (userChoose1 === "комень" && userChoose2 === "комень") {
  console.log("не правилбно");
}

//задача 9

let number = 5;
if (number === 5) {
  console.log("five");
} else {
  console.log("not five");
}