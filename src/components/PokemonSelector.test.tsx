import { describe, expect, test } from 'vitest'
import {render, screen, waitFor} from '@testing-library/react'
import PokemonSelector from './PokemonSelector'


describe('PokemonSelector', () => {
    test('should render the selecor page', async() => {
        render(<PokemonSelector key='bulbasaur' pokemonName='bulbasaur' selectPokemon={() => null}/>)
        await waitFor(() => {expect(screen.getByText(/bulbasaur/i))})
    })
})
