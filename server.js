const express = require("express");
const authentication = require("./route/authentication")
const app = express();
let port = 2000;
app.use(express.json());
app.use('/auth', authentication)

app.get('/', (req, res) => {
    res.send("Its working");
})

app.listen(port, () => {
    console.log(`Connected to port ${port}✅`);
})