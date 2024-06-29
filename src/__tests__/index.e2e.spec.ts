/**
 * @file E2E Tests - api
 * @module unist-util-stringify-position/tests/e2e/api
 */

import * as testSubject from '../index'

describe('e2e:unist-util-stringify-position', () => {
  it('should expose public api', () => {
    expect(testSubject).to.have.keys(['stringifyPosition'])
  })
})
