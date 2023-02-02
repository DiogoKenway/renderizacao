export async function getStaticPaths() {
    const resp = await fetch(`http://localhost:3000/api/alunos/tutores`);
    const ids = await resp.json();

    const paths = ids.map(id => {
        return { params: { id: `${id}` } }
    });

    return {
        fallback: true, // 404
        paths
    }
}
export async function getStaticProps ({params}) {
    console.log(params);

    const resp = await fetch(`http://localhost:3000/api/alunos/${params.id}`);
    const aluno = await resp.json();

    return {
        props: {
            aluno
        }
    }
}


export default function AlunoPorId({ aluno }) {
    return (
        <div>
            <h1>Detalhes do Aluno</h1>
            {
                aluno ? 
                <ul>
                    <li>{aluno.id}</li>
                    <li>{aluno.nome}</li>
                    <li>{aluno.email}</li>
                </ul>
                    :
                <h1>Não Encontrado!!!</h1>
            }
        </div>
    )
}