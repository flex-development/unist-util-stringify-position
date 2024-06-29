/**
 * @file Type Aliases - State
 * @module unist-util-stringify-position/types/State
 */

/**
 * Info passed around.
 *
 * @internal
 */
type State = {
  /**
   * Serialize offsets if positional info is a node, position, or range.
   */
  offsets: boolean
}

export type { State as default }
