import './index.scss';

export default function Funcionario({imgURL, nomeFunc, codigoFuncionario}) {
    return(
        <body className='prop-func'>
            <main className='main'>
                <img src={imgURL}></img>
                <h2>{nomeFunc}</h2>
                <p>{codigoFuncionario}</p>
            </main>
        </body>

    );
}

