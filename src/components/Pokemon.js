import { useState } from "react";

const Pokemon = (props) => {
    const [nivel, Setnivel] = useState (1);

    const onSubirNivel = (event) =>{
        Setnivel( n => n + 1)
    }

    const onBajarNivel = (event) =>{
        Setnivel( n => n - 1)
    }

    const calcularHP = () => {
        //TODO: use real formula
        // http://url donde está la formula
        //this one is made up
        return 65 + (nivel * 3)
    }

    const calcularAtaque = () => {
        return 130 + (nivel * 2);
    }
    
    const calcularDefensa = () => {
        return 60 + (nivel * 2);
    }

    const imagenPokemon = () => {
        const imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png";
        return imagen;
    }

    return <div>
        <img src={imagenPokemon()} />
        <h1>Charizard</h1>
        <p>Nivel:{nivel} </p>
        <button onClick={onSubirNivel}>Subir nivel</button>
        <button onClick={onBajarNivel}>Bajar nivel</button>
        <p>HP: { calcularHP() }</p>
        <p>Ataque: {calcularAtaque() }</p>
        <p>Defensa: {calcularDefensa() } </p>
    </div>
}

export default Pokemon;