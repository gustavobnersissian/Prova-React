import './App.css';
import Home from './Home.js'
import {Routes, Route} from 'react-router-dom';
import Pokemons from './pokemon/pokemons';
import ListPokemons from './pokemon/listpokemons';
import About from './About';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
      <Route path='/pokemon'>
        <Route index element={<ListPokemons/>}/>
        <Route path=':pokemonId' element={<Pokemons/>}/>
      </Route>
    </Routes>
  );
}

export default App;
