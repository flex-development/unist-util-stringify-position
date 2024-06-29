/**
 * @file Type Aliases - Options
 * @module unist-util-stringify-position/types/Options
 */

/**
 * Configuration options.
 */
type Options = {
  /**
   * Serialize offsets if positional info is a node, position, or range.
   *
   * @default false
   */
  offsets?: boolean | null | undefined
}

export type { Options as default }
