const { events } = require('../Model/demomodel');
const demo = require ('./Model/demomodel')

exports.getevent = async (req,res) => {

    try {

        const event = await Event.find();
        
    } catch (error) {
        
    }
       
}

exports.createEvent = async (req,res) => {

    const {title,time} =  req.body;

    try {
        req.status(200).json({
            success : true,
            data : events

            await newEvent.save();
  })
        
    } catch (error) {

        
    }
    
}