const mongoose = require("mongoose");

const Contact = require("../models/contacts");

exports.getContacts = (req, res, next) => {
  Contact.find()
    .then(contacts => {
        res.status(200).json({
          contacts: contacts
        });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.getContactById = (req, res, next) => {
    const conId = req.params.conId;
    Contact.findById(conId)
      .then(contact => {
          res.status(200).json({
            contact: contact
          });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
    });
};

exports.createContact = (req, res, next) => {
    const contact = new Contact({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        position: req.body.position,
        imgUrl: req.body.imgUrl
    });
    contact
    .save()
    .then(result => {
        res.status(201).json({
            message: 'Contact successfully added',
            createdContact: {
                id: result.id,
                name: result.name,
                email: result.email,
                position: result.position,
                imgUrl: result.imgUrl
            }
        })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};


exports.editContact = (req, res, next) => {
    const conId = req.params.conId;

    Contact
    .findById(conId)
    .then(contact => {
        contact.name = req.body.name;
        contact.email = req.body.email;
        contact.position = req.body.position;
        contact.imgUrl = req.body.imgUrl;
        return contact.save();
    })
    .then(result => {
        res.status(200).json({
            message: 'Contact successfully updated'
        })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};


exports.deleteContact = (req, res, next) => {
  const conId = req.params.conId;

  Contact.findByIdAndRemove(conId)
    .then(result => {
        res.status(200).json({
            message: 'Contact successfully deleted'
        });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
  });
};