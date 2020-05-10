const pokemons = [ // É um array de objetos 
    { nome: "Bulbasaur", tipo: "grama", vida: 0, vidaMaxima: 1000 },
    { nome: "Squirtle", tipo: "agua", vida: 0, vidaMaxima: 2000 },
    { nome: "Charmander", tipo: "fogo", vida: 0, vidaMaxima: 3000 }
]

pokemons.forEach((pokemon, index, array) => { //Pokémon, index e array podem ter qualquer nome. São parâmetros da função.
    pokemon.vida = pokemon.vidaMaxima
})