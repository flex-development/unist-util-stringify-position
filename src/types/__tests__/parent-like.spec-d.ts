/**
 * @file Type Tests - ParentLike
 * @module unist-util-stringify-position/types/tests/unit-d/ParentLike
 */

import type { Literal, Node, Parent } from 'unist'
import type NodeLike from '../node-like'
import type TestSubject from '../parent-like'

describe('unit-d:types/ParentLike', () => {
  it('should match NodeLike', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<NodeLike>()
  })

  it('should match [children: (Node | Literal | Parent)[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<(Node | Literal | Parent)[]>()
  })
})
