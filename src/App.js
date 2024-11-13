
import './App.scss';
import Funcionario from './components/funcionario/index.js';
export default function App() {
  return (
    <body className='page-LikeDeslike'>
      <header className='header'>
        <h1 className='header-title'>Funcionario do mes</h1>
      </header>
      <div className='props'>
        <Funcionario imgURL="https://s2-ge.glbimg.com/giuffh8geETdGlBIWlDItn47gxc=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/e/d/QdtD6IQGqBu7uZFOBhpg/aspas-loud-campeao-cyw.jpg" nomeFunc="Erick Santos" codigoFuncionario="G.O.A.T"/>
        <Funcionario imgURL="https://noticias.maisesports.com.br/wp-content/uploads/2023/03/52775095012_364a6b847d_k.jpg" nomeFunc="Taynah Yukimi" codigoFuncionario="96" />
        <Funcionario imgURL="https://www.pichauarena.com.br/wp-content/uploads/2022/12/Fc-WQmEXgAAUYdu-715x715.jpeg" nomeFunc="Matias Delipetro" codigoFuncionario="69"/>
        <Funcionario imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2awdC37QFdgRiJaqWzlokxFwO5vCxACIgew&s" nomeFunc="Bryan luna" codigoFuncionario="777" />
      </div>

      <footer>
        <p>CodeCommiters - All Rights Reserved © 2022.</p>
      </footer>
    </body>
  );
}

