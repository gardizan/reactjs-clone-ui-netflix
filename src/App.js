import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './services/Tmdb';
import ListaDeFilmes from './components/ListasDeFilmes';
import FilmeDestaque from './components/FilmeDestaque';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading'


function App() {

  const [listaFilmes, setListaFilmes] = useState([])
  const [filmeDestaqueData, setFilmeDestaqueData] = useState(null)
  const [generos, setGeneros] = useState(null)
  const [headerEfeito, setHeaderEfeito] = useState(false)

  useEffect(() => {
    const carregarTudo = async () => {
      //Pegando a Lista total
      const lista = await Tmdb.getHomeList()
      setListaFilmes(lista)

      //Pegando Filme destaque
      const originais = lista.filter(i => i.slug === 'originals')
      const aleatorioFilme = Math.floor(Math.random() * (originais[0].items.results.length - 1))
      const filmeEscolhido = originais[0].items.results[aleatorioFilme]

      //Trazendo o filme destaque e acrescentando no componente 'Filme Destaque'
      const filmeEscolhidoInfo = await Tmdb.getInfoFilme(filmeEscolhido.id, 'tv')

      //Buscando a categoria do Filme Destaque e setando dentro da constante genero,
      //passando via parametro (PROPS?!) para o componente 'Filme Destaque'
      filmeEscolhidoInfo.genres.map((genero, key) => {
        setGeneros(genero.name)
      })
      setFilmeDestaqueData(filmeEscolhidoInfo)
    }
    carregarTudo()
  }, [])

  useEffect(() => {
    const escutandoScroll = () => {
      if (window.scrollY > 40) {
        setHeaderEfeito(true)
      } else {
        setHeaderEfeito(false)
      }
    }
    window.addEventListener('scroll', escutandoScroll)
    return () => {
      window.removeEventListener('scroll', escutandoScroll)
    }
  }, [])

  return (
    <div className='pagina'>

      <Header headerBlack={headerEfeito} />

      {filmeDestaqueData &&
        <FilmeDestaque itemNew={filmeDestaqueData} generoNew={generos} />
      }

      <section className='listas'>
        {listaFilmes.map((item, key) => (
          <ListaDeFilmes key={key} titulo={item.titulo} items={item.items} />
        ))}
      </section>

      <Footer />
      {
        listaFilmes.length <= 0 &&
          <Loading />
      }
    </div>
  );
}

export default App;
