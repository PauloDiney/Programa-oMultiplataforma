import React from 'react';
import './botao.css';

const Botao = ({ texto, aoClicar }) => {

    
    return (
        <button  onClick={aoClicar} className="botao">
            {texto}
           
        </button>
    );
}

export default Botao;