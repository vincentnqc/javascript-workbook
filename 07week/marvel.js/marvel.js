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



const display = () => {
console.log(heros)
document.getElementById("herolist").append(document.createTextNode(heros.results[0].characters.items[0].name))
}

