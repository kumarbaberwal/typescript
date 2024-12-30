"use strict";
const student = {
    name: 'kumar',
    rollno: 106,
    class: 'B. Tech CSE'
};
const student1 = {
    name: 'kumar',
    rollno: 106,
    class: 'B. Tech CSE',
    subjects: ['Maths'],
};
const sum = (a, b) => {
    return a + b;
};
const sub = function (a, b) {
    return a - b;
};
console.log(sum(2, 3));
const logMsg = (msg) => {
    console.log(`Message: ${msg}`);
};
logMsg('Kumar');
console.log(student.subjects);
console.log(student1);
