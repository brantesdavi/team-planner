const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());


// Dados simulados de Pokémon
const pokemonData = [
  {
    id: 1,
    nome: 'Bulbasaur',
    tipos: ['Planta', 'Veneno'],
    imagens: {
      normal: 'link_para_imagem_normal',
      shiny: 'link_para_imagem_shiny',
    },
  },
  // Adicione mais Pokémon aqui
];

// Dados simulados de Jogos
const jogoData = [
  {
    id: 1,
    nome: 'Red / Green / Blue',
    geracao: 1,
    regiao: 'Kanto',
    pokemonIds: [1, 4, 7], // IDs dos Pokémon associados a este jogo
  },
  // Adicione mais jogos aqui
];

// Endpoint para obter informações do jogo e Pokémon associados
app.get('/jogo/:id', (req, res) => {
  const jogoId = parseInt(req.params.id);
  const jogo = jogoData.find((j) => j.id === jogoId);

  if (!jogo) {
    return res.status(404).json({ message: 'Jogo não encontrado.' });
  }

  const pokemonDoJogo = pokemonData.filter((p) => jogo.pokemonIds.includes(p.id));


  res.json({ jogo, pokemonDoJogo });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
