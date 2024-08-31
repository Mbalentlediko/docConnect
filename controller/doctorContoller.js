import express from 'express'
import bodyParser from 'body-parser'
import {doctors} from '../model/doctors.js'

const doctorRouter = express.Router()

doctorRouter.use(bodyParser.json())

doctorRouter.get('/',  (req, res) => {
    doctors.fetchdoctors(req, res)
})

doctorRouter.get('/recent', (req, res) => {
    doctors.recentdoctors(req, res)
})

doctorRouter.get('/:id',  (req, res) => {
    doctors.fetchdoctor(req, res)
})

doctorRouter.post('/add',  (req, res) => {
    doctors.adddoctor(req, res)
})

doctorRouter.patch('/:id',  (req, res) => {
    doctors.updatedoctors(req, res)
})

doctorRouter.delete('/:id',  (req, res) => {
    doctors.deletedoctor(req, res)
})

export {
    doctorRouter
}