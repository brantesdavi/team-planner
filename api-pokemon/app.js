const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const pokemonData = require('./data/pokemon-data');
const gameData = require('./data/game-data')
const typesData = require('./data/types-data')

// Endpoint para obter informações do jogo e Pokémon associados
app.get('/jogo/:id', (req, res) => {

  const jogoId = parseInt(req.params.id);
  const jogo = gameData.find((j) => j.id === jogoId);

  if (!jogo) {
    return res.status(404).json({ message: 'Jogo não encontrado.' });
  }

  const pokemonDoJogo = pokemonData.filter((p) => jogo.pokemonIds.includes(p.id));
  res.json({ jogo, pokemonDoJogo });
});

//endpoint para lista de todos os jogos
app.get('/games', (req, res) => {
  res.json({ gameData })
})

//passando um id ele retorna o jogo especifico
app.get('/games/:id', (req, res) => {
  const gameId = parseInt(req.params.id);
  const game = gameData.find((g) => g.id === gameId)

  if (!game) {
    return res.status(404).json({ message: ' Jogo não encontrado.' });
  }

  res.json({ game });

})

app.get('/types', (req, res) => {
  res.json({ typesData })
})

//passando um id ele retorna o tipo especifico
app.get('/types/:id', (req, res) => {
  const typeId = parseInt(req.params.id);
  if(typeId == 0){
    return null
  }
  const type = typesData.find((t) => t.id === typeId)

  if (!type) {
    return res.status(404).json({ message: 'Tipo não encontrado.' });
  }

  res.json({type})

})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
