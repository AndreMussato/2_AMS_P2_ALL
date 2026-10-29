import { useState } from 'react'

//Importa uma imagem da pasta assets
//O React trata isso como um módulo e gera um caminho válido
import Serie from './assets/serie.avif';

//Importa o componente criado AlteraValor
import AlteraValor from './components/AlteraValor';

//Importa o componente RenderCondicional
import RenderCondicional from './components/RenderCondicional';

//Importa o componente RenderLista
import RenderLista from './components/RenderLista';

import DetalhesUsuarios from './components/DetalhesUsuarios';


function App() {

  const pessoas = [
    { id: 1, nome: "Miguel Safadão", idade: 16, profissao: "Tiktoker" },
    { id: 2, nome: "Ramona", idade: 16, profissao: "Estudante" },
    { id: 3, nome: "José Pedro", idade: 16, profissao: "Estudante" },
    { id: 4, nome: "Pedrin Garcia", idade: 67, profissao: "Professor de História" },
    { id: 5, nome: "André Mussato", idade: 31, profissao: "Programador" },
  ]

  return (
    <>

      <div className='App'>

        {/* Título da aplicação */}
        <h1>Avançando em React</h1>

        {/* IMAGEM EM PUBLIC */}
        <div>
          {/* Aqui a imagem está na pasta /public */}
          {/* Pode ser acessada diretamente pelo caminho */}
          <img src='/one-piece.jpg' alt='One Piece' />
        </div>

        <hr />
        {/* IMAGEM EM ASSETS */}
        <div>
          {/* Aqui a imagem foi importada no inicio do arquivo */}
          {/* Usamos a variavel Serie como src*/}
          <img src={Serie} alt='Serie One Piece' />
        </div>


        {/* Linha Horizontal para separa conteúdo */}
        <hr />

        {/* Renderiza o componente que demonstra uso do useState */}
        <AlteraValor />

        <hr />
        <RenderCondicional />

        <hr />
        <RenderLista />

        {/* DESAFIO 
        1 - Crie um array de objetos composto de pessoas, com as propriedades de:
          nome, idade e profissão (array com pelo menos 3 itens); (deve estar na App)
        2 - Os dados devem ser exibidos em um componente DetalhesUsuarios, que você deve
        criar, todas as informações devem ser exibidas;
        3 - Faça uma renderização condicional que exibe se o usuário pode tirar carteira
        de habilitação ou não, imprima isso também no componente
        4 - A informação pode ser exibida num parágrafo (checar se idade >= 18)
        */}

        <hr />
        <h1>Resolução do Desafio:</h1>

        {pessoas.map((pessoa) => (
          <DetalhesUsuarios
            key={pessoa.id}
            nome={pessoa.nome}
            idade={pessoa.idade}
            profissao={pessoa.profissao}
          />
        ))}
      </div>
    </>
  )
}

export default App
