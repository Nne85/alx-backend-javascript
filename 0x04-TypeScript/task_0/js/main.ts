interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

const student1: Student = {
  firstName: 'David',
  lastName: 'Kehinde',
  age: 3,
  location: 'Lagos',
};

const student2: Student = {
  firstName: 'Michael',
  lastName: 'Kehinde',
  age: 42,
  location: 'Lagos',
};

const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const table = document.createElement('table');

// Append table rows for each student in the array
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
