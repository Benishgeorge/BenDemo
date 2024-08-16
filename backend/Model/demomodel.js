const mongoose = require ('mongoose');


const DemoSchema = new mongoose.Schema ({
    title:{
        type: text,
        rquired : true
    },
    time:{
        type: text,
        required : true
    },
})
const demo = mongoose.model('demo',DemoSchema)
module.exports = demo;