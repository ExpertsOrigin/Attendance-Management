const express = require("express")
const cors = require("cors");
const Connection = require("./connection/Connection")
const router = require("./routers/index-router")
const app = express();
app.use(express.json());
Connection();
app.use(cors());
app.use(router);

app.listen(4000,()=>{
console.log("server running on port 4000");
})