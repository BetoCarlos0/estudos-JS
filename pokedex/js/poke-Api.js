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

const pokeApi = {

    getPokemonDetail(pokemon) {
        return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
    },

    getPokemons(offset = 0, limit = 10) {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        return fetch(url)
            .then((response) => response.json())
            .then((jsonbody) => jsonbody.results)
            .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
            .then((detailRequests) => Promise.all(detailRequests))
            .then((pokemonsDetails) => pokemonsDetails)
            .catch((error) => console.log(error));
    }
}
