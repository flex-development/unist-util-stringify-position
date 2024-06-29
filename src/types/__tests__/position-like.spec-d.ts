/**
 * @file Type Tests - PositionLike
 * @module unist-util-stringify-position/types/tests/unit-d/PositionLike
 */

import type { Nilable } from '@flex-development/tutils'
import type PointLike from '../point-like'
import type TestSubject from '../position-like'

describe('unit-d:types/PositionLike', () => {
  it('should match [end?: PointLike | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('end')
      .toEqualTypeOf<Nilable<PointLike>>()
  })

  it('should match [start?: PointLike | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('start')
      .toEqualTypeOf<Nilable<PointLike>>()
  })
})
