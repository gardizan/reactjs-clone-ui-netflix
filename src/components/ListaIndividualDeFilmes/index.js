import React, { useEffect, useState } from 'react'
import './styles.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import useGet from '../../services/hooks/useGet';
import basicFecth from '../../services/basicFecth';


const ListaIndividualDeFilmes = ({ slug, titulo }) => {

    const [items, setItems] = useState(null) // items começa null para criarmos um IF
    const [scrollX, setScrollX] = useState(0)

    // Esse useEffect tem a missão de incrementar a constante items, usando setItems.
    // Lembrando ser apenas uma vez, quando carrega o componente
    useEffect(() => {
        basicFecth(endpoint).then(resposta => {
            setItems(resposta.data)
        })
    }, [])
 
    // A constante getLista salva as informações do Hook personalizado useGet.
    // Esse hook useGet tem como função enviar as informações passadas por parametro do componente
    // Intuito de ser criado dessa forma, foi alimentar um outro componente (ListaDeFilmes) deixando ele o mais próximo de um HTML 
    const getLista = useGet(slug, titulo, items)

    const mudancaParaEsquerda = () => {
        let ajusteX = scrollX + Math.round(window.innerWidth / 2)
        if (ajusteX > 0) {
            ajusteX = 0
        }
        setScrollX(ajusteX)
    }

    const mudancaParaDireita = () => {
        let ajusteX = scrollX - Math.round(window.innerWidth / 2)
        let larguraLista = getLista.items.results.length * 150

        if ((window.innerWidth - larguraLista) > ajusteX) {
            ajusteX = (window.innerWidth - larguraLista) - 80
        }
        setScrollX(ajusteX)
    }

    // Esse if retorna o que é mostrado na tela, evitando erros
    if (getLista.items !== null) {
        return (
            <div className='linhaDeFilmes'>
                <h2>{getLista.titulo}</h2>

                <div className='linhaDeFilmes--left' onClick={mudancaParaEsquerda}>
                    <NavigateBeforeIcon style={{ fontSize: 50 }} />
                </div>
                <div className='linhaDeFilmes--right' onClick={mudancaParaDireita}>
                    <NavigateNextIcon style={{ fontSize: 50 }} />
                </div>

                <div className='linhaDeFilmes--arealista'>
                    <div className='linhaDeFilmes--listas' style={{ marginLeft: scrollX, width: getLista.items.results.length * 150 }}>
                        {getLista.items.results.length > 0 && getLista.items.results.map((item, key) => {
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

    return (
        <div>Loading...</div>
    )
}

export default ListaIndividualDeFilmes