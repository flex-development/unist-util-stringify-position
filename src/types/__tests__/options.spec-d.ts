/**
 * @file Type Tests - Options
 * @module unist-util-stringify-position/types/tests/unit-d/Options
 */

import type { Nilable } from '@flex-development/tutils'
import type TestSubject from '../options'

describe('unit-d:types/Options', () => {
  it('should match [offsets?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('offsets')
      .toEqualTypeOf<Nilable<boolean>>()
  })
})
