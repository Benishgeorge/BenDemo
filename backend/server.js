const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors')

const port = 5002;

const app = express();
app.use('./api',demoroutes);

const MONGO_URI ="mongodb+srv://benishgeorge4:ben12345@cluster0.e8nczjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
 mongoose.connect(MONGO_URI, {});

 mongoose.connection.on('connected', () =>{
    console.log("MongoDB successfully  connected")

})

app.listen(port ,() => {
    console.log("server starts on port" + " " + port);
})