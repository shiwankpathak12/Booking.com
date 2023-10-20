import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js'
import User from '../models/User.js'
import { verifyAdmin, verifyToken, verifyUser } from '../Utils/verifyToken.js'
const router = express.Router()

// router.get('/cool',(req,res)=>{
//     res.send("cool buddy")
// })
router.get('/checkauthentication', verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in.")
})
//update
router.put('/:id',verifyUser, updateUser)
//Get
router.get('/',verifyUser, getUsers)
//Get By ID
router.get('/:id',verifyUser, getUser)
//Delete
router.delete('/:id',verifyAdmin, deleteUser)

export default router