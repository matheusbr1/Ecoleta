import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    console.log('Listagem de usuários')

    response.json([
        'Fernando',
        'Pedro'
    ])
})

app.listen(3333, () => {
    console.log('Server started')
})