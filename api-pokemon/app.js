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
    types: {
      typeId_1: 'Fire',
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/9/9f/HOME0001.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/4/42/HOME0001_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/7/70/Menu_HOME_0001.png'
    },
  },
  {
    id: 4,
    nome: 'Charmander',
    types: {
      typeId_1: 'Fire',
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/7/7d/HOME0004.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/5/5e/HOME0004_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/9/9c/Menu_HOME_0004.png'
    },
  },
  {
    id: 7,
    nome: 'Squirtle',
    types: {
      typeId_1: 'Water',
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/a/a9/HOME0007.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/8/85/HOME0007_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/1/18/Menu_HOME_0007.png'
    },
  },
  {
    id: 8,
    nome: 'Wartortle',
    types: {
      typeId_1: 'Water',
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/b/be/HOME0008.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/a/af/HOME0008_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/9/97/Menu_HOME_0008.png'
    },
  },
  {
    id: 10,
    nome: 'Caterpie',
    types: {
      typeId_1: "Bug",
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/6/6e/HOME0010.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/7/74/HOME0010_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/9/9f/Menu_HOME_0010.png'
    },
  },
  {
    id: 13,
    nome: 'Weedle',
    types: {
      typeId_1: "Bug",
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/4/4f/HOME0013.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/b/b1/HOME0013_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/9/97/Menu_HOME_0013.png'
    },
  },
  {
    id: 16,
    nome: 'Pidgey',
    types: {
      typeId_1: "Normal",
      typeId_2: "Flying",
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/d/d0/HOME0016.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/a/af/HOME0008_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/b/b0/Menu_HOME_0016.png'
    },
  },
  {
    id: 19,
    nome: 'Rattata',
    types: {
      typeId_1: "Normal",
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/3/36/HOME0019.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/9/93/HOME0019_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/b/be/Menu_HOME_0019.png'
    },
    forms: [
      {
        name: 'Alolan',
        url: 'https://archives.bulbagarden.net/media/upload/d/d9/Menu_HOME_0019-Alola.png'
      }
    ]
  },
  {
    id: 131,
    nome: 'Lapras',
    types: {
      typeId_1: "Water",
      typeId_2: "Ice",
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/e/eb/HOME0131.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/8/83/HOME0131_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/f/fb/Menu_HOME_0131.png'
    },
    forms: {
      giMax_default: 'https://archives.bulbagarden.net/media/upload/7/72/HOME0131Gi.png',
      giMax_shiny: 'https://archives.bulbagarden.net/media/upload/2/27/HOME0131Gi_s.png'
    }
  },
  {
    id: 132,
    nome: 'Ditto',
    types: {
      typeId_1: "Normal"
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/6/63/HOME0132.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/5/5d/HOME0132_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/c/ca/Menu_HOME_0132.png'
    }
  },

  {
    id: 143,
    nome: 'Snorlax',
    types: {
      typeId_1: "Water",
      typeId_2: "Ice",
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/2/2c/HOME0143.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/4/4e/HOME0143_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/b/b5/Menu_HOME_0143.png'
    },
    forms: {
      giMax_default: 'https://archives.bulbagarden.net/media/upload/5/5a/HOME0143Gi.png',
      giMax_shiny: 'https://archives.bulbagarden.net/media/upload/a/a9/HOME0143Gi_s.png'
    }
  },

  {
    id: 152,
    nome: 'Chikorita',
    types: {
      typeId_1: 1
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/d/d6/HOME0152.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/4/42/HOME0152_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/b/be/Menu_HOME_0152.png'
    },
  },
  {
    id: 155,
    nome: 'Cyndaquill',
    types: {
      typeId_1: 2,
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/a/ad/HOME0155.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/a/a0/HOME0155_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/5/5b/Menu_HOME_0155.png'
    },
  },
  {
    id: 158,
    nome: 'Totodile',
    types: {
      typeId_1: 3,
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/0/0c/HOME0158.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/1/12/HOME0158_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/d/df/Menu_HOME_0158.png'
    },
  },
  {
    id: 252,
    nome: 'Treecko',
    types: {
      typeId_1: 1,
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/2/2b/HOME0252.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/2/2c/HOME0252_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/2/2a/Menu_HOME_0252.png'
    },
  },
  {
    id: 255,
    nome: 'Torchic',
    types: {
      typeId_1: 2,
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/e/ed/HOME0255.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/1/17/HOME0255_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/4/47/Menu_HOME_0255.png'
    },
  },
  {
    id: 258,
    nome: 'Mudkip',
    types: {
      typeId_1: 3,
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/4/45/HOME0258.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/6/64/HOME0258_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/d/d1/Menu_HOME_0258.png'
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
    pokemonIds: [1, 4, 7, 8, 10, 13, 16, 19, 131, 132, 143], // IDs dos Pokémon associados a este jogo
  },
  {
    id: 2,
    nome: 'Gold / Silver / Crystal',
    geracao: 2,
    regiao: 'Jhoto',
    pokemonIds: [152, 155, 158, 132, 131, 143], // IDs dos Pokémon associados a este jogo
  },
  {
    id: 3,
    nome: 'Ruby / Saphiere / Emerald',
    geracao: 3,
    regiao: 'Hoen',
    pokemonIds: [252, 255, 258], // IDs dos Pokémon associados a este jogo
  },
  {
    id: 10,
    nome: 'Omega Ruby / Alpha Saphiere',
    geracao: 3,
    regiao: 'Hoen',
    pokemonIds: [252, 255, 258], // IDs dos Pokémon associados a este jogo
  },
  // Adicione mais jogos aqui
];

const pokemonTypes = [
  {
    id: 1,
    name: 'Grass',
    icon: '',
    color: ''
  },
  {
    id: 2,
    name: 'Fire',
    icon: '',
    color: ''
  },
  {
    id: 3,
    name: 'Water',
    icon: '',
    color: ''
  },
  {
    id: 4,
    name: 'Poison',
    icon: '',
    color: ''
  },
  {
    id: 5,
    name: 'Normal',
    icon: '',
    color: ''
  },
  {
    id: 6,
    name: 'Flying',
    icon: '',
    color: ''
  },
  {
    id: 7,
    name: 'Bug',
    icon: '',
    color: ''
  },

]

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

app.get('/games', (req, res) => {
  res.json({ jogoData })
})

app.get('/games/:id', (req, res) => {
  const gameId = parseInt(req.params.id);
  const game = jogoData.find((g) => g.id === gameId)

  if (!game) {
    return res.status(404).json({ message: ' Jogo não encontrado.' });
  }

  res.json({ game });

})

app.get('/types/:id', (req, res) => {
  const typeId = parseInt(req.params.id);
  if(typeId == 0){
    return null
  }
  const type = pokemonTypes.find((t) => t.id === typeId)

  if (!type) {
    return res.status(404).json({ message: 'Tipo não encontrado.' });
  }

  res.json({type})

})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
