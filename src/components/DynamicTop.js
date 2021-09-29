import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 450px;
    object-fit: contain;
    position: relative;
    margin-bottom: .5em;
`;

const Image = styled.img`
    width: 100%;
    height: 450px;
    max-height: 450px;
`;

const Desc = styled.div`
    position: absolute;
    top: 50%;
    left: 1%;
    width: 600px;
    color: white;
`;

const Button = styled.button`
    padding: .5em 1em;
    margin: .25em;
    color: #fff !important;
    background: rgba(0,0,0,0.4);
    border: none;
    border-radius: .25em;
    outline:none;
    &:hover{
        color: #000 !important;
        background: #fff;
    }
`;

const Title = styled.h1`
    color: white;
`;

export const DynamicTop = ({random}) => {
    const baseUrl = 'https://image.tmdb.org/t/p/original/'
    return (
        <Container>
            <Image src={baseUrl+random.poster_path}/>
            <Desc >
                <Title>{random.original_title}</Title><br />
                <Button>Play</Button><Button>My List</Button>
                <p>{random.overview}</p>
            </Desc>
        </Container>
    )
}
