const axios = require('axios');
const apiBase = 'https://pokeapi.co/api/v2/';

const allPokemon = (count) => {

    return axios.get(`${apiBase}pokemon/?limit=${count}`)
        .then( data => data.data.results);

};

const singlePokemonApi = (id) => {
    return axios.get(`${apiBase}pokemon/${id}/`)
        .then(data => data)

};

export {
    allPokemon,
    singlePokemonApi
};