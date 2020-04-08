import React from "react";
import {PokemonListContainer} from "../pokemonList/PokemonListContainer";
import {Header} from "../header/header";
import './app.css'

const App = () => {
    return <div className = 'appMain'>
            <Header/>
            <PokemonListContainer/>
        </div>
};

export {App}