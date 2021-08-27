import React from 'react'
import './styles.css'

const FilmeDestaque = ({ itemNew, generoNew }) => {
    const ano = new Date(itemNew.first_air_date)
    return (
        <section className='destaque' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org./t/p/original${itemNew.backdrop_path})`
        }}>
            <div className='destaque--vertical'>
                <div className='destaque--horizontal'>
                    <div className='destaque--titulo'>{itemNew.original_name}</div>
                    <div className='destaque--info'>
                        <div className='destaque--info-pontos'>{itemNew.vote_average} pontos</div>
                        <div className='destaque--info-ano'>{ano.getFullYear()}</div>
                        <div className='destaque--info-temporadas'><span>{itemNew.number_of_seasons}: Temporada  / {itemNew.number_of_seasons !== 1 ? 's' : ''}</span> <span>{itemNew.number_of_episodes}: Episódio{itemNew.number_of_episodes !== 1 ? 's' : ''}</span></div>
                    </div>
                    <div className='destaque--sinopse'>
                        {itemNew.overview}
                    </div>
                    <div className='detaque--botoes'>
                        <a className='destaque--btn--assistir' href={`/watch/${itemNew.id}`}>&#9658; Assistir</a>
                        <a className='destaque--btn--minha-lista' href={`/list/add/${itemNew.id}`}>+ Minha Lista</a>
                    </div>
                    <div className='detaque--generos'>
                        <strong>Gênero: </strong>{generoNew}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FilmeDestaque