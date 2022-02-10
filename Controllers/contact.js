const User = require('../Models/contact')

exports.addContact = async(req, res) => {
    // destructuring  we can do contact.findOne(req.body.email)
    try {
        const AddedContact = new User(req.body)
        await  AddedContact.save()
    
        res.status(200).send({msg: 'Success', AddedContact})
    
    } catch (error) {
        res.status(500).send({msg: 'Error', error})
    }
    
    
    }


  exports.showContact = async (req, res) => {

        try {
            const allContacts = await User.find ()
            res.status (200).send({ message :'this is the list of all contacts' , allContacts })
        } catch (error) {
            res.status(500).send({ message :'we cant read the contact list'})
        }
    }



 exports.deleteContact = async (req, res) => {
        const {ID} = req.params
        try {
            const removedContact = await User.findByIdAndDelete (ID)
          res.status(200).send({ message : 'deleted Contact' , removedContact})
        } catch (error) {
            res.status(500).send({ message :'we cant delete the contact'})
        }
    
    }


exports.updateContact =     async (req, res) => {
        const {ID} = req.params
        try {
            const updatedContact = await User.findByIdAndUpdate (ID , {$set : {...req.body}})
            res.status(200).send({ message :'contact updated successfully' , updatedContact})
        } catch (error) {
            res.status(500).send({ message :'we cant update the contact'})
        }
    }



  exports.findingOneContact =   async (req, res) => {
        const {ID} = req.params
        try {
            const findOnlyOneContact = await User.findById (ID)
            res.status(200).send({ message :'contact found', findOnlyOneContact}) 
        } catch (error) {
            res.status(500).send({ message :'we cant find the contact'}) 
        }
    }