const User = require("../models/user")

const createUser = async (request, response) => {
    try {
        const {name, 
            dob, 
            father_name, 
            mother_name, 
            gender,
            name_hoshpital, 
            birth_weight, 
            
            birth_address, 
            permanent_address
        } = request.body;
    
        const user = await User.create({
            name, 
            dob, 
            father_name, 
            mother_name, 
            gender,
            name_hoshpital, 
            birth_weight, 
            birth_address, 
            permanent_address,
        })
       
        return response.status(200).json({
            status: 200,
            message: "User added successfully",
            data:user
        })
    } catch (error) {
        response.status(400).json({
            status: 400,
            message: "Somethings went wrong",
            error: error.message
        })
    }
}

const allUSer = async (request, response) => {
    try {

        const getAllUser = await User.findAll();
        console.log("getUser",getAllUser);
        
        if (getAllUser == null) {
            return response.status(404).json({
                status: 400,
                message: "No User found",
                data:{}
            })
        }

        return response.status(200).json({
            status: 200,
            message: "All User found successfully",
            data:getAllUser
        })

    } catch (error) {
        response.status(400).json({
            status: 400,
            message: "Somethings went wrong",
            error: error.message
        })
    }
}

const getUserDetail = async (request, response) => {
    try {
        const { id } = request.body;

        const getUser = await User.findOne({ where: { id }, });
        console.log("getUser",getUser);
        
        if (getUser == null) {
            return response.status(404).json({
                status: 400,
                message: "No User found",
                data:{}
            })
        }

        return response.status(200).json({
            status: 200,
            message: "User detail successfully",
            data:getUser
        })
    } catch (error) {
        response.status(400).json({
            status: 400,
            message: "Somethings went wrong",
            error: error.message
        })
    }
}

module.exports = {
    createUser,
    allUSer,
    getUserDetail
}