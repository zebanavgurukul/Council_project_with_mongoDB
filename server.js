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
const councilControl = require("./controllers/CouncilApp");

// Routes
app.post("/api/council/create", councilControl.create);
app.put("/api/council/update/:_id", councilControl.update);
app.get("/api/council/search/:STUDENT_NAME", councilControl.getsearch);
app.get("/api/council/getID/:_id", councilControl.getID)
app.delete("/api/council/delete/:_id", councilControl.delete);

// start server
const PORT = process.env.PORT;
app.listen(PORT,()=>{
 console.log(`Server Running on port ${PORT}`);
})