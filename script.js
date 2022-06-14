'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);
/* slice corda o digito da esquerda para a direita, se por negativo corta a direita para a esquerda */

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');

    segundos.textContent = (tempo);
}

const contagemRegressiva = (tempo) => {

    const pararContagem = () => clearInterval(id);
    
    const contar = () => {

        if (tempo === 0){
            pararContagem()
        }
        atualizar (tempo);
        tempo--;
    };

    const id = setInterval(contar, 1000);
}

contagemRegressiva(12);