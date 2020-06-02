const express = require("express");
const router = express.Router();
const ContactsController = require('../controllers/contacts');

router.get('/', ContactsController.getContacts);

router.get('/:conId', ContactsController.getContactById);

router.post('/', ContactsController.createContact);

router.put('/:conId', ContactsController.editContact);

router.delete('/:conId', ContactsController.deleteContact);

module.exports = router;