export interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
  }
  
 // Create two student objects
  
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'Nairobi',
  };
  
  const student2: Student = {
    firstName: 'Alex',
    lastName: 'Sanchez',
    age: 29,
    location: 'Uganda',
  };
  
  // Create an array containing the two student objects
  const studentsList: Student[] = [student1, student2];

  // Render a table using Vanilla JavaScript
  const table = document.createElement('table');

  //create table header
  const headers = ['First Name', 'Location'];
  const thead = document.createElement('thead')
  const headerRow = document.createElement('tr');
  headers.forEach(headerText => {
    const th = document.createElement('th');
  th.textContent = headerText;
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

// Create table rows for each student
const tbody = document.createElement('tbody');
studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);
  tbody.appendChild(row);
})
table.appendChild(tbody);

// Append the table to the body of the document
document.body.appendChild(table);