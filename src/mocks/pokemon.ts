export const POKEMON_LIST = {
  count: 1281,
  next: "https://pokeapi.co/api/v2/pokemon/?offset=5&limit=5",
  previous: null,
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/"
    }
  ]
}

export const POKEMON_BULBASAUR = {
  id: 1,
  base_experience: 64,
  name: "bulbasaur",
  moves: [
    {
      move: {
        name: "razor-wind",
        url: "https://pokeapi.co/api/v2/move/13/"
      }
    },
    {
      move: {
        name: "swords-dance",
        url: "https://pokeapi.co/api/v2/move/14/"
      }
    }
  ],
  sprites: {
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      slot: 2,
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
}