/**
 * @file Functional Tests - stringifyPosition
 * @module unist-util-stringify-position/tests/functional/stringifyPosition
 */

import type {
  NodeLike,
  Options,
  PointLike,
  Range
} from '#src/types'
import { u } from '@flex-development/unist-util-builder'
import testSubject from '../stringify-position'

describe('functional:stringifyPosition', () => {
  describe('node', () => {
    it.each<[string, NodeLike, (Options | null | undefined)?]>([
      ['no position', u('text')],
      ['invalid position #1', u('text', { position: 3 })],
      [
        'invalid position #2',
        u('text', { position: { end: false, start: {} } })
      ],
      [
        'invalid position #3',
        u('text', {
          position: {
            end: { column: null, line: undefined },
            start: { column: null, line: undefined }
          }
        })
      ],
      [
        'valid',
        u('text', {
          position: {
            end: { column: 55, line: 63 },
            start: { column: 8, line: 63 }
          },
          value: 'increase of index of x used to calculate z by 1'
        })
      ],
      [
        'valid, offsets',
        u('break', {
          position: {
            end: { column: 1, line: 115, offset: 2607 },
            start: { column: 76, line: 114, offset: 2606 }
          }
        }),
        {
          offsets: true
        }
      ]
    ])('should serialize node (%s)', (_, info, options) => {
      expect(testSubject(info, options)).toMatchSnapshot()
    })
  })

  describe('point', () => {
    it.each<[string, PointLike, (Options | null | undefined)?]>([
      ['column only', { column: 3 }],
      ['line only', { line: 13 }],
      ['no indices', { column: null, line: undefined }],
      ['valid', { column: 3, line: 2 }]
    ])('should serialize point (%s)', (_, info, options) => {
      expect(testSubject(info, options)).toMatchSnapshot()
    })
  })

  describe('position', () => {
    it.each<[string, unknown, (Options | null | undefined)?]>([
      ['no points', { end: null, start: undefined }],
      ['invalid points #1', { end: 13, start: 3 }],
      ['invalid points #2', { end: false, start: {} }],
      [
        'invalid points #3',
        {
          end: { column: null, line: undefined },
          start: { column: null, line: undefined }
        }
      ],
      [
        'valid',
        {
          end: { column: 42, line: 128 },
          start: { column: 6, line: 111 }
        }
      ],
      [
        'valid, offsets',
        {
          end: { column: 4, line: 4, offset: 73 },
          start: { column: 1, line: 1, offset: 0 }
        },
        {
          offsets: true
        }
      ]
    ])('should serialize position (%s)', (_, info, options) => {
      expect(testSubject(info, options)).toMatchSnapshot()
    })
  })

  describe('range', () => {
    it.each<[string, Range, (Options | null | undefined)?]>([
      ['no points', [null, undefined]],
      ['valid', [{ column: 6, line: 42 }, { column: 3, line: 38 }]],
      [
        'valid, offsets',
        [
          { column: 4, line: 13, offset: 347 },
          { column: 51, line: 13, offset: 521 }
        ],
        {
          offsets: true
        }
      ]
    ])('should serialize range (%s)', (_, info, options) => {
      expect(testSubject(info, options)).toMatchSnapshot()
    })
  })
})
