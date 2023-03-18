const User = require('../models/User');

exports.addChild = async (req, res, next) => {
    //getting user data from request body
    const {name, 
    father_name, 
    mother_name, 
    gender,
    name_hoshpital, 
    birth_weight, 
    dob, 
    birth_address, 
    permanent_address} = req.body;
    try {
        const user = new User({name, 
        father_name, 
        mother_name, 
        gender,
        name_hoshpital, 
        birth_weight, 
        dob, 
        birth_address, 
        permanent_address});
        const result = await user.createUser();
        res.send(user);
    } catch (error) {
        next(error);
    }
};
// Remember the createUser method we added to the User model prototype? It is therefore available on our user model instance above.