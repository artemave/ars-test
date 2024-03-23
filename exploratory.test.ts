import { test } from 'assert-raisins'
import { deepStrictEqual } from 'assert'

test('1 + 1', () => {
  const result = 1 + 1
  deepStrictEqual(result, 2)
})
