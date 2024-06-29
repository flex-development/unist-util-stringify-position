/**
 * @file Type Tests - State
 * @module unist-util-stringify-position/types/tests/unit-d/State
 */

import type TestSubject from '../state'

describe('unit-d:types/State', () => {
  it('should match [offsets: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('offsets')
      .toEqualTypeOf<boolean>()
  })
})
