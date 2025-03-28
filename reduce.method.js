const ROLE = {
    STUDENT: 'student',
    TEACHER: 'teacher',
    MANAGER: 'manager'
};

const persons = [
    { id: 1, name: 'Alice', category: ROLE.STUDENT, marks: [85, 90, 78] },
    { id: 2, name: 'Bob', category: ROLE.STUDENT, marks: [72, 88, 91] },
    { id: 3, name: 'Charlie', category: ROLE.TEACHER, salary: 3000 },
    { id: 4, name: 'David', category: ROLE.TEACHER, salary: 3200 },
    { id: 5, name: 'Eve', category: ROLE.MANAGER, salary: 5000 },
    { id: 6, name: 'Frank', category: ROLE.STUDENT, marks: [80, 70, 88] },
    { id: 7, name: 'Grace', category: ROLE.MANAGER, salary: 5500 }
];

const res = persons.reduce((acc, value) => {
    if (value.category !== ROLE.STUDENT) {
        return acc + value.salary;
    }
    return acc;
}, 0);

const expectedSalarySum = 3000 + 3200 + 5000 + 5500;
console.assert(res === expectedSalarySum, `Expected ${expectedSalarySum}, but got ${res}`);
