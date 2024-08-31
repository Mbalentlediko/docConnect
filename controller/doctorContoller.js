import express from 'express'
import bodyParser from 'body-parser'
import {doctors} from '../model/doctors.js'

const doctorRouter = express.Router()

doctorRouter.use(bodyParser.json())

doctorRouter.get('/',  (req, res) => {
    doctors.fetchDoctors(req, res)
})

doctorRouter.get('/recent', (req, res) => {
    doctors.recentDoctors(req, res)
})

doctorRouter.get('/:id',  (req, res) => {
    doctors.fetchDoctor(req, res)
})

doctorRouter.post('/add',  (req, res) => {
    doctors.addDoctor(req, res)
})

doctorRouter.patch('/:id',  (req, res) => {
    doctors.updateDoctors(req, res)
})

doctorRouter.delete('/:id',  (req, res) => {
    doctors.deleteDoctor(req, res)
})

export {
    doctorRouter
}