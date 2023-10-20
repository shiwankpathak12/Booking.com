import express from "express";
import { verifyAdmin } from "../Utils/verifyToken.js";
import { createRoom,updateRoom,getRoom,getRooms,deleteRoom,updateRoomAvailability } from "../controllers/room.js"; 
const router=express.Router()

//create
router.post('/:hotelid',verifyAdmin ,createRoom)
//update
router.put('/:id',verifyAdmin, updateRoom)
//Get
router.get('/', getRooms)
//Get By ID
router.get('/:id', getRoom)
//Delete
router.delete('/:id/:hotelid',verifyAdmin, deleteRoom)
router.put("/availability/:id", updateRoomAvailability);


export default router