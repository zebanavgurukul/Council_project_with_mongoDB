const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv/config')

// Database
mongoose.connect(process.env.DB_connect,{useNewUrlParser : true})
    .then(() => {
        console.log("Conncted to database.........")
    }).catch((err) => {
        console.log(err)
    });

// Middieware
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// controllers
const UserControl = require("./controllers/CouncilApp");

// Routes
app.post("/api/create", UserControl.create);
// app.put("/api/user/update/:_id", UserControl.update);
// app.get("/api/user/get", UserControl.get);
// app.get("/api/user/getID/:_id", UserControl.getID)
// app.delete("/api/user/delete/:_id", UserControl.delete);

// start server
const PORT = process.env.PORT;
app.listen(PORT,()=>{
 console.log(`Server Running on port ${PORT}`);
})