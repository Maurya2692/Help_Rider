const e = require('express');
const Joi=require('joi');
const userSchema = Joi.object({
    username:Joi.string().alphanum().min(3).max(30).required(),

    email:Joi.string().email().required(),
    age:Joi.number().integer().min(18).max(99).required(),
});

const user = {
    username: 'Rishit',
    email: 'rishitraiyani12345@gmail.com',
    age: 23,
};
const { error, value} = userSchema.validate(user);
if(error){
    console.log('Validation error:', error.details[0].message);
} else {
    console.log('Valid user data', value);
}