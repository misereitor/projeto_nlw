import express from "express"

const app = express()

app.get('/', (req, res) => {
    return res.send('Olá Mundo!')
})

app.post('/', (req, res) => {
    return res.json({ message: "Usuário cadastrado com sucesso!" })
})

app.listen(8080, () => console.log('Server is running on port 8080'))