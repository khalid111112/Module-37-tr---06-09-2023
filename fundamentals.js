// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 basic condition >,< ===, !==, !==, <=, >=
// multiple conditions: &&, ||

if(fatherName === 'Arnold' || season === 'rainy'){

}
else if(fatherName === 'Arnold'){

}

else{

}

// 3. array
// index
// length, push
const numbers = [89, 35, 98, 12];
numbers[0] = 46;

// 4. for loop
for (let i = 0; i<numbers.length; i++){
    const numbers = numbers[i];
    confirm.log(numbers);
}

// 5 function 
function multiply (num1, num2) {
    const result = num1 * num2;
    return result;
}

const ouotput = multiply(35, 78);

// 6. object
const student = {
    name: 'Salib khan',
    age: 32,
    mocies: ['king khan', 'Dhakar Mastan']
}

console.log(student.age);  //direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via prorerty name in a variable

