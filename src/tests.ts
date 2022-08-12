import test, {describe, it} from "node:test"
import assert from "node:assert"
import {YiJing} from "."

describe('Create a Hexagram from Fuxi number', () => {
    const h = new YiJing.Hexagram({fuxi: 5});
    const expectedFuxi = 5
    const expectedKingwen = 35
    const expectedLines = [ 1, 1, 1, 0, 1, 0 ]
    const expectedBinarySequence = [ 0, 0, 0, 1, 0, 1 ]

    it ("should return the correct fuxi number", () => {
        const fuxi = h.getFuxi()
        assert.strictEqual(fuxi, expectedFuxi);
    })

    it ("should return the correct kingwen number", () => {
        const kingwen = h.getKingwen()
        assert.strictEqual(kingwen, expectedKingwen);
    })

    it ("should return the correct line sequence", () => {
        const lines = h.getLines()
        assert.deepEqual(lines, expectedLines);
    })

    it ("should return the correct binary sequence", () => {
        const binarySequence = h.getBinarySequence()
        assert.deepEqual(binarySequence, expectedBinarySequence);
    }) 
})