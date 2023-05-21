import UserStack from './UserStack.js'
import User from './User.js'

const users = new UserStack() // Instancia a classe UserStack

// Adiciona um usuário na pilha
function saveUser(event) {
    event.preventDefault() // Previne o comportamento padrão do botão

    const name = document.getElementById('name').value // Pega o valor do campo nome
    const email = document.getElementById('email').value // Pega o valor do campo email

    const user = new User(name, email) // Instancia a classe User

    users.push(user) // Adiciona o usuário na pilha

    showUsers() // Mostra os usuários na tabela
}

// Remove um usuário da pilha
function removeUser(event) {
    event.preventDefault() // Previne o comportamento padrão do botão

    users.pop() // Remove o usuário da pilha

    showUsers() // Mostra os usuários na tabela
}

// Mostra os usuários na tabela
function showUsers() {
    const usersTableBody = document.getElementById('users') // Pega a tabela de usuários

    usersTableBody.innerHTML = '' // Limpa a tabela

    // Para cada usuário na pilha, cria uma linha na tabela
    users.stack.forEach(user => {
        const userRow = document.createElement('tr') // Cria uma linha na tabela

        // Cria a coluna id e adiciona o id do usuário
        const userId = document.createElement('td') 
        userId.innerText = user.id

        // Cria a coluna nome e adiciona o nome do usuário
        const userName = document.createElement('td')
        userName.innerText = user.name

        // Cria a coluna email e adiciona o email do usuário
        const userEmail = document.createElement('td')
        userEmail.innerText = user.email

        // Adiciona as colunas na linha
        userRow.appendChild(userId)
        userRow.appendChild(userName)
        userRow.appendChild(userEmail)

        // Adiciona a linha na tabela
        usersTableBody.appendChild(userRow)
    })
}

// Adiciona o evento de click no botão de adicionar usuário
const addButton = document.getElementById("btn-add")
addButton.addEventListener("click", saveUser)

// Adiciona o evento de click no botão de remover usuário
const removeButton = document.getElementById("btn-remove")
removeButton.addEventListener("click", removeUser);
