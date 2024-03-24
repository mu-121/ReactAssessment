const express = require('express');
const router = express.Router();
const formDataController = require('../controllers/formController');

router.post('/form', formDataController.createFormData);
router.get('/form', formDataController.getFormData);
router.patch('/form/:id', formDataController.updateFormData);
router.delete('/form/:id', formDataController.deleteFormData);

module.exports = router;
