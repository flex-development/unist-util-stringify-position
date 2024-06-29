/**
 * @file Type Aliases - PositionLike
 * @module unist-util-stringify-position/types/PositionLike
 */

import type PointLike from './point-like'

/**
 * Range between two points.
 */
type PositionLike = {
  /**
   * Place of last character in source region.
   *
   * @see {@linkcode PointLike}
   */
  end?: PointLike | null | undefined

  /**
   * Place of first character in source region.
   *
   * @see {@linkcode PointLike}
   */
  start?: PointLike | null | undefined
}

export type { PositionLike as default }
