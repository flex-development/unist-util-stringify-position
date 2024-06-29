/**
 * @file Type Aliases - Range
 * @module unist-util-stringify-position/types/Range
 */

import type { Point } from 'unist'
import type PointLike from './point-like'

/**
 * List, where the first value is the place of the first character in a source
 * region, and the last is the place of the last character in the region.
 *
 * @see {@linkcode Point}
 * @see {@linkcode PointLike}
 */
type Range = [
  start?: Point | PointLike | null | undefined,
  end?: Point | PointLike | null | undefined
]

export type { Range as default }
