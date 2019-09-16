// Use a do while loop to console.log the numbers from 1 to 1000.

let range = 0;
do {
  range += 1;
  console.log(range);
};

// Create an object called person with the following data

// Create an arrayOfPersons that contains mulitiple objects.

let person = [{
  
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
},

{
  firstName: "John",
  lastName: "Doe",
  birthDate: "Feb 6, 1975",
  gender: "male"
},

{
  firstName: "Dave",
  lastName: "Doe",
  birthDate: "Mar 28, 1985",
  gender: "male"
},

{
  firstName: "Alex",
  lastName: "Doe",
  birthDate: "Oct 5, 1995",
  gender: "male"
}]

// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

for (let i = 1; i < person['birthDate'].length; i++){
  if (person['birthDate'].split) (' ') [1] % 2 != 0;

  console.log(person['birthDate'].split (' ')[i]);
}

// Use .map() to map over the arrayOfPersons and console.log() their information.

person.map(val =>{console.log(val)})

// Use .filter() to filter the persons array and console.log only males in the array.

var genny = person.filter(val =>{return(val.gender === "male")})

console.log(genny)

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990

var dob = person.filter(val =>{

  var year = val.birthDate.split(" ")[2]

console.log(year)

const count = parseInt(year, 10)

return count < 1990

})


console.log(dob)



