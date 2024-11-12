import './App.scss';
import Funcionario from './components/funcionario/index.js';
function App() {
  return (
    <body className='page-LikeDeslike'>
      <header className='header'>
        <h1 className='header-title'>Funcionario do mes</h1>
      </header>

        <Funcionario imgURL="https://s2-ge.glbimg.com/giuffh8geETdGlBIWlDItn47gxc=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/e/d/QdtD6IQGqBu7uZFOBhpg/aspas-loud-campeao-cyw.jpg" nomeFunc="Erick Santos" codigoFuncionario="213"/>
        <Funcionario imgURL="https://noticias.maisesports.com.br/wp-content/uploads/2023/03/52775095012_364a6b847d_k.jpg" nomeFunc="tayhuhu" codigoFuncionario="123"/>

    </body>
  );
}

export default App;
