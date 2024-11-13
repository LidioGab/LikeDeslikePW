import { useState } from 'react';
import './index.scss';
import likeimg from '../../image/like.png';

export default function Funcionario({imgURL, nomeFunc, codigoFuncionario}) {
    
    const [like, setLike] = useState(0);
    const [deslike, setDeslike] = useState(0);
    
    function addLike(){
        setLike(like + 1);
    }

    function addDeslike(){
        setDeslike(deslike + 1);
    }
    return(
        <body className='prop-func'>
            <main className='main'>
                <img src={imgURL}></img>
                <h2>{nomeFunc}</h2>
                <p>{codigoFuncionario}</p>

                <div className='curtidas'>
                    <div className='like'>
                        <h1>like: {like}</h1>
                        <button onClick={addLike}><img src={likeimg}></img></button>
                    </div>
                    <div className='deslike'>
                        <h1>deslike: {deslike}</h1>
                        <button onClick={addDeslike}><img src={likeimg}></img></button>
                    </div>
                </div>
            </main>
        </body>

    );
}

