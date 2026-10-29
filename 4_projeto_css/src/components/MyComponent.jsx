import React from "react";

//Importa o arquivos CSS
import "./MyComponent.css"

function MyComponent() {
    return (
        <>
            {/* Título do Componente */}
            <h1>CSS de Componente</h1>

            {/* Paragrafo utilizando uma classe CSS chamada
            my-comp-paragraph definida no arquivo MyComponent */}
            <p className="my-comp-paragraph">
                Paragrafo desse componente
            </p>
            
        </>
    )
}

export default MyComponent