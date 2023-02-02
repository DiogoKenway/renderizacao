function numeroAleatorio(min = 1, max = 1000) {
    return parseInt((Math.random() * (max - min)) + min);
}

export default function handler(req, res) {
    res.status(200).json([
        { id: numeroAleatorio(), nome: "caneta", preco: 5.60 },
        { id: numeroAleatorio(), nome: "carderno", preco: 15.60 },
        { id: numeroAleatorio(), nome: "borracha", preco: 7.30 },
        { id: numeroAleatorio(), nome: "tesoura", preco: 21.60 },
    ])
  }
  