const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player {
  constructor(){}
}
class blueTeammate {
  constructor(){}
}
class redTeammate {
  constructor(){}
}




const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  document.getElementById("people").innerHTML = null
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const makePlayer = id => {
  console.log(`li ${id} was clicked!`);
  var people = arrOfPeople.findIndex(person => person.id == id);
  document.getElementById("players").innerHTML = null
  const listElement = document.getElementById('players')
  listOfPlayers.push(arrOfPeople[people]);
  arrOfPeople.splice(people,1)
  console.log(listOfPlayers)
  listOfPlayers.map(player => {
  const li = document.createElement("li");
  const buttonRed = document.createElement("button");
  const button = document.createElement("button");
  buttonRed.innerHTML = "Red Team";
  button.innerHTML = "Blue Team";
  buttonRed.addEventListener("click", function() {
    red_Team(player.id)
   
  })
  
  button.addEventListener("click", function() {
    blue_Team(player.id)
   
  })
  li.appendChild(buttonRed);
  li.appendChild(button);
  li.appendChild(
    document.createTextNode(player.name + " - " + player.skillSet)
  );
  listElement.append(li);})
  listPeopleChoices()
};

const blue_Team = id => {
 var i = listOfPlayers.findIndex(k => k.id === id);
 blueTeam.push(listOfPlayers[i])
 listOfPlayers.splice(i,1)
 console.log(listOfPlayers, "some string that catches")
 document.getElementById("blue").innerHTML = null
 var getBlue = document.getElementById("blue")
 blueTeam.map(player => {
  
  const li = document.createElement("li")
  console.log(player)
  li.appendChild(
   document.createTextNode(player.name + " - " + player.skillSet)
  )
  getBlue.appendChild(li)
 })
  listPlayer()
}

const red_Team = id => {
  var i = listOfPlayers.findIndex(k => k.id === id);
  redTeam.push(listOfPlayers[i])
  listOfPlayers.splice(i,1)
  console.log(listOfPlayers, "some string that catches")
  document.getElementById("red").innerHTML = null
  var getRed = document.getElementById("red")
  redTeam.map(player => {
   
   const li = document.createElement("li")
   console.log(player)
   li.appendChild(
    document.createTextNode(player.name + " - " + player.skillSet)
   )
   getRed.appendChild(li)
  })
   listPlayer()
 }

 const listPlayer = () => {
  const playerElement = document.getElementById('players')
  document.getElementById('players').innerHTML = ''
   listOfPlayers.map(player => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const buttonRed = document.createElement("button");
    button.innerHTML = "Blue Team";
    buttonRed.innerHTML = "Red Team";
    button.addEventListener("click", function() {
      blue_Team(player.id);
      
     
    });

    buttonRed.addEventListener("click", function() {
      red_Team(player.id);
      
     
    });
    li.appendChild(buttonRed);
    li.appendChild(button);
    li.appendChild(
      document.createTextNode(player.name + " - " + player.skillSet)
    );
    playerElement.append(li);})}