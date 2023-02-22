const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("hello world")
})
function checkresult1(num1, num2) {
    if (num1 == "" || num2 == "") {
        return false
    }
    return true
}
function checkresult2(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return false
    }
    return true
}

app.post("/add", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if (!checkresult1(num1, num2)) {
        return res.status(400).json({
            status: "failure",
            message: "proper input not given"
        })
    }
    if (!checkresult2(num1, num2)) {
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    }
    let result = Number(num1) + Number(num2)

    if (Number(num1) < -1000000 || Number(num2) < -1000000) {
        res.status(400).json({
            status: "error",
            message: "underflow"
        })
    }
    if (Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json({
            status: "error",
            message: "overflow"
        })
    }

    res.status(200).json({
        status: "success",
        message: "the sum of given two numbers",
        sum: result

    })


})

app.post("/sub", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2

    if (!checkresult1(num1, num2)) {
        return res.status(400).json({
            status: "failure",
            message: "proper input not given"
        })
    }
    if (!checkresult2(num1, num2)) {
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    }
    let result = Number(num1) - Number(num2)
    if (Number(num1 < 1000000) || Number(num2 < 1000000) || result < 1000000) {
        res.status(400).json({
            status: "error",
            message: "underflow"
        })
    }
    if (Number(num1 > 1000000) || Number(num2 > 1000000) || result > 1000000) {
        res.status(400).json({
            status: "error",
            message: "overflow"
        })
    }

    res.status(200).json({
        status: "success",
        message: "the difference of given two numbers",
        difference: result

    })

})
app.post(" /multiply", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2

    if (!checkresult1(num1, num2)) {
        return res.status(400).json({
            status: "failure",
            message: "proper input not given"
        })
    }
    if (!checkresult2(num1, num2)) {
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    }
    let result = Number(num1) * Number(num2)
    if (Number(num1 < 1000000) || Number(num2 < 1000000) || result < 1000000) {
        res.status(400).json({
            status: "error",
            message: "underflow"
        })
    }
    if (Number(num1 > 1000000) || Number(num2 > 1000000) || result > 1000000) {
        res.status(400).json({
            status: "error",
            message: "overflow"
        })
    }

    res.status(200).json({
        status: "success",
        message: "The product of given numbers",
        result: result

    })

})
app.post("/divide", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2

    if (!checkresult1(num1, num2)) {
        return res.status(400).json({
            status: "failure",
            message: "proper input not given"
        })
    }
    if (!checkresult2(num1, num2)) {
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    }
    if (Number(num2) == 0) {
        res.status(400).json({
            status: "error",
            message: "Cannot divide by zero"
        })
    }
    let result = Number(num1) / Number(num2)
    if (Number(num1 < 1000000) || Number(num2 < 1000000) || result < 1000000) {
        res.status(400).json({
            status: "error",
            message: "underflow"
        })
    }
    if (Number(num1 > 1000000) || Number(num2 > 1000000) || result > 1000000) {
        res.status(400).json({
            status: "error",
            message: "overflow"
        })
    }

    res.status(200).json({
        status: "success",
        message: "The division of given numbers",
        result: result

    })

})

app.get("*", (req, res) => {
    res.status(400).json({
        status: "failed",
        message: "API NOT FOUND"
    })
})
app.listen(9000, () => console.log("up"))