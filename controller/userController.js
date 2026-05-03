import FormUser from "../model/userModel.js";

export const create = async (req, res) => {
    try{
        const {name, email, phone, address, role, status} = req.body;
        const user = await FormUser.create({name, email, phone, address, role, status});
        res.status(201).json({ message: "User created successfully", user })
    }catch(error){
        res.status(500).json({ message: "Error creating user", error })
    }
}

export const getAllUsers = async (req, res) => {
    try{
        const users = await FormUser.find();
        res.status(200).json({ message: "Users fetched successfully", users })
    }catch(error){
        res.status(500).json({ message: "Error fetching users", error })
    }
}