const express = require ('express')

const event = require ('./Controller/democontroller')

const router = express.Router();

router.get('./event',getevent);
router.post('./events',createEvent);

module.exports = router

