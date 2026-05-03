import express from 'express'
import { create, getAllUsers, getUserById, updateUser, deleteUser, searchUserByNameOrEmail } from '../controller/userController.js'

const router = express.Router()

//Create
router.post('/', (req, res) => {
    create(req, res)
})

//Read
router.get('/', (req, res) => { 
    getAllUsers(req, res)
})

router.get('/search', (req, res) => {
    searchUserByNameOrEmail(req, res)
})


router.get('/:id', (req, res) => {
    getUserById(req, res)
})


//Update
router.put('/:id', (req, res) => {
    updateUser(req, res)
})

//Delete
router.delete('/:id', (req, res) => {
    deleteUser(req, res)
})

export default router
