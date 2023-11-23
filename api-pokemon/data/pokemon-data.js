const pokemonData = [
  {
    id: 1,
    nome: 'Bulbasaur',
    types: {
      typeId_1: 'Grass',
      typeId_2: 'Poison',
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
      typeId_1: 'Grass'
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
      typeId_1: 'Fire',
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
      typeId_1: 'Water',
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
      typeId_1: 'Grass',
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
      typeId_1: 'Fire',
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
      typeId_1: 'Water',
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/4/45/HOME0258.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/6/64/HOME0258_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/d/d1/Menu_HOME_0258.png'
    },
  },
  {
    id: 908,
    nome: 'Meowscarada',
    types: {
      typeId_1: 'Grass',
      typeId_1: 'Dark',
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/4/4c/HOME0908.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/c/c2/HOME0908_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/b/b3/Menu_HOME_0908.png'
    },
  },
  {
    id: 1009,
    nome: 'Wlking Wake',
    types: {
      typeId_1: 'Water',
      typeId_1: 'Dragon',
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/5/53/HOME1009.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/c/c0/HOME1009_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/4/45/Menu_HOME_1009.png'
    },
  },
  {
    id: 1090,
    nome: 'Dipplin',
    types: {
      typeId_1: 'Grass',
      typeId_1: 'Dragon',
    },
    imagens: {
      normal: 'https://archives.bulbagarden.net/media/upload/4/4c/HOME1011.png',
      shiny: 'https://archives.bulbagarden.net/media/upload/c/c2/HOME0908_s.png',
      menu: 'https://archives.bulbagarden.net/media/upload/6/65/Menu_HOME_1011.png'
    },
  },

];

module.exports = pokemonData;
