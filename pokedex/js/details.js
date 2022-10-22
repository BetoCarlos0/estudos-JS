const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let id = params.id;

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    const official_artwork = 'official-artwork'

    pokemon.photo = pokeDetail.sprites.other['official-artwork'].front_default

    return pokemon
}

function pokemonsConvert(pokemon) {
    return `
    <div class="pokemon">
        <div class="data">
            <div class="details">
                <h1 class="name">Bulbasaur</h1>
                <ol class="types">
                    <li class="type grass">tipos</li>
                    <li class="type poison">tipos</li>
                </ol>
            </div>
            <span class="number">#001</span>
        </div>
    </div>
    `
}

// function loadPokemonItens() {
//     pokeApi.getPokemonDetail().then((pokemons = []) => {
//         const newHtml = pokemons.map(pokemonsConvert).join('')
//         pokemonList.innerHTML += newHtml
//     })
// }

const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
fetch(url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
    .catch((error) => console.log(error));
