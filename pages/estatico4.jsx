export async function getStaticProps() {

    const response = await fetch("http://localhost:3000/api/produtos");
    const produtos = await response.json()

    console.log(produtos);

    return {
        props: {
            produtos
        }
    }
}   

export default function estatico2(props) {
    console.log(props);
    return (
        <div>
            <h1>Estatico #04</h1>
            <ul>
                {
                    props.produtos.map(produto => (
                        <li key={produto.id}>
                            <div>
                            id: {produto.id},
                            nome: {produto.nome},
                            preço: {produto.preco}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
} 