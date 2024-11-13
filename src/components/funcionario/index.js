import './index.scss';

export default function Funcionario({imgURL, nomeFunc, codigoFuncionario, like, deslike}) {
    return(
        <body className='prop-func'>
            <main className='main'>
                <img src={imgURL}></img>
                <h2>{nomeFunc}</h2>
                <p>{codigoFuncionario}</p>

                <div className='curtidas'>
                    <h1>like: {like}</h1>
                    <h1>deslike: {deslike}</h1>
                </div>
            </main>
        </body>

    );
}

