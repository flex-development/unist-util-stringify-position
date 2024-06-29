/**
 * @file Unit Tests - stringifyPosition
 * @module unist-util-stringify-position/tests/unit/stringifyPosition
 */

import testSubject from '../stringify-position'

describe('unit:stringifyPosition', () => {
  let result: string

  beforeAll(() => {
    result = ''
  })

  describe('nil', () => {
    it.each<null | undefined>([
      null,
      undefined
    ])('should return empty string if `info` is nil (sample %#)', info => {
      expect(testSubject(info)).to.eq(result)
    })
  })

  describe('unknown', () => {
    it.each<unknown>([
      {},
      faker.datatype.boolean(),
      faker.number.int(),
      faker.git.commitSha()
    ])('should return empty string if `info` is unknown (sample %#)', info => {
      expect(testSubject(info)).to.eq(result)
    })
  })
})
