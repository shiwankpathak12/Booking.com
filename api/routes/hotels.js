import express from 'express'
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from '../controllers/hotel.js'
import Hotel from '../models/Hotel.js'
const router = express.Router()

//create
router.post('/', createHotel)
//update
router.put('/:id', updateHotel)
//Get
router.get('/', getHotels)
//Get By ID
router.get('/find/:id', getHotel)
//Delete
router.delete('/:id', deleteHotel)

//countByCity
router.get('/countByCity',countByCity)
//countByType
router.get('/countByType',countByType)

router.get('/room/:id',getHotelRooms)


export default router