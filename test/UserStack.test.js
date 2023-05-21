import { expect } from 'chai'
import UserStack from '../public/js/UserStack.js'
import User from '../public/js/User.js'

describe('User Stack Test', function () {
    describe('#push()', function () {
        it('should push 2 users onto the user stack', function () {
            const stack = new UserStack() // criando uma instância da classe UserStack

            // adicionando 3 usuários na pilha
            stack.push(new User('John', 'john@mail.com'))
            stack.push(new User('Jane', 'jane@mail.com'))

            expect(stack.size()).to.equal(2) // verificando se a pilha possui 3 usuários
        })
    })

    describe('#pop()', function () {
        it('should pop an user off the user stack and verify that it is the same as the last user pushed', function () {
            const stack = new UserStack() // criando uma instância da classe UserStack

            // adicionando 3 usuários na pilha
            stack.push(new User('John', 'john@mail.com'))
            stack.push(new User('Jane', 'jane@mail.com'))
            stack.push(new User('Bob', 'bob@mail.com'))

            const user = stack.pop() // removendo o último usuário da pilha

            expect(user.name).to.equal('Bob') // verificando se o usuário removido é o mesmo que foi adicionado por último
            expect(stack.size()).to.equal(2) // verificando se a pilha possui 2 usuários
        })
    })

    describe('#size()', function () {
        it('should return the size of the user stack', function () {
            const stack = new UserStack() // criando uma instância da classe UserStack

            // adicionando 3 usuários na pilha
            stack.push(new User('John', 'john@mail.com'))
            stack.push(new User('Jane', 'jane@mail.com'))
            stack.push(new User('Bob', 'bob@mail.com'))

            expect(stack.size()).to.equal(3) // verificando se a pilha possui 3 usuários
        })
    })
})