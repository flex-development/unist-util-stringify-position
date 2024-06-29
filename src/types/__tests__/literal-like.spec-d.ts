/**
 * @file Type Tests - LiteralLike
 * @module unist-util-stringify-position/types/tests/unit-d/LiteralLike
 */

import type TestSubject from '../literal-like'
import type NodeLike from '../node-like'

describe('unit-d:types/LiteralLike', () => {
  it('should match NodeLike', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<NodeLike>()
  })

  it('should match [value: unknown]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('value').toEqualTypeOf<unknown>()
  })
})
