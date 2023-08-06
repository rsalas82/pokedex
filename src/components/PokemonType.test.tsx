import { describe, expect, test } from 'vitest'
import {render, screen} from '@testing-library/react'
import PokemonType from './PokemonType'


describe('PokemonType', () => {
    test('should render a div with text "Posion" inside', () => {
        render(<PokemonType color='poison' name="Poison" />)
        expect(screen.getByText('Poison')).toBeDefined()
    })
})
