import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardExtra from './components/CardExtra/CardExtra';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fcgh4-1.fna.fbcdn.net/v/t1.0-9/s960x960/81841568_1224989281224101_4826056962976251904_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=8jMp5a_Ue5wAX_NPHa4&_nc_ht=scontent.fcgh4-1.fna&_nc_tp=7&oh=d2f3a1b031dc76c1fa6846b5ecb838ca&oe=5EE16563" 
          nome="Camila Miranda de Moura" 
          descricao="Graduada em Relações Internacionais, com experiência em consultoria e no terceiro setor"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno 
          email="camila.miranda.moura@gmail.com" 
          endereco="Av. Francisco Matarazzo, 2160 - Barra Funda" 
        />               
      </div>
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQHouFBq9EepyQ/company-logo_200_200/0?e=2159024400&v=beta&t=gAuvtFb3n8mD4iQUpwqiH4fhO0sqK1M1VQJ0zu6QmQY" 
          nome="Instituto Península" 
          descricao="Estagiária (2018-2019)" 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFJ9JitIWt5yw/company-logo_200_200/0?e=2159024400&v=beta&t=V_yC9tYOVPOGlJ_DUd8kpe-o_9t_4t0oFe53P0PJ6Bk" 
          nome="Broggini" 
          descricao="Estagiária (2017-2018)" 
        />
      </div>

      <div className="page-section-container">
        <h2>Trabalho voluntário</h2>
        <CardExtra 
          imagem="https://yt3.ggpht.com/a-/AAuE7mA4aDUCN-klDNRRbCmPjWnre1-agX67cbYcqA=s900-mo-c-c0xffffffff-rj-k-no" 
          nome="World Economic Forum on Latin America" 
          descricao="Organizadora do time de voluntários" 
        />
        
        <CardExtra 
          imagem="https://static.wixstatic.com/media/de49f0_7c167f101a1d4b5f8d1f00925dd4a2c4~mv2.png/v1/fill/w_212,h_212,al_c,q_85,usm_0.66_1.00_0.01/Design%20sem%20nome.webp" 
          nome="FERISP" 
          descricao="Planejamento de atividades do evento" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />

          <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" 
          texto="Instagram" 
        /> 
      </div>
    </div>
  );
}

export default App;
