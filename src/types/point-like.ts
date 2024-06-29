/**
 * @file Type Aliases - PointLike
 * @module unist-util-stringify-position/types/PointLike
 */

import type { Column, Line, Offset } from '@flex-development/unist-util-types'

/**
 * One place in a source [*file*][file].
 *
 * [file]: https://github.com/syntax-tree/unist#file
 */
type PointLike = {
  /**
   * Column in a source file (`1`-indexed integer).
   *
   * @see {@linkcode Column}
   */
  column?: Column | null | undefined

  /**
   * Line in a source file (`1`-indexed integer).
   *
   * @see {@linkcode Line}
   */
  line?: Line | null | undefined

  /**
   * Index of character in a source file (`0`-indexed integer).
   *
   * @see {@linkcode Offset}
   */
  offset?: Offset | null | undefined
}

export type { PointLike as default }
