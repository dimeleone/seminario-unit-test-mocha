const expect = require("chai").expect
const Stack = require('../src/Stack')

describe('Stack Test', function () {
    describe('#push()', function () {
        it('should push 3 items onto the stack', function () {
            const stack = new Stack()

            stack.push(1)
            stack.push(2)
            stack.push(3)

            expect(stack.size()).to.equal(3)
        })
    })

    describe('#pop()', function () {
        it('should pop an item off the stack and verify that it is the same as the last item pushed', function () {
            const stack = new Stack()

            stack.push(1)
            stack.push(2)
            stack.push(3)

            const item = stack.pop()

            expect(item).to.equal(3)
            expect(stack.size()).to.equal(2)
        })
    })

    describe('#size()', function () {
        it('should return the size of the stack', function () {
            const stack = new Stack()

            stack.push(1)
            stack.push(2)
            stack.push(3)

            expect(stack.size()).to.equal(3)
        })
    })
})