// requestAnimationFrame('dotenv').config()

var heros;

window.onload = function() {
  gitPosts()
}

const gitPosts = () => {
  fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=c5893bf85cfc66cc3e579b13dee23b04&hash=eab615c7f471a52fa4bff55f46731a81")
  .then(res => res.json())
  .then(posts =>{
    console.log(posts)
    heros = (posts.data)
    display()
  })
}

let collection = []

const display = () => {
console.log(heros)
// document.getElementById("herolist").append(document.createTextNode(heros.results[0].characters.items[0].name))
let heroSpot = document.getElementById("herolist")

heros.results.map(results => {
results.characters.items.map(hero => {
  const li = document.createElement("li")
  const button = document.createElement("button")
  button.innerHTML = "Collect"
  button.addEventListener('click', function(){
    li.style.color = "blue"
    collection.push(hero)
    heroSpot.removeChild(li)
    displayCollection()
  })

  li.append(document.createTextNode(hero.name))
  li.append(button)
  heroSpot.append(li)
})
})

// heros.results[0].characters.items.map(hero => {
//   heroSpot.append(document.createTextNode(hero.name))
// })
// heros.results[1].characters.items.map(hero => {
//   heroSpot.append(document.createTextNode(hero.name))
// })
}

const displayCollection = () => {
  console.log(collection, "here")
  let collectionSpot = document.getElementById("collectionlist")
  collectionSpot.innerHTML = null
  collection.map(hero => {
  
    
      const li = document.createElement("li")
     
    
      li.append(document.createTextNode(hero.name))
      
      collectionSpot.append(li)
   
    })
   
}
