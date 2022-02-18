const express = require('express');
const route = express.Router ()
const {addContact , showContact , deleteContact , updateContact , findingOneContact } = require ('../Controllers/contact')

// POST method 
// req.body

route.post('/', addContact )

// Get method
// get don't need a body

route.get ('/' , showContact)

// DELETE method  
// req.params

route.delete ('/:ID' , deleteContact)
//Update method
// 2 params required : req.params ; req.body

route.put ('/:id' , updateContact)

route.get ('/:ID' ,findingOneContact)




module.exports = route