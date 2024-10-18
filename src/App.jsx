import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar';
import Characters from './components/characters';
import Pagination from './components/Pagination';
import './App.css';

function App() {

  const[characters, setCharacters] = useState([]);
  const[info, setInfo] = useState({});


  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
    };

    const onAnterior = () => {
      fetchCharacters(info.prev);
    }

    const onSiguiente = () => {
      fetchCharacters(info.next);
    }

    useEffect(() => {
      fetchCharacters(initialUrl);
    }, [])

  return (
    <>
      <NavBar brand="Rick And Morty Wiki"></NavBar>

      <div className='container mt-5'>
        <Pagination 
        prev={info.prev} 
        next={info.next} 
        onAnterior={onAnterior} 
        onSiguiente={onSiguiente}>
        </Pagination>

        <Characters characters={characters}/>

        <Pagination 
        prev={info.prev} 
        next={info.next} 
        onAnterior={onAnterior} 
        onSiguiente={onSiguiente}>
        </Pagination>
      </div>
    </>
  )
}

export default App
