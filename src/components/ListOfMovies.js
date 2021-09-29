import { Cards } from './Cards';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const API_KEY = '02684aad9559f0e07b9211530fb7f2c8';
const baseUrl = 'https://api.themoviedb.org/3';
const trendingUrl = `/trending/all/week?api_key=${API_KEY}&language=en-US`;

const Container = styled.div`
    background: #000;
`;

const getUrl = baseUrl+trendingUrl
export const ListOfMovies = () => {
    const [trending, setTrending] = useState([]);
    const trend = async () => {
        await axios.get(getUrl).then(res =>setTrending(res.data.results)).catch(err => console.log(err))
    }
    useEffect(() =>{
        trend()
    }, [getUrl])
    return (
        <Container>
            <Cards className="outer-container" trendingData = {trending} />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </Container>
    )
}
