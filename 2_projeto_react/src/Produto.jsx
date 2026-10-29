function Produto (props) {
    return (
        <>
        <h2>Produto:</h2>
        <p>Código: {props.codigo}</p>
        <p>Nome: {props.nome}</p>
        <p>Valor: {props.valor}</p>
        <p>Estoque: {props.quantEstoque}</p>
        <p>Categoria: {props.categoria}</p>
        </>
    )
}

export default Produto;