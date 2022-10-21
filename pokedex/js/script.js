function pokemonsConvert(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span>${pokemon.name}</span>
        <div class="details">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="${pokemon.name}">
        </div>
    </li>
    `
}

let pokemonList = document.getElementById('pokemonList');
pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(pokemonsConvert).join('');
})