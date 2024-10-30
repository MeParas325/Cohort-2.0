const express = require("express")
const fs = require('fs/promises')
const bodyParser = require('body-parser')
const app = express()

const PORT = 3000

let files = []

fs.readdir("./").then(data => {
    files = data.filter(file => file.endsWith(".txt"))
}) 

app.use(bodyParser({}))

app.get("/", (req, res) => {
    console.log(req.body)
    res.send("<h1>Hello world</>")
})

app.get("/files", (req, res) => {
    res.send(files)
})

app.get("/files/:filename", (req, res) => {
    const fileName = req.params.filename
    if(fileName) {
        fs.readFile(fileName, 'utf-8').then((data) => {
            res.send(data)
        }).catch(error => {
            res.send("Your content is not available")
        })
    } 
})


app.listen(PORT, () => {
    console.log("App is listening")
})


