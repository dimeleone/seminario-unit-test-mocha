const Stack = require('./Stack')

const stack = new Stack()

stack.push(1)
stack.push(2)

console.log(stack.pop())
console.log(stack.size())