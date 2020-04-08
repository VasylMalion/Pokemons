import React from "react";
import {LoadMore} from "../loadMore/loadMore";

const PokemonList = ({isVisible, allPokemonsMap, loadMorePokemon}) => {
    return (
        <div className = 'pokemonListMain' >
            <div className = 'pokemonAllDetails' > {isVisible} </div>
            <div className = 'pokemonAllItem' > {allPokemonsMap} </div>
            <div className = 'loadMore' onClick = { () => loadMorePokemon(15)} ><LoadMore/></div>
        </div>
    )
};

export {PokemonList}