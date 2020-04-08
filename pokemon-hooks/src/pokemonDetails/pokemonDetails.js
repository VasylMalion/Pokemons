import React from "react";

const PokemonDetails = ({srcImg, name, index, id, types, attack, defense, hp,
                             spAttack, spDefense, speed, weight, totalMoves}) => {

    return (
        <div className = 'pokemonDetailsMain' >
            <img className = 'imageDetails' src = {srcImg} alt = 'pokemonDetails'/>
            <br />
            <span className = 'titleDetails' > {name} {index(id)}</span>
            <br />
            <table className = 'tableDetails' >
                <thead>
                <tr>
                    <td> Type </td>
                    <td> {types} </td>
                </tr>
                <tr>
                    <td> Attack </td>
                    <td> {attack} </td>
                </tr>
                <tr>
                    <td> Defense </td>
                    <td> {defense} </td>
                </tr>
                <tr>
                    <td> HP </td>
                    <td> {hp} </td>
                </tr>
                <tr>
                    <td> SP Attack </td>
                    <td> {spAttack} </td>
                </tr>
                <tr>
                    <td> SP Defense </td>
                    <td> {spDefense} </td>
                </tr>
                <tr>
                    <td> Speed </td>
                    <td> {speed} </td>
                </tr>
                <tr>
                    <td> Weight </td>
                    <td> {weight} </td>
                </tr>
                <tr>
                    <td> Total moves </td>
                    <td> {totalMoves} </td>
                </tr>
                </thead>
            </table>
        </div>
    );
};

export {PokemonDetails};