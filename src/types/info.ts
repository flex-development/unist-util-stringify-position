/**
 * @file Type Aliases - Info
 * @module unist-util-stringify-position/types/Info
 */

import type { Literal, Node, Parent, Point, Position } from 'unist'
import type LiteralLike from './literal-like'
import type NodeLike from './node-like'
import type ParentLike from './parent-like'
import type PointLike from './point-like'
import type PositionLike from './position-like'
import type Range from './range'

/**
 * Union of positional info objects.
 *
 * @see {@linkcode LiteralLike}
 * @see {@linkcode Literal}
 * @see {@linkcode NodeLike}
 * @see {@linkcode Node}
 * @see {@linkcode ParentLike}
 * @see {@linkcode Parent}
 * @see {@linkcode PointLike}
 * @see {@linkcode Point}
 * @see {@linkcode PositionLike}
 * @see {@linkcode Position}
 * @see {@linkcode Range}
 */
type Info =
  | Literal
  | LiteralLike
  | Node
  | NodeLike
  | Parent
  | ParentLike
  | Point
  | PointLike
  | Position
  | PositionLike
  | Range

export type { Info as default }
