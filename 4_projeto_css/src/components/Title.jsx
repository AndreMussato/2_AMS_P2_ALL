import React from "react";

//Importa o arquivo de CSS Modules
//O CSS Modules permite que as classes sejam isoladas,
//evitando conflito com estilos de outros componentes
import styles from './Title.module.css';

function Title() {
    return (
        <>
            {/* O className styles.my_title porque estamos
        usando CSS Modules.
        
        A classe "my_title" deve existir dentro do arquivo
        Title.module.css */}
            <h1 className={styles.my_title}>
                Título
            </h1>
        </>
    )
}

export default Title