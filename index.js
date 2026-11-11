
import express from "express";

const app = express();
const PORT = 3000;

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Array com os times
const times = [
    {
        id: 1,
        nome: "Grêmio",
        estadio: "Arena do Grêmio",
        cidade: "Porto Alegre"
    },
    {
        id: 2,
        nome: "Internacional",
        estadio: "Beira-Rio",
        cidade: "Porto Alegre"
    },
    {
        id: 3,
        nome: "Flamengo",
        estadio: "Maracanã",
        cidade: "Rio de Janeiro"
    }
];

// Rota principal
app.get("/", (req, res) => {
    res.render("index", {
        mensagem: "Bem-vindo ao Catálogo de Times!"
    });
});

// Rota para listar os times
app.get("/times", (req, res) => {
    res.render("times", {
        times: times
    });
});

// Rota para exibir os detalhes de um time
app.get("/times/:id", (req, res) => {
    const id = Number(req.params.id);

    const time = times.find((time) => time.id === id);

    if (!time) {
        return res.status(404).send("Time não encontrado!");
    }

    res.render("detalhe", {
        time: time
    });
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});