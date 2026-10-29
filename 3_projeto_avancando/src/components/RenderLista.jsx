import { useState } from "react";

function RenderLista() {

    //Cria uma lista chamada "lista" com um array de nomes
    //Aqui não usamos setLista, então a lista é fixa
    const [lista] = useState([ "Matheus", "Melissa", "Leticia", "Sofia", 
        "Silvio", "Ramona", "Miguel", "Gustavo", "Murilo", "Stefany", "Vinicius"]);

    //Cria um estado chamado "alunos" com um array de objetos
    //Cada objeto representa um aluno com rm, nome e idade
    const [alunos] = useState([
        { rm: 10373, nome: "Matheus", idade: 16 },
        { rm: 11486, nome: "Melissa", idade: 17 },
        { rm: 10385, nome: "Leticia", idade: 16 },
        { rm: 10778, nome: "Sofia", idade: 16 },
        { rm: 10318, nome: "Silvio", idade: 16 },
        { rm: 10312, nome: "Ramona", idade: 16 },
        { rm: 10348, nome: "Lorrany", idade: 17 },
        { rm: 10802, nome: "Vinicius", idade: 17 },
    ]);

     return(
        <>

        <div>

            {/* Lista simples de nomes */}
            <ul>
                {/* map percorre o array */}
                {lista.map((item, i) => (
                    //Key é obrigatório para o React identificar cada item
                    //aqui foi utilizado o indice i
                    <li key={i}> {item} </li>
                ))}
            </ul>

            <hr />
            <ol>
                {alunos.map((aluno) => (
                    <li key={aluno.rm}>
                        {aluno.nome} - {aluno.idade}
                    </li>
                ))}
            </ol>
        </div>
        </>
     )
}

export default RenderLista