const express = require('express')

const app = express()

function userMiddleware(req, res, next) {
    const {username, password} = req.headers
    if(username !== "Paras" && password !== "pass") {
        res.status(400).json({
            "msg": "Username or password is incorrect"
        })
    } else {
        next()
    }

}

function kidneyMiddleware(req, res, next) {

    const kidneyId = req.query.kidneyId

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            "msg": "Something went wrong"
        })
    } else {
        next()
    }

}

app.use(express.json())

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {

    const kidneyId = req.query.kidneyId

    const username = req.headers.username
    const password = req.headers.password

    res.json({
        msg: "Your kidney is fine"
    })

    
})

app.listen(3000)