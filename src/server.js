import express from 'express'

const app = express() // criando uma instância do express

app.use(express.static('public')) // definindo o diretório de arquivos estáticos

// definindo a rota raiz
app.listen(8080, () => {
    console.log('Server started on port 8080');
})