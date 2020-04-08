import React, {useState, useEffect} from "react";
import {PokemonItem} from "../pokemonItem/pokemonItem";
import {Loading} from "../loading/loading";
import {allPokemon, singlePokemonApi} from "../pokemonApi/pokemonApi";
import {PokemonList} from "./pokemonList";
import {PokemonDetailsContainer} from "../pokemonDetails/pokemonDetailsContainer";
import './pokemonList.css'

const PokemonListContainer = () => {

    const [loading, setloading] = useState(true);
    const [allPokemonNames, setAllPokemonNames] = useState([]);
    const [characterOfPokemon, setCharacterOfPokemon] = useState([]);
    const [isVisibleCharacter, setIsVisibleCharacter] = useState(false);
    const [countPokemon, setCountPokemon] = useState(15);

    useEffect( () => {
        const allPokemonApi = async () => {
            await allPokemon(countPokemon)
                .then( res => setAllPokemonNames(res));
            setloading( false);
        };

        allPokemonApi();
    }, [countPokemon]);

    const singlePokemon = async (id) => {
        await singlePokemonApi(id)
            .then( res => {
                setCharacterOfPokemon(res.data);
                setIsVisibleCharacter(true);
            });
    };

    const imageOfPokemon = (id) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    };

    const setType = (item, key) => {
        let name = item.type.name;
        let newName = name[0].toUpperCase() + name.slice(1);

        return <div key = {key}>
            <span>{newName}</span>
            <br />
        </div>
    };

    const isVisible = isVisibleCharacter ?
        <PokemonDetailsContainer
            srcImg = {imageOfPokemon(characterOfPokemon.id)}
            id = {characterOfPokemon.id}
            name = {characterOfPokemon.name}
            types = {characterOfPokemon.types.map( setType ) }
            attack = {characterOfPokemon.stats[4].base_stat}
            defense = {characterOfPokemon.stats[3].base_stat}
            hp = {characterOfPokemon.stats[5].base_stat}
            spAttack = {characterOfPokemon.stats[2].base_stat}
            spDefense = {characterOfPokemon.stats[1].base_stat}
            speed = {characterOfPokemon.stats[0].base_stat}
            weight = {characterOfPokemon.weight}
            totalMoves = {characterOfPokemon.moves.length}
        /> : null;

    const allPokemonsMap = allPokemonNames.map((item, idx) => {
        let id = +item.url.match(/\/\d+\//)[0].match(/\d+/)[0];

        return <div className = 'pokemonListMap'
                    key = {idx + 1}
                    onClick = {() => singlePokemon(id)}>
            <PokemonItem
                name = {item.name}
                src = {imageOfPokemon(id)}
            />
        </div>
    });

    const loadMorePokemon = (count) => {
        setCountPokemon(countPokemon + count)
    };

    if (loading) {
        return <Loading />
    }

    return <PokemonList
        isVisible = {isVisible}
        allPokemonsMap={allPokemonsMap}
        loadMorePokemon={loadMorePokemon} />
};

export {PokemonListContainer}