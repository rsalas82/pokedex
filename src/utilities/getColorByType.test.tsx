import { describe, expect, test } from 'vitest'
import { getColorByType } from './getColorByType'

const EXPECTED_VALUE = { type: 'poison', bgColor: 'bg-[#A33EA1]', fromColor: 'from-[#A33EA1]', toColor: 'to-[#A33EA1]' }

describe('getColorByType', () => {
    test('should be equal to EXPECTED_VALUE when passing "poison" value', () => {
        const colors = getColorByType('poison')
        expect(colors).not.toBeNull()
        expect(colors?.type).toBe(EXPECTED_VALUE.type)
    })
    test('should return undefined when passing a not valid value', () => {
        const colors = getColorByType('lettuce')
        expect(colors).toBeUndefined()
    })
})
