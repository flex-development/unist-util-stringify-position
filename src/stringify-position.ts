/**
 * @file stringifyPosition
 * @module unist-util-stringify-position/stringifyPosition
 */

import type {
  Info,
  NodeLike,
  Options,
  PointLike,
  PositionLike,
  Range
} from './types'
import type State from './types/state'
import { point, position, range } from './util'

/**
 * Serialize the positional info of a node, point, position, or range.
 *
 * The serialized info is returned in one the following formats:
 *
 *  - `ls:cs-le:ce, os-oe` (node, position, range)
 *  - `ls:cs-le:ce` (node, position, range)
 *  - `l:c` (point)
 *
 * where `l` stands for line, `c` for column, `o` for offset, `s` for `start`,
 * and `e` for end.
 *
 * An empty string (`''`) is returned if the given info is neither a node,
 * point, position, or range.
 *
 * @see {@linkcode Info}
 * @see {@linkcode Options}
 *
 * @param {(Info | null)?} [info] - Node, point, position, or range
 * @param {(Options | null)?} [options] - Configuration options
 * @param {(boolean | null)?} [options.offsets=false] - Serialize offsets if
 * `info` is a node, position, or range
 * @return {string} Pretty printed positional info
 */
function stringifyPosition(
  info?: Info | null,
  options?: Options | null
): string

/**
 * Serialize the positional info of a node, point, position, or range.
 *
 * The serialized info is returned in one the following formats:
 *
 *  - `ls:cs-le:ce, os-oe` (node, position, range)
 *  - `ls:cs-le:ce` (node, position, range)
 *  - `l:c` (point)
 *
 * where `l` stands for line, `c` for column, `o` for offset, `s` for `start`,
 * and `e` for end.
 *
 * An empty string (`''`) is returned if the given info is neither a node,
 * point, position, or range.
 *
 * @see {@linkcode Options}
 *
 * @param {unknown?} [info] - Node, point, position, or range
 * @param {(Options | null)?} [options] - Configuration options
 * @param {(boolean | null)?} [options.offsets=false] - Serialize offsets if
 * `info` is a node, position, or range
 * @return {string} Pretty printed positional info
 */
function stringifyPosition(
  info?: unknown,
  options?: Options | null
): string

/**
 * Serialize the positional info of a node, point, position, or range.
 *
 * The serialized info is returned in one the following formats:
 *
 *  - `ls:cs-le:ce, os-oe` (node, position, range)
 *  - `ls:cs-le:ce` (node, position, range)
 *  - `l:c` (point)
 *
 * where `l` stands for line, `c` for column, `o` for offset, `s` for `start`,
 * and `e` for end.
 *
 * An empty string (`''`) is returned if the given info is neither node, point,
 * position, nor range.
 *
 * @see {@linkcode Info}
 * @see {@linkcode Options}
 *
 * @param {unknown?} [info] - Node, point, position, or range
 * @param {(Options | null)?} [options] - Configuration options
 * @param {(boolean | null)?} [options.offsets=false] - Serialize offsets if
 * `info` is a node, position, or range
 * @return {string} Pretty printed positional info
 */
function stringifyPosition(
  info?: unknown,
  options?: Options | null
): string {
  /**
   * Serialized positional info.
   *
   * @var {string} serialized
   */
  let serialized: string = ''

  if (typeof info === 'object' && info) {
    /**
     * Info passed around.
     *
     * @const {State} state
     */
    const state: State = { offsets: options?.offsets ?? false }

    // range
    if (Array.isArray(info)) serialized = range(<Range>info, state)

    // node
    if ('position' in info || 'type' in info) {
      serialized = position((<NodeLike>info).position, state)
    }

    // position
    if ('end' in info || 'start' in info) {
      serialized = position(<PositionLike>info, state)
    }

    // point
    if ('column' in info || 'line' in info) serialized = point(<PointLike>info)
  }

  return serialized
}

export default stringifyPosition
