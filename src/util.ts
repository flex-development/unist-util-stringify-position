/**
 * @file util
 * @module unist-util-stringify-position/util
 */

import type { PointLike, PositionLike, Range } from './types'
import type State from './types/state'

/**
 * Standardize a column, line, or offset.
 *
 * > 👉 If `offset` is `true`, `value` is expected to already be a number.
 *
 * @internal
 *
 * @param {number | null | undefined} value - Column, line, or offset
 * @param {boolean | null | undefined} [offset] - `value` is offset?
 * @return {number} Column, line, or offset
 */
function index(
  value: number | null | undefined,
  offset: boolean | null | undefined
): number {
  return offset ? value! : value && typeof value === 'number' ? value : 1
}

/**
 * Serialize a point.
 *
 * @internal
 *
 * @param {PointLike | null | undefined} point - Point to serialize
 * @return {string} Pretty printed `point`
 */
function point(point: PointLike | null | undefined): string {
  return index(point?.line, false) + ':' + index(point?.column, false)
}

/**
 * Serialize a position.
 *
 * @internal
 *
 * @param {PositionLike | null | undefined} pos - Position to serialize
 * @param {State} state - Info passed around
 * @return {string} Pretty printed `position`
 */
function position(pos: PositionLike | null | undefined, state: State): string {
  /**
   * Serialized position.
   *
   * @var {string} serialized
   */
  let serialized: string = point(pos?.start) + '-' + point(pos?.end)

  if (
    state.offsets &&
    typeof pos?.end?.offset === 'number' &&
    typeof pos.start?.offset === 'number'
  ) {
    serialized += ', ' + index(pos.start.offset, state.offsets) + '-'
    serialized += index(pos.end.offset, state.offsets)
  }

  return serialized
}

/**
 * Serialize a range.
 *
 * @internal
 *
 * @param {Range | null | undefined} range - Range to serialize
 * @param {State} state - Info passed around
 * @return {string} Pretty printed `range`
 */
function range(range: Range | null | undefined, state: State): string {
  return position({ end: range?.[1], start: range?.[0] }, state)
}

export { point, position, range }
