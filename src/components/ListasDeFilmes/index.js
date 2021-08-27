import React from 'react'
import './styles.css'
import ListaIndividualDeFilmes from '../ListaIndividualDeFilmes'

const ListaDeFilmes = () => {

    return (
        <div className='linhaDeFilmes'>
            <ListaIndividualDeFilmes slug={'originais'} titulo={'Originais Netflix'} />
            <ListaIndividualDeFilmes slug={'trending'} titulo={'Recomendados para Você'} />
            <ListaIndividualDeFilmes slug={'toprated'} titulo={'Em Alta'} />
            <ListaIndividualDeFilmes slug={'action'} titulo={'Ação'} />
            <ListaIndividualDeFilmes slug={'comedy'} titulo={'Comédia'} />
            <ListaIndividualDeFilmes slug={'horror'} titulo={'Terror'} />
            <ListaIndividualDeFilmes slug={'romance'} titulo={'Romance'} />
            <ListaIndividualDeFilmes slug={'documentary'} titulo={'Documentários'} />
        </div>
    )
}

export default ListaDeFilmes