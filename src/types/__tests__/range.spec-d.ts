/**
 * @file Type Tests - Range
 * @module unist-util-stringify-position/types/tests/unit-d/Range
 */

import type { Nilable } from '@flex-development/tutils'
import type { Point } from 'unist'
import type PointLike from '../point-like'
import type TestSubject from '../range'

describe('unit-d:types/Range', () => {
  it('should match [0?: Point | PointLike | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty(0)
      .toEqualTypeOf<Nilable<Point | PointLike>>()
  })

  it('should match [1?: Point | PointLike | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty(1)
      .toEqualTypeOf<Nilable<Point | PointLike>>()
  })
})
