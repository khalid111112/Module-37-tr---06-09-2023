// 'almas', 5, true, {}, []
// '', 0, false, null, undefuned
// check truthy

let myVar = 5;
if(myVar){
    myVar = myVar * 100;

}
else{
    myVar = 0;

}

let myMoney = 50;
// you check negativ or falsy anything
if(!myMoney){

}

const money = 80;
let food;
if(money > 100){
    food = 'biryani';

}

// ternary
let food1 = money> 100 ? 'biryani' : 'cha biscuit';
// console.log(food1)

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// number to string conversion 
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr)

// string to number
const input = '560';
const inputNum = +input;
// console.log(inputNum);


// 
const isActiv = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActiv ? showUser() : hideUser();
// use && if the left dide is true then right side will be executed
isActiv && showUser();
// use || if the left side is false then right side will be executed
isActiv || hideUser();

// toggle boolean
isActiv = !isActiv;

