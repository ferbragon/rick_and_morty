import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "e2c9093d788f.170c014870ce69bce089";


const Detail = () => {

    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
         { //renderizado condicional
           //character ? <h1>Soy el DETAIL<h1>... : null; (operador ternario)
           //<h2>{character?.name}<h2> (conditional chaining)
            character && <div> 
                           <h1>Soy el DETAIL</h1>
                           <h2>Name: {character.name}</h2>
                           <h2>Status: {character.status}</h2>
                           <h2>Species: {character.species}</h2>
                           <h2>Gender: {character.gender}</h2>
                           <h2>Origin: {character.origin?.name}</h2>
                           <img src={character.image} alt={`Foto de ${character.name}`} />
                        </div>
         }
        </div>
    )
};

export default Detail;