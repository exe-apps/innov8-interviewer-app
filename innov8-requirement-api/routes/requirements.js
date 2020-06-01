const express = require("express");
const router = express.Router();
const RequirementsController = require('../controllers/requirements');

router.get('/', RequirementsController.getRequirements);

router.get('/:reqId', RequirementsController.getRequirementById);

router.post('/', RequirementsController.createRequirement);

router.put('/:reqId', RequirementsController.editRequirement);

router.delete('/:reqId', RequirementsController.deleteRequirement);

module.exports = router;