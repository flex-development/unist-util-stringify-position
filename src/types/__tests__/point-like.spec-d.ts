/**
 * @file Type Tests - PointLike
 * @module unist-util-stringify-position/types/tests/unit-d/PointLike
 */

import type { Nilable } from '@flex-development/tutils'
import type { Column, Line, Offset } from '@flex-development/unist-util-types'
import type TestSubject from '../point-like'

describe('unit-d:types/PointLike', () => {
  it('should match [column?: Column | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('column')
      .toEqualTypeOf<Nilable<Column>>()
  })

  it('should match [line?: Line | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('line')
      .toEqualTypeOf<Nilable<Line>>()
  })

  it('should match [offset?: Offset | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('offset')
      .toEqualTypeOf<Nilable<Offset>>()
  })
})
