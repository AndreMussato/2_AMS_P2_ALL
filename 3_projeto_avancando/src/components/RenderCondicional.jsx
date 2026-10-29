//Importa o hook useState do React
//Serve para criar e controlar estados dentro do componente
import { useState } from "react";

//Declaração do componente funcional RenderCondicional
function RenderCondicional() {

    //Cria um estado chamado "x"
    //Aqui você esta pegando apenas o valor false ou true
    //Não pegou a função setX, então x nunca muda
    const [ x ] = useState(true);

    //Cria um estado chamado "cor"
    //cor - valor atual
    //setCor - função para atualizar o valor
    const [ cor, setCor ] = useState("Rosa");

    //Retorno do componente (o que será renderizado na tela)
    return(
        <>
        <div>
            {/* Título */}
            <h1>Isso será exibido?</h1>

            {/* Renderização condicional com operador &&
            Só aparece se x for true */}
            {x && <p>X é Verdadeiro!</p>}

            {/* Aqui usamos !x (negação)
            Só aparece se x for false */}
            {!x && <p>Agora x é falso.</p>}

            {/* Título da proxima seção */}
            <h1>If Ternário</h1>

            {/* OPerador ternário (if/else no JSX)
            Se cor === "Rosa" - mostra o primeiro texto
            Senão - mostra o segundo. */}
            {cor === "Rosa" ? (
                <p>É Rosa mesmo, João?</p>
            ) : (
                <p>Não é Rosa!</p>
            )}

            {/* Botão que altera o estado "cor" 
            Ao clicar - muda o valor para "Azul" */}
            <button onClick={() => setCor("Azul")}>
                Mudar Cor
            </button>

        </div>
        </>
    )
}

//Exporta o componente para ser usado em outros arquivos
export default RenderCondicional;