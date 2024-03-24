const mongoose = require('mongoose');

const formData = mongoose.Schema({
    name: {
        type: String,
       
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
     subject:
    {
        type: String,
        required: true
    },
    message:
    {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('formdata', formData);
