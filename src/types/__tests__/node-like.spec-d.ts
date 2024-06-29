/**
 * @file Type Tests - NodeLike
 * @module unist-util-stringify-position/types/tests/unit-d/NodeLike
 */

import type { Nilable } from '@flex-development/tutils'
import type { Type } from '@flex-development/unist-util-types'
import type { Data } from 'unist'
import type TestSubject from '../node-like'
import type PositionLike from '../position-like'

describe('unit-d:types/NodeLike', () => {
  it('should match [data?: Data | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Nilable<Data>>()
  })

  it('should match [position?: PositionLike | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('position')
      .toEqualTypeOf<Nilable<PositionLike>>()
  })

  it('should match [type: Type]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<Type>()
  })
})
