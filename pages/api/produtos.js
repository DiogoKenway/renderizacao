function numeroAleatorio(min = 1, max = 1000) {
    return (Math.random() * (max - min)) + min;
}


export default function handler(req, res) {
    res.status(200).json([
        { id: 1, nome: "caneta", preco: 5.60 },
        { id: 2, nome: "carderno", preco: 15.60 },
        { id: 3, nome: "borracha", preco: 7.30 },
        { id: 4, nome: "tesoura", preco: 21.60 },
    ])
  }
  