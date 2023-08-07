import { rest } from 'msw'
import { POKEMON_BULBASAUR } from './pokemon'

export const handlers = [
    rest.get('https://pokeapi.co/api/v2/pokemon/bulbasaur', (_, res, ctx) => {
      
        return res(
            ctx.status(200),
            ctx.json(POKEMON_BULBASAUR),
          )
    }),
  ]