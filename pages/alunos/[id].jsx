export async function getStaticPaths() {

    const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`);
    const aluno = await resp.json();

    return {
        fallback: false, // 404
        paths: [
            { params: { id: "107" } },
            { params: { id: "203" } },
            { params: { id: "1345" } }
        ]
    }
}
export async function getStaticProps (context) {
   
    const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`);
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
            <ul>
                <li>{aluno}</li>
            </ul>
        </div>
    )
}