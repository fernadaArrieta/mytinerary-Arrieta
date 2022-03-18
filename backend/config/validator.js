const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        firstName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The name must have more than three letters',
            'string.max': 'The name must have less than twenty letters'
        }),
       lastName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The last name must have more than three letters',
            'string.max': 'The last name must have less than twenty letters'
        }),
        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            'string.email':'Wrong email format'
        }),    
        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min': 'The password must have more than three letters',
            'string.max': 'The password must have less than twenty letters'
        }),
       
        profilePicture: joi.string(),
        selectCountry: joi.string(),        
        from:joi.string()
    })

    const validation = schema.validate(req.body.userData, {abortEarly:false})
       
    if (validation.error) {
        
        return res.json({success: false, from:"validator", message:validation.error.details})
        
    }
    
    next()
    
    
}

module.exports = validator