const pokemonData = document.getElementById('pokemon-data');
const pokemonStats = document.getElementById('stats');

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id')


function pokemonsConvert(pokemon) {
    return `
    <div class="data">
        <div class="details">
            <h1 class="name">${pokemon.name}</h1>
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
        </div>
        <span class="number">#${pokemon.number}</span>
    </div>
    `
}

function pokeStats(pokemon) {
    return `
    <tbody>
        ${pokemon.stats.map((stat) => `<tr><td>${stat.name}</td><td>${stat.value}</td><td></td></tr>`).join('')}
    </tbody>
    `
}

function loadPokemon(id) {
    pokeApi.getPokemon(id).then((pokemon = {}) => {
        pokemonData.innerHTML = pokemonsConvert(pokemon)
        pokemonStats.innerHTML = pokeStats(pokemon)

        pokemonData.setAttribute('class', `pokemon ${pokemon.type}`)
    })
}

loadPokemon(id);
