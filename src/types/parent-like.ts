/**
 * @file Type Aliases - ParentLike
 * @module unist-util-stringify-position/types/ParentLike
 */

import type { Type } from '@flex-development/unist-util-types'
import type { Data, Literal, Node, Parent } from 'unist'
import type PositionLike from './position-like'

/**
 * Abstract unist node that contains other nodes ([*children*][children]).
 *
 * [children]: https://github.com/syntax-tree/unist#child
 */
type ParentLike = {
  /**
   * List of children.
   *
   * @see {@linkcode Node}
   * @see {@linkcode Literal}
   * @see {@linkcode Parent}
   */
  children: (Node | Literal | Parent)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode Data}
   */
  data?: Data | null | undefined

  /**
   * Position of a node in a source document.
   *
   * Nodes that are generated (not in the original source document) must not
   * have a position.
   *
   * @see {@linkcode PositionLike}
   */
  position?: PositionLike | null | undefined

  /**
   * Node type.
   *
   * @see {@linkcode Type}
   */
  type: Type
}

export type { ParentLike as default }
