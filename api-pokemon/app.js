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
      normal: 'https://archives.bulbagarden.net/media/upload/9/9f/HOME0001.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/4/42/HOME0001_s.png',
      sprite: 'https://archives.bulbagarden.net/media/upload/9/9c/Menu_HOME_0001.png'
    },
  },
  {
    id: 4,
    nome: 'Charmander',
    tipos: ['Fogo'],
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/7/7d/HOME0004.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/5/5e/HOME0004_s.png',
      sprite: 'https://archives.bulbagarden.net/media/upload/9/9c/Menu_HOME_0004.png'
    },
  },
  {
    id: 7,
    nome: 'Squirtle',
    tipos: ['Agua'],
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/a/a9/HOME0007.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/8/85/HOME0007_s.png',
      sprite: 'https://archives.bulbagarden.net/media/upload/9/9c/Menu_HOME_0007.png'
    },
  },
  {
    id: 152,
    nome: 'Chikorita',
    tipos: ['Planta'],
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/7/7d/HOME0152.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/5/5e/HOME0152_s.png',
      sprite: 'https://archives.bulbagarden.net/media/upload/9/9c/Menu_HOME_0152.png'
    },
  },
  {
    id: 155,
    nome: 'Cyndaquill',
    tipos: ['Fogo'],
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/155/7d/HOME0155.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/5/5e/HOME0155_s.png',
      sprite: 'https://archives.bulbagarden.net/media/upload/9/9c/Menu_HOME_0155.png'
    },
  },
  {
    id: 158,
    nome: 'Totodile',
    tipos: ['Agua'],
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/7/7d/HOME0158.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/5/5e/HOME0158_s.png',
      sprite: 'https://archives.bulbagarden.net/media/upload/9/9c/Menu_HOME_0158.png'
    },
  },

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
