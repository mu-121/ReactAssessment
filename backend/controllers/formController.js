const FormData = require('../models/formModel');

const createFormData = async (req, res) => {
  try {
    const formData = new FormData({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });

    await formData.save();

    res.status(201).json({
      message: 'Form data created successfully',
      formData: formData,
    });
  } catch (err) {
    console.error('Error while creating form data:', err);
    res.status(500).json({
      error: err.message
    });
  }
};

const getFormData = async (req, res) => {
  try {
    const formData = await FormData.find();
    res.status(200).json(formData);
  } catch (err) {
    console.error('Error while fetching form data:', err);
    res.status(500).json({
      error: err.message
    });
  }
};

const updateFormData = async (req, res) => {
  try {
    const updatedFormData = await FormData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Form data updated successfully', formData: updatedFormData });
  } catch (err) {
    console.error('Error while updating form data:', err);
    res.status(500).json({
      error: err.message
    });
  }
};

const deleteFormData = async (req, res) => {
  try {
    await FormData.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Form data deleted successfully' });
  } catch (err) {
    console.error('Error while deleting form data:', err);
    res.status(500).json({
      error: err.message
    });
  }
};

module.exports = {
  createFormData,
  getFormData,
  updateFormData,
  deleteFormData
};
