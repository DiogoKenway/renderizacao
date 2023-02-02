export async function getStaticProps() { // método do servidor

    console.log("[Server] gerando props para o componente....")

    const response = await fetch("http://localhost:3000/api/produtos");
    const produtos = await response.json()

    return {
        props: {
            produtos
        }
    };
}   


export default function Dinamico2(props) {
    console.log("[client] renderizando o componente...");
    return (
        <div>
            <h1>Dinâmico #02</h1>
            <ul>
                {
                    props.produtos.map(produto => (
                        <li key={produto.id}>
                            id: {produto.id},
                            nome: {produto.nome},
                            preço: {produto.preco}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
} 