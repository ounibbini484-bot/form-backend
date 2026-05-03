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

export const getUserById = async(req, res) =>{
    try{
        const {id} = req.params;
        const user = await FormUser.findById(id);
        if(!user){
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json({ message: "User fetched successfully", user })
    }catch(error){
        res.status(500).json({ message: "Error fetching user", error })
    }
}