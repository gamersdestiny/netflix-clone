import React from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const API_KEY = '02684aad9559f0e07b9211530fb7f2c8';
const baseUrl = 'https://api.themoviedb.org/3';
const trendingUrl = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
const Container = styled.div`
    display: flex;
    padding: .25em .5em;
    overflow-x: scroll;
    scrollbar-width: none;
`;

const Card = styled.div`
    width: 150px;
    height: 200px;
    border: 1px solid black;
    margin: 0.5em;
    &:hover{
        transform: scale(1.1)
    }
`;

const Title = styled.h3`
    color: #fff;
    padding-left: .5em;
    padding-top: .25em;
`;

const baseImageUrl = 'https://image.tmdb.org/t/p/original/'

export const Cards = ({trendingData}) => {
    console.log(trendingData)
    // const [trending, setTrending] = useState([]);
    // useEffect(() =>{
    // const trend = async () => {
    //     await axios.get(baseUrl+trendingUrl).then(res => setTrending(res.data.results)).catch(err => console.log(err))
    // }
    //     trend()
    // }, [trendingData])
    return (
        <>
        <Title>Netflix Orginals</Title>
        <Container>
            {/* {trendingData.map(element =>{
            <Card className="card dynamic">
                <img src={`${baseImageUrl}${element.poster_path}`} alt="" />
            </Card>
            })} */}
            <Card className="card">
                <img src="http://unsplash.it/150/200" alt="" />
            </Card>
            <Card className="card">
                <img src="http://unsplash.it/150/200" alt="" />
            </Card>
            <Card className="card">
                <img src="http://unsplash.it/150/200" alt="" />
            </Card>
            <Card className="card">
                <img src="http://unsplash.it/150/200" alt="" />
            </Card>
            <Card className="card">
                <img src="http://unsplash.it/150/200" alt="" />
            </Card>
            <Card className="card">
                <img src="http://unsplash.it/150/200" alt="" />
            </Card>
            <Card className="card">
                <img src="http://unsplash.it/150/200" alt="" />
            </Card>
            <Card className="card">
                <img src="http://unsplash.it/150/200" alt="" />
            </Card>
            <Card className="card">
                <img src="http://unsplash.it/150/200" alt="" />
            </Card>
            <Card className="card">
                <img src="http://unsplash.it/150/200" alt="" />
            </Card>
            <Card className="card">
                <img src="http://unsplash.it/150/200" alt="" />
            </Card>
        </Container>
        </>
    )
}
