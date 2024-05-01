interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
const myTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'New York',
  contract: true // Example of adding additional attribute
};
console.log(myTeacher);

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
 
  // Get the first letter of the firstName
  const firstLetter = firstName.charAt(0).toUpperCase();
  // Return the formatted string
  return `${firstLetter}. ${lastName}`;
};