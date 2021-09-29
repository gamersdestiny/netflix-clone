import './App.css';
import {Header} from './components/Header';
import { DynamicTop } from './components/DynamicTop'
import axios from 'axios';
import { useState, useEffect } from 'react';
import requests from './urls';
import Row from './components/Row'

const baseURL = 'https://api.themoviedb.org/3';

function App() {
  const [randomMovie, setRandomMovie] = useState('')
  
  const findRandomMovie = async() =>{
    const randomNo = Math.floor(Math.random()*500)
    await axios.get(`${baseURL}/movie/${randomNo}?api_key=02684aad9559f0e07b9211530fb7f2c8`)
    .then(res => {setRandomMovie(res.data)}).catch(err => {console.log(err)})
  }
  useEffect(() => {
    findRandomMovie()
  }, [])
  
  return (
    <div>
      <Header />
      <DynamicTop random={randomMovie} />
      <Row
        title="Netfilx Orginals"
        fetchUrl={baseURL + requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={baseURL + requests.fetchtrending} />
      <Row title="Top Rated" fetchUrl={baseURL + requests.fetchTopRated} />
      <Row
        title="Action Movies"
        fetchUrl={baseURL + requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={baseURL + requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        fetchUrl={baseURL + requests.fetchHorrorMovies}
      />
      <Row
        title="Romantic Movies"
        fetchUrl={baseURL + requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries Movies"
        fetchUrl={baseURL + requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;

