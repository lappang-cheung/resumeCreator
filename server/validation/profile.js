// Required packages
const Validator = require('validator')

// Custom module
const isEmpty = require('../validation/is-empty')

// Validating the profile
module.exports = validateProfileInput = (data) => {
    
    // Error variable
    let errors = {}

    // Check if isEmpty
    data.handle = !isEmpty(data.handle) ? data.handle : ''
    data.status = !isEmpty(data.status) ? data.status : ''
    data.skills = !isEmpty(data.skills) ? data.skills : ''

    // Validate the handle
    if(!Validator.isLength(data.handle, { min: 2, max: 40})){
        errors.handle = 'Handle needs to between 2 and 40 characters'
    }
    if(Validator.isEmpty(data.handle)){
        errors.handle = 'Profile handle is required'
    }

    // Validate the status
    if(Validator.isEmpty(data.status)){
        errors.status = 'Status field is required'
    } 

    // Validate the skills
    if(Validator.isEmpty(data.skills)){
        errors.skills = 'Skills field is required'
    } 

    // Validate the website
    if(!isEmpty(data.website)){
        if(!Validator.isURL(data.website)){
            errors.website = 'Not a valid URL'
        }
    }

    // Validate the social
    if(!isEmpty(data.linkedin)){
        if(!Validator.isURL(data.linkedin)){
            errors.linkedin = 'Not a valid URL'
        }
    }
    if(!isEmpty(data.angellist)){
        if(!Validator.isURL(data.angellist)){
            errors.angellist = 'Not a valid URL'
        }
    }
    if(!isEmpty(data.twitter)){
        if(!Validator.isURL(data.twitter)){
            errors.twitter = 'Not a valid URL'
        }
    }
    if(!isEmpty(data.github)){
        if(!Validator.isURL(data.github)){
            errors.github = 'Not a valid URL'
        }
    }
    if(!isEmpty(data.instagram)){
        if(!Validator.isURL(data.instagram)){
            errors.instagram = 'Not a valid URL'
        }
    }
    if(!isEmpty(data.facebook)){
        if(!Validator.isURL(data.facebook)){
            errors.facebook = 'Not a valid URL'
        }
    }
    if(!isEmpty(data.behance)){
        if(!Validator.isURL(data.behance)){
            errors.behance = 'Not a valid URL'
        }
    }

    // Return the errors
    return{
        errors,
        isValid: isEmpty(errors)
    }
}