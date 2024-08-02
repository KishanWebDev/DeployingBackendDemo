require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('kishandotcom')

})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at kishan webdev</h1>')
})

app.get('/kishanWebDev', (req, res) => {
  res.send("Hii Kishan \n  Welcome in the World of <B>Krypton</B>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
