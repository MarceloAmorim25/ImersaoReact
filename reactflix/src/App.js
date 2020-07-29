import React from 'react';
import './App.css';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import dadosIniciais from './data/dados_iniciais.json'

function App() {

  return (

    <div style={{background: "#141414"}}>

      <Menu/>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Por onde começar desenvolvimento web?"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Carousel
        category={dadosIniciais.categorias[6]}
      />

      <Carousel
        category={dadosIniciais.categorias[7]}
      />

      <Carousel
        category={dadosIniciais.categorias[8]}
      />

      <Carousel
        category={dadosIniciais.categorias[9]}
      />

      <Carousel
        category={dadosIniciais.categorias[10]}
      />

      <Carousel
        category={dadosIniciais.categorias[11]}
      />

      <Footer/>

    </div>

  );

}

export default App;
