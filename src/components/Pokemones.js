import { useState, useEffect } from "react";

const Pokemones = () => {
    const [pokemonId, setPokemonId] = useState(1); // ID del Pokémon actual
    const [pokemonData, setPokemonData] = useState(null); // Datos del Pokémon actual

    // Función para cargar datos del Pokémon desde la API
    const fetchPokemon = async (id) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (!response.ok) {
                throw new Error("Error al obtener los datos del Pokémon");
            }
            const data = await response.json();
            setPokemonData(data);
        } catch (error) {
            console.error(error);
        }
    };

    // Cargar datos del Pokémon al montar el componente o cuando cambie el ID
    useEffect(() => {
        fetchPokemon(pokemonId);
    }, [pokemonId]);

    const subirPokemon = () => {
        setPokemonId((id) => id + 1); // Incrementa el ID
    };

    const bajarPokemon = () => {
        setPokemonId((id) => (id > 1 ? id - 1 : 1)); // Decrementa el ID pero no menos de 1
    };

    return (
        <div>
            {pokemonData ? (
                <>
                    <img
                        src={pokemonData.sprites.front_default}
                        alt={`Imagen de ${pokemonData.name}`}
                    />
                    <h1>{pokemonData.name.toUpperCase()}</h1>
                    <p>ID: {pokemonData.id}</p>
                    <p>Altura: {pokemonData.height / 10} m</p>
                    <p>Peso: {pokemonData.weight / 10} kg</p>
                    <button onClick={bajarPokemon}>Anterior</button>
                    <button onClick={subirPokemon}>Siguiente</button>
                </>
            ) : (
                <p>Cargando datos del Pokémon...</p>
            )}
        </div>
    );
};

export default Pokemones;
