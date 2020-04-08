import React from "react";
import {PokemonDetails} from "./pokemonDetails";
import './pokemonDetails.css';

const PokemonDetailsContainer = ({srcImg, name, id, types, attack, defense, hp,
                             spAttack, spDefense, speed, weight, totalMoves}) => {

    const index = (id) => {
        let idStr = id + '';
        switch (idStr.length) {
            case 1:
                return `#00${id}`;
            case 2:
                return `#0${id}`;
            default:
                return `#${id}`;
        }
    };

    const newName = name[0].toUpperCase() + name.slice(1);

    return <PokemonDetails srcImg={srcImg}
                            name = {newName}
                            index={index}
                            id = {id}
                            types={types}
                            attack={attack}
                            defense={defense}
                            hp = {hp}
                            spAttack={spAttack}
                            spDefense={spDefense}
                            speed={speed}
                            weight={weight}
                            totalMoves={totalMoves}/>
    };

export {PokemonDetailsContainer};