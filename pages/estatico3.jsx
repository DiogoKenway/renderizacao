export function getStaticProps() {
    return {
        props: {
            revalidate: 7,
            numero: Math.random()
        }
    }
}

export default function estatico2(props) {
    return (
        <div>
            <h1>Estatico #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
} 