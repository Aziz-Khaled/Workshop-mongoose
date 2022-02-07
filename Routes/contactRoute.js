const express = require('express');
const User = require('../Models/contact')
const route = express.Router ()


// POST method 
// req.body

route.post('/', async(req, res) => {
  // destructuring  we can do contact.findOne(req.body.email)
  try {
      const AddedContact = new User(req.body)
      await  AddedContact.save()
  
      res.status(200).send({msg: 'Success', AddedContact})
  
  } catch (error) {
      res.status(500).send({msg: 'Error', error})
  }
  
  
  })


  module.exports = route 

{/* 
route.post('/', async(req, res) => {
  const {name,email,age}=req.body  // destructuring  we can do contact.findOne(req.body.email)
try {
      const found =  await Contact.findOne({email})
     if (found) { return res.status(400).send({ message: "user already exist"})}
    const AddedContact = new Contact(req.body)
    await  AddedContact.save()

    res.status(200).send({msg: 'Success', AddedContact})

} catch (error) {
    res.status(500).send({msg: 'Error', error})
}


})*/}

{/*route.post = ('/' , async (req, res) => {
    try {
        const addedContact = new User (req.body)
       await  addedContact.save () 
        res.status(200).send ({ message :'contact added' , addedContact })
    } catch (error) {
        res.status(500).send({ message : 'cannot save contact'})
        
    }
})


*/}


// Get method
// get don't need a body

route.get ('/' , async (req, res) => {

    try {
        const allContacts = await User.find ()
        res.status (200).send({ message :'this is the list of all contacts' , allContacts })
    } catch (error) {
        res.status(500).send({ message :'we cant read the contact list'})
    }
})

// DELETE method  
// req.params
route.delete ('/:ID' , async (req, res) => {
    const {ID} = req.params
    try {
        const removedContact = await User.findByIdAndDelete (ID)
      res.status(200).send({ message : 'deleted Contact' , removedContact})
    } catch (error) {
        res.status(500).send({ message :'we cant delete the contact'})
    }

})


//Update method
// 2 params required : req.params ; req.body

route.put ('/:id' , async (req, res) => {
    const {ID} = req.params
    try {
        const updatedContact = await User.findByIdAndUpdate (ID , {$set : {...req.body}})
        res.status(200).send({ message :'contact updated successfully' , updatedContact})
    } catch (error) {
        res.status(500).send({ message :'we cant update the contact'})
    }
})