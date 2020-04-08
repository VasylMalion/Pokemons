import React, {Component} from "react";
import {PokemonItem} from "../pokemonItem/pokemonItem";
import {Loading} from "../loading/loading";
import {allPokemon, singlePokemonApi} from "../pokemonApi/pokemonApi";
import {PokemonList} from "./pokemonList";
import {PokemonDetailsContainer} from "../pokemonDetails/pokemonDetailsContainer";
import './pokemonList.css'

class PokemonListContainer extends Component {

    state = {
        loading: true,
        allPokemonNames: [],
        characterOfPokemon: [],
        isVisibleCharacter: false,
        countPokemon: 15
    };

    componentDidMount () {
        this.allPokemonApi();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.countPokemon !== this.state.countPokemon) {
            this.allPokemonApi();
        }
    }

    allPokemonApi = async () => {
        await allPokemon(this.state.countPokemon)
            .then( res => this.setState({
                allPokemonNames: res
            }));
        this.setState({loading: false});
    };

    singlePokemon = async (id) => {

        await singlePokemonApi(id)
            .then( res => this.setState({
                characterOfPokemon: res.data,
                isVisibleCharacter: true
            }))
    };

    imageOfPokemon = (id) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    };

    render() {

        const {
            loading,
            allPokemonNames,
            characterOfPokemon,
            isVisibleCharacter,
            countPokemon,
        } = this.state;

        if (loading) {
            return <Loading />
        }

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
                srcImg = {this.imageOfPokemon(characterOfPokemon.id)}
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
                onClick = {() => this.singlePokemon(id)}>
                <PokemonItem
                    name = {item.name}
                    src = {this.imageOfPokemon(id)}
                />
            </div>
        });

        const loadMorePokemon = (count) => {
            this.setState({
                countPokemon: countPokemon + count
            })
        };

        return <PokemonList
            isVisible = {isVisible}
            allPokemonsMap={allPokemonsMap}
            loadMorePokemon={loadMorePokemon} />
    }
}

export {PokemonListContainer}