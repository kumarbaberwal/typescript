type school = {
    name: string,
    rollno: number,
    class: string,
    subjects?: (string | number) []
}

const student: school = {
    name: 'kumar',
    rollno: 106,
    class: 'B. Tech CSE'
}

interface college {
    name: string,
    rollno: number,
    class: string,
    subjects: [string | number]
}

const student1: college = {
    name: 'kumar',
    rollno: 106,
    class: 'B. Tech CSE',
    subjects: ['Maths'],
}

const sum = (a: number, b: number): number => {
    return a + b
}

const sub = function (a: number, b: number): number {
    return a - b
}

console.log(sum(2, 3))

const logMsg = (msg: string): void => {
    console.log(`Message: ${msg}`)
}

logMsg('Kumar')

console.log(student.subjects)
console.log(student1)