// Required packages
const Validator = require('validator')

// Custom module
const isEmpty = require('../validation/is-empty')

// Validating the login
module.exports = validateExperienceInput = (data) => {
    
    // Error variable
    let errors = {}

    // Check if isEmpty
    data.title = !isEmpty(data.title) ? data.title : ''
    data.company = !isEmpty(data.company) ? data.company : ''
    data.from = !isEmpty(data.from) ? data.from : ''
    data.location = !isEmpty(data.location) ? data.location: ''
    data.description = !isEmpty(data.description) ? data.description : ''

    // Validating title
    if(Validator.isEmpty(data.title)){
        errors.title = 'Title field is required'
    }

    // Validating company
    if(Validator.isEmpty(data.company)){
        errors.company = "Company field is required"
    }

    // Validating from
    if(Validator.isEmpty(data.from)){
        errors.from = "From date field is required"
    }

    // Validating location
    if(Validator.isEmpty(data.location)){
        errors.location = "Location is required"
    }

    // Validation description
    if(Validator.isEmpty(data.description)){
        errors.description = "Description is required"
    }

    // Return the errors
    return{
        errors,
        isValid: isEmpty(errors)
    }
}