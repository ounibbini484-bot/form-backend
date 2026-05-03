import FormUser from "../model/userModel.js";

const addUser = async (req, res) => {
    try{
        const {name, email, phone, address, role, status} = req.body;
        const user = await FormUser.create({name, email, phone, address, role, status});
        res.status(201).json({ message: "User created successfully", user })
    }catch(error){
        res.status(500).json({ message: "Error creating user", error })
    }
}

export default addUser