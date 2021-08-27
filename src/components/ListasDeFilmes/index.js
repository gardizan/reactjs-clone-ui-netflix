import React from 'react'
import './styles.css'
import ListaIndividualDeFilmes from '../ListaIndividualDeFilmes'

const ListaDeFilmes = () => {

    return (
        <div className='linhaDeFilmes'>
            <ListaIndividualDeFilmes slug={'originais'} titulo={'Originais Netflix'} endpoint={'/discover/tv?with_network=213&'} />
            <ListaIndividualDeFilmes slug={'trending'} titulo={'Recomendados para Você'} endpoint={'/trending/all/week?'} />
            <ListaIndividualDeFilmes slug={'toprated'} titulo={'Em Alta'} endpoint={'/movie/top_rated?'} />
            <ListaIndividualDeFilmes slug={'action'} titulo={'Ação'} endpoint={'/discover/movie?with_genres=28&'} />
            <ListaIndividualDeFilmes slug={'comedy'} titulo={'Comédia'} endpoint={'/discover/movie?with_genres=35&'} />
            <ListaIndividualDeFilmes slug={'horror'} titulo={'Terror'} endpoint={'/discover/movie?with_genres=27&'} />
            <ListaIndividualDeFilmes slug={'romance'} titulo={'Romance'} endpoint={'/discover/movie?with_genres=10749&'} />
            <ListaIndividualDeFilmes slug={'documentary'} titulo={'Documentários'} endpoint={'/discover/movie?with_genres=99&'} />
        </div>
    )
}

export default ListaDeFilmes