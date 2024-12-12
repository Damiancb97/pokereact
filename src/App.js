import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import Pokemones from './components/Pokemones';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokeLista from './components/PokeLista';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokeLista/>} /> 
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>  
    </BrowserRouter>
      <h1><Pokemones /></h1>
      </>
}

export default App;
