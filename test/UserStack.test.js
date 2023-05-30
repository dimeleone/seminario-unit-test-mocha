import { expect } from 'chai'
import UserStack from '../public/js/UserStack.js'
import User from '../public/js/User.js'

describe('User Stack Test', function () {  //adiciona 2 usuários na pilha e testa se realmente a pilha possui 2 usuários
    describe('#push()', function () {
        it('deverá colocar 2 usuários na pilha de usuários', function () {
            const stack = new UserStack() // criando uma instância da classe UserStack

            // adicionando 2 usuários na pilha
            stack.push(new User('Dimitri', 'dimeleone@gmail.com'))
            stack.push(new User('Chris', 'chrisdodiablo@blizzard.com'))

            expect(stack.size()).to.equal(2) // verificando se a pilha possui realmente 2 usuários
        })
    })

    describe('#pop()', function () {
        it('deverá remover um usuário da pilha de usuários e verificar se é o mesmo que o último usuário enviado', function () {
            const stack = new UserStack() // criando uma instância da classe UserStack

            // adicionando 3 usuários na pilha
            stack.push(new User('Guilherme', 'guilherme@inatel.br'))
            stack.push(new User('Renzo', 'renzo@gmail.com'))
            stack.push(new User('Bob', 'bob@mail.com'))

            const user = stack.pop() // removendo o último usuário da pilha

            expect(user.name).to.equal('Bob') // verificando se o usuário removido é o mesmo que foi adicionado por último
            expect(stack.size()).to.equal(2) // verificando se a pilha possui 2 usuários
        })
    })

    describe('#size()', function () { //ele adiciona 3 usuários e verifica se a pilha possui realmente 3 usuários
                                        //e testa a pilha possui três usuários (o foco é se a função SIZE está funcionando)
        it('deverá retornar o tamanho da pilha do usuário', function () {                                                                   
            const stack = new UserStack() // criando uma instância da classe UserStack

            // adicionando 3 usuários na pilha
            stack.push(new User('Marcelo', 'marcelinho@inatel.br'))
            stack.push(new User('Saldanha', 'saldanha@inatel.br'))
            stack.push(new User('Fallen', 'fallen@fallen.com.br'))

            expect(stack.size()).to.equal(3) // verificando se a pilha possui 3 usuários
        })
    })
})