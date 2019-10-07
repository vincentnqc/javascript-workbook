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
  }
];

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

class player {
  constructor(id, name, age, skillSet, placeBorn) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
  }
}

class blueTeammate extends player {
  constructor(id, name, age, skillSet, placeBorn) {
    super(id, name, age, skillSet, placeBorn);
    this.color = "Blue";
    this.mascot = "Whales";
  }
}

class redTeammate extends player {
  constructor(id, name, age, skillSet, placeBorn) {
    super(id, name, age, skillSet, placeBorn);
    this.color = "Red";
    this.mascot = "Seals";
  }
}

// Runs throught the array and a button is created that when clicked puts the person on to a list of players that displays their name and skillset

const listPeopleChoices = () => {
  const listElement = document.getElementById("people");
  document.getElementById("people").innerHTML = null;
  arrOfPeople.map(person => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener("click", function() {
      makePlayer(person.id);
    });
    li.appendChild(button);
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    listElement.append(li);
  });
};

// Targeting a person and pushing them on to the list of players on the list an allows you to put these players on a team.

const makePlayer = id => {
  console.log(`li ${id} was clicked!`);
  var people = arrOfPeople.findIndex(person => person.id == id);
  document.getElementById("players").innerHTML = null;
  const listElement = document.getElementById("players");
  let target = arrOfPeople[people];
  let garbagePeople = new player(
    target.id,
    target.name,
    target.age,
    target.skillSet,
    target.placeBorn
  );
  listOfPlayers.push(garbagePeople);
  arrOfPeople.splice(people, 1);
  console.log(garbagePeople);
  console.log(listOfPlayers);
  listPlayer();
  listPeopleChoices();
};

// Splicing from the list of players and pushing them on to a team

const blue_Team = id => {
  var i = listOfPlayers.findIndex(k => k.id === id);
  blueTeam.push(listOfPlayers[i]);
  listOfPlayers.splice(i, 1);
  document.getElementById("blue").innerHTML = null;
  listBlueTeam();
  listPlayer();
};

// Creates a list of players pushed to the blue team with a button that gives the option to remove the player. That player will be pushed back to the players list.

const listBlueTeam = () => {
  document.getElementById("blue").innerHTML = null;
  var getBlue = document.getElementById("blue");
  blueTeam.map((player, index) => {
    const li = document.createElement("li");
    const buttonRemove = document.createElement("button");
    buttonRemove.innerHTML = "Remove";
    console.log(player);
    li.appendChild(
      document.createTextNode(player.name + " - " + player.skillSet)
    );
    buttonRemove.addEventListener("click", function() {
      listOfPlayers.push(player);
      listPlayer(player.id);
      blueTeam.splice(index, 1);
      listBlueTeam();
    });
    li.appendChild(buttonRemove);
    getBlue.appendChild(li);
  });
};

// Splicing from the list of players and pushing them on to a team


const red_Team = id => {
  var i = listOfPlayers.findIndex(k => k.id === id);
  redTeam.push(listOfPlayers[i]);
  listOfPlayers.splice(i, 1);
  console.log(listOfPlayers, "catch");
  document.getElementById("red").innerHTML = null;
  var getRed = document.getElementById("red");
  listPlayer();
  listRedTeam();
};

// Creates a list of players pushed to the red team with a button that gives the option to remove the player. That player will be pushed back to the players list.

const listRedTeam = () => {
  document.getElementById("red").innerHTML = null;
  var getRed = document.getElementById("red");
  redTeam.map((player, index) => {
    const li = document.createElement("li");
    const buttonRemove = document.createElement("button");
    buttonRemove.innerHTML = "Remove";
    console.log(player);
    li.appendChild(
      document.createTextNode(player.name + " - " + player.skillSet)
    );
    buttonRemove.addEventListener("click", function() {
      listOfPlayers.push(player);
      listPlayer(player.id);
      redTeam.splice(index, 1);
      listRedTeam();
    });
    li.appendChild(buttonRemove);
    getRed.appendChild(li);
  });
};

// Displays arrays of people and players with buttons according to what team you want them on or if you want to remove them from a team.

const listPlayer = () => {
  const playerElement = document.getElementById("players");
  document.getElementById("players").innerHTML = "";
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
    playerElement.append(li);
  });
};
