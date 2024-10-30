function calculateGrade(marks) {
    const sum = marks.reduce((total, mark) => total + mark, 0);
    const average = sum / marks.length;
  
    let grade;
    if (average >= 90) grade = 'A';
    else if (average >= 80) grade = 'B';
    else if (average >= 70) grade = 'C';
    else if (average >= 60) grade = 'D';
    else grade = 'F';
  
    console.log(`Average: ${average}, Grade: ${grade}`);
  }
  
  
  const studentMarks = [85, 92, 78, 88, 76];
  calculateGrade(studentMarks);
//task 2  
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Press Enter';
document.body.appendChild(input);

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    console.log('Enter key was pressed!');
  }
});
// Task3
const button = document.createElement('button');
button.textContent = 'Double Click Me';
document.body.appendChild(button);

button.addEventListener('dblclick', () => {
  alert('Button was double-clicked!');
});
//Task 5
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
  