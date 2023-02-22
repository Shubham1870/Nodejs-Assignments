const express = require("express")
const app = express()


app.get("/welcome", (req, res) => {
    res.status(200).send("Welcome to Dominos!")
})
app.get("/contact", (req, res) => {
  res.status(200).json({
    phone: '18602100000',   email: 'guestcaredominos@jublfood.com'
  })
})
app.listen(8081, () => console.log("up"))