import express from 'express'
import { create, getAllUsers } from '../controller/userController.js'

const router = express.Router()

//Create
router.post('/', (req, res) => {
    create(req, res)
})

//Read
router.get('/', (req, res) => { 
    getAllUsers(req, res)
})

//Update
router.put('/:id', (req, res) => {
    res.json({ message: "User updated successfully" })
})

//Delete
router.delete('/:id', (req, res) => {
    res.json({ message: "User deleted successfully" })
})

export default router
