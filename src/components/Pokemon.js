import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pokemon = (props) => {
    const [nivel, setNivel] = useState (1);
    const [nombre, setNombre] = useState("");
    const [imgFrontUrl, setImgFrontUrl] = useState();
    const [imgBackUrl, setImgBackUrl] = useState();
    const [baseHP, setBaseHP] = useState();
    const [baseAttack, setBaseAttack] = useState();
    const [baseDefense, setBaseDefense] = useState();

    const params = useParams();

    useEffect(() => {
        // la sintaxis mas moderna es async-await
        axios.get("https://pokeapi.co/api/v2/pokemon/"+ id)
            .then( response => { 
                setNombre(response.data.name);
                setImgFrontUrl(response.data.sprites.front_default);
                setImgBackUrl(response.data.sprites.back_default);
                setBaseHP(getStat("hp", response.data.stats));
                setBaseAttack(getStat("attack", response.data.stats));
                setBaseDefense(getStat("defense", response.data.stats));
            })
    }, []);

    const id = params.id;

    function getStat(nombreStat, arrayStats){
        const filteredArray = arrayStats.filter(s => s.stat.name === nombreStat)
        if (filteredArray.length === 0) {
            return -1
        }
        return filteredArray[0].base_stat;
    }




    const onSubirNivel = (event) =>{
        setNivel( n => n + 1)
    }

    const onBajarNivel = (event) =>{
        setNivel( n => n - 1)
    }

    const calcularHP = () => {
        //TODO: use real formula
        // http://url donde está la formula
        //this one is made up
        return baseHP + (nivel * 3)
    }

    const calcularAtaque = () => {
        return baseAttack + (nivel * 2);
    }
    
    const calcularDefensa = () => {
        return baseDefense + (nivel * 2);
    }

    const imagenPokemon = () => {
        const imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png";
        return imagen;
    }

    return <div>
        <img src={imgFrontUrl}/>
        <img src={imgBackUrl}/>
        <h1>{nombre}</h1>
        <p>Nivel:{nivel} </p>
        <button onClick={onSubirNivel}>Subir nivel</button>
        <button onClick={onBajarNivel}>Bajar nivel</button>
        <p> HP: {calcularHP()}</p>
        <p> Attack: {calcularAtaque()}</p>
        <p> Defense: {calcularDefensa()} </p>
    </div>
}

export default Pokemon;