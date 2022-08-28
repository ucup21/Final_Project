import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movie from './components/Movie';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('man');

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=97604ad`

    const response = await fetch(url);
    const responseJson = await response.json()

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  return (
    <div>
      <div className='header-movie'>
        <Header heading='Movies Group 6' />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='movies'>
        <Movie movies={movies} />
      </div>
    </div>
  )
};

export default App;