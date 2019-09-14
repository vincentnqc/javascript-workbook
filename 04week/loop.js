let range = 0;
// do {
//   range += 1;
//   console.log(range);
// };

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

// for (let i = 1; i < person['birthDate'].length; i++){
//   if (person['birthDate'].split) (' ') [1] % 2 != 0;

//   console.log(person['birthDate'].split (' ')[i]);
// }



// person.map(val =>{console.log(val)})

// var genny = person.filter(val =>{return(val.gender === "male")})

// console.log(genny)

var dob = person.filter(val =>{

  var year = val.birthDate.split(" ")[2]

console.log(year)

const count = parseInt(year, 10)

return count < 1990

})


console.log(dob)



