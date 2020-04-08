import React from "react";
import './pokemonItem.css'


export const PokemonItem = ({name, src, types}) => {

    const newName = name[0].toUpperCase() + name.slice(1);

    return (
        <div className = 'pokemonItemMain' >
            <img src = {src} alt = 'pokemon' className = 'pokemonItemImage' />
            <br />
            <span className = 'titleItem' > {newName} </span>
            <span className = 'typeItem' > {types} </span>
        </div>
    )
}