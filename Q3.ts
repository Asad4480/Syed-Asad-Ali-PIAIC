/*Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.*/
let person_Name : string = "SYED Asad ali"
let lowerCase_Name = person_Name.toLowerCase();
let upperCase_Name = person_Name.toUpperCase();
let titleCase = person_Name
  .toLowerCase()
  .split(' ')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
  console.log(person_Name);
  console.log("Lower Case:", lowerCase_Name);
  console.log("Upper Case:", upperCase_Name);
console.log("Title Case:", titleCase);
