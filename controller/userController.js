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

export const updateUser = async(req, res) =>{
    try{
        const {id} = req.params;
        const {name, email, phone, address, role, status} = req.body;
        const user = await FormUser.findByIdAndUpdate(id, {name, email, phone, address, role, status}, {new: true});
        if(!user){
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json({ message: "User updated successfully", user })
    }catch(error){
        res.status(500).json({ message: "Error updating user", error })
    }
}

export const deleteUser = async(req, res) =>{
    try{
        const {id} = req.params;
        const user = await FormUser.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json({ message: "User deleted successfully", user })
    }catch(error){
        res.status(500).json({ message: "Error deleting user", error })
    }
}

// export const searchUserByNameOrEmail = async(req, res) => {
//     try{
//         const {name, email} = req.body;
//         const users = await FormUser.find({$or: [{name: name}, {email: email}]});
//         if(users.length === 0){
//             return res.status(404).json({ message: "User not found" })
//         }
//         res.status(200).json({ message: "Users fetched successfully", users })
//     }catch(error){
//         res.status(500).json({ message: "Error fetching users", error })
//     }
// }

export const searchUserByNameOrEmail = async (req, res) => {
    try {
        const { name, email } = req.query;

        // Build dynamic query
        const conditions = [];

        if (name) {
            conditions.push({ name: { $regex: name, $options: 'i' } });
        }

        if (email) {
            conditions.push({ email: { $regex: email, $options: 'i' } });
        }

        // If no query params provided
        if (conditions.length === 0) {
            return res.status(400).json({
                message: "Please provide name or email to search"
            });
        }

        const users = await FormUser.find({
            $or: conditions
        });

        if (users.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "Users fetched successfully",
            users
        });

    } catch (error) {
        res.status(500).json({
            message: "Error fetching users",
            error
        });
    }
};