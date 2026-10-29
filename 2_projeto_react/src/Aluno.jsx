//Declaração de um componente React chamado "Aluno"
function Aluno(props) {
    return(
        <p>O aluno {props.nome} tem {props.idade} anos de idade.</p>
    )
}

export default Aluno