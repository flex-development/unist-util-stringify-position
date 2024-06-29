/**
 * @file Type Aliases - LiteralLike
 * @module unist-util-stringify-position/types/LiteralLike
 */

import type { Type } from '@flex-development/unist-util-types'
import type { Data } from 'unist'
import type PositionLike from './position-like'

/**
 * Abstract unist node that contains the smallest possible value.
 */
type LiteralLike = {
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

  /**
   * Node value.
   */
  value: unknown
}

export type { LiteralLike as default }
