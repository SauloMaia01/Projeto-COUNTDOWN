'use strict';

const contagemRegressiva = (tempo) => {

    const pararContagem = () => clearInterval(id);
    
    const contar = () => {

        if (tempo === 0){
            pararContagem()
        }
        console.log (tempo);
        tempo--;
    };

    const id = setInterval(contar, 1000);
}

contagemRegressiva(5);