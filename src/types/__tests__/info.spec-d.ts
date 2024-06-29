/**
 * @file Type Tests - Info
 * @module unist-util-stringify-position/types/tests/unit-d/Info
 */

import type { Literal, Node, Parent, Point, Position } from 'unist'
import type TestSubject from '../info'
import type LiteralLike from '../literal-like'
import type NodeLike from '../node-like'
import type ParentLike from '../parent-like'
import type PointLike from '../point-like'
import type PositionLike from '../position-like'
import type Range from '../range'

describe('unit-d:types/Info', () => {
  it('should extract Literal', () => {
    expectTypeOf<TestSubject>().extract<Literal>().not.toBeNever()
  })

  it('should extract LiteralLike', () => {
    expectTypeOf<TestSubject>().extract<LiteralLike>().not.toBeNever()
  })

  it('should extract Node', () => {
    expectTypeOf<TestSubject>().extract<Node>().not.toBeNever()
  })

  it('should extract NodeLike', () => {
    expectTypeOf<TestSubject>().extract<NodeLike>().not.toBeNever()
  })

  it('should extract Parent', () => {
    expectTypeOf<TestSubject>().extract<Parent>().not.toBeNever()
  })

  it('should extract ParentLike', () => {
    expectTypeOf<TestSubject>().extract<ParentLike>().not.toBeNever()
  })

  it('should extract Point', () => {
    expectTypeOf<TestSubject>().extract<Point>().not.toBeNever()
  })

  it('should extract PointLike', () => {
    expectTypeOf<TestSubject>().extract<PointLike>().not.toBeNever()
  })

  it('should extract Position', () => {
    expectTypeOf<TestSubject>().extract<Position>().not.toBeNever()
  })

  it('should extract PositionLike', () => {
    expectTypeOf<TestSubject>().extract<PositionLike>().not.toBeNever()
  })

  it('should extract Range', () => {
    expectTypeOf<TestSubject>().extract<Range>().not.toBeNever()
  })
})
