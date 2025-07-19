const names = ["alice", "bob", "charlie"]



const capitalized = names.map(
  n => n.charAt(0).toUpperCase() + n.slice(1)
)

console.log(capitalized)

const numbers = [1, 2, 3, 4]

const squared = numbers.map(
  n => n * n
)

console.log(squared)

const pokemon = ["Bulbasor", "Charamander", "Squritle"]

const html_pokemon = pokemon.map(
  p => "<p>" + p + "</p>"
)

console.log(html_pokemon)