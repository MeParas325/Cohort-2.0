const express = require('express')

const app = express()

app.use(express.json())

app.get("/health-checkup", (req, res) => {

    const kidneys = req.body.kidneys
    const kidneyLength = kidneys.length

    res.send(`You have ${kidneyLength} kidneys`)
    
})

// global catches
app.use(function(err, req, res, next) {
    res.json({
        'msg': "Something went wrong with our server"
    })
})

app.listen(3000)