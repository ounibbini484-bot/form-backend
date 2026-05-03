import express from 'express'
import addUser from '../controller/userController.js'

const router = express.Router()

//Create
router.post('/', (req, res) => {
    addUser(req, res)
})

//Read
router.get('/', (req, res) => {
    res.json({ message: "User created successfully" })
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
