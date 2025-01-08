import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokeLista = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            setPokemons(response.data.results);
        });
    }, []);

    const functionNavegarASnivy = () => {
        navigate("https://es.wikipedia.org/wiki/uni%C3/B3n_Sovi%C3%")
    }

    const functionNavegar = (p) => {
        //navigate("/pokemon/" + p)
        navigate(`/pokemon/${p}`)
    }


    return <div>
        <button onClick={functionNavegarASnivy}>Navegar a Snivy</button>
        <Link to="/pokemon/25">Ir a pikachu</Link>
        <h1>Lista</h1>
        { pokemons.map(p => {
        return <><p>
                Este pokemon es {p.name}
                </p>
                <div onClick={() => {navigate("/pokemon/" + p.name)}}></div>
                <Link to={"pokemon/" + p.name}>Navegar</Link>
            </>
        }
        )}
    </div>
}

export default PokeLista;