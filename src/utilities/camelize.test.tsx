import { expect, test } from 'vitest'
import { camelize } from './camelize'

const TEXT_TO_BE_TESTED = "this is a test"
const EXPECTED_RESULT = "This Is A Test"

test('camelize switch every first letters of each word to uppercase', () => {
    const camelizedText = camelize(TEXT_TO_BE_TESTED)
    expect(camelizedText).toBe(EXPECTED_RESULT)
})