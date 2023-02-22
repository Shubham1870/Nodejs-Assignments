const express = require('express')
const app = express()
const userarray = require("./InitialData")
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
let newid = userarray.length + 1
app.get("/api/students/", (req, res) => {
    try {
        res.json({
            status: "success",
            userarray
        })
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
})
app.get("/api/students/:id", (req, res) => {
    try {
        const idx = userarray.findIndex((obj => obj.id == req.params.id))
        if (id == -1) {
            return res.status(400).json({
                status: "failure",
                message: "no id found with this"
            })
        }
        res.json({
            status: "success",
            data: userarray[idx]
        })
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
})
app.post("/api/students", (req, res) => {
    try {
        if (!req.body.name || !req.body.currentClass || !req.body.division) {
            res.status(400).json({
                status: "failure",
                message: "missing details"
            })
        }
        userarray.push({
            id: newid,
            name: req.body.name,
            currentClass: req.body.currentClass,
            division: req.body.division

        })
        newid++
        res.json({
            status: "success",
            id: newid
        })
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
})

app.put("/api/students/:id", (req, res) => {
    try {
        const idx = userarray.findIndex((obj => obj.id == req.params.id))
        if (idx == -1) {
            return res.status(400).json({
                status: "failure",
                message: "no id found with this"
            })
        }
        else{
        if (req.body.name)
            userarray[idx].name = req.body.name
        if (req.body.currentClass)
            userarray[idx].currentClass = req.body.currentClass
        if (req.body.division)
            userarray[idx].division = req.body.division
        res.json({
            status: "success",
            data: userarray[idx]
        })
    }}
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
})

app.delete("/api/students/:id", (req, res) => {
    try {
        const idx = userarray.findIndex((obj => obj.id == req.params.id))
        if (idx == -1) {
            return res.status(400).json({
                status: "failure",
                message: "no id found with this"
            })
        }

        userarray.splice(idx, 1)

        res.json({
            status: "success",
            data: userarray[idx]
        })
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
            
        })
    }
})
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   