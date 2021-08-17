import React, { useState } from 'react'
import './styles.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const ListaDeFilmes = ({ titulo, items }) => {

    const [scrollX, setScrollX] = useState(-600)

    const mudancaParaEsquerda = () => {
        let ajusteX = scrollX + Math.round(window.innerWidth / 2)
        if (ajusteX > 0) {
            ajusteX = 0
        }
        setScrollX(ajusteX)
    }

    const mudancaParaDireita = () => {
        let ajusteX = scrollX - Math.round(window.innerWidth / 2)
        let larguraLista = items.results.length * 150

        if((window.innerWidth - larguraLista) > ajusteX) {
            ajusteX = (window.innerWidth - larguraLista) - 80
        }
        setScrollX(ajusteX)
    }

    return (
        <div className='linhaDeFilmes'>
            <h2>{titulo}</h2>

            <div className='linhaDeFilmes--left' onClick={mudancaParaEsquerda}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className='linhaDeFilmes--right' onClick={mudancaParaDireita}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className='linhaDeFilmes--arealista'>
                <div className='linhaDeFilmes--listas' style={{ marginLeft: scrollX, width: items.results.length * 150 }}>
                    {items.results.length > 0 && items.results.map((item, key) => {
                        if (item.poster_path !== null) {
                            return (
                                <div key={key} className='linhaDeFilmes--items'>
                                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default ListaDeFilmes