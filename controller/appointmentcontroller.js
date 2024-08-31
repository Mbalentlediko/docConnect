import express from 'express'
import bodyParser from 'body-parser'
import {appointments} from '../model/appointments.js'

const appointmentRouter = express.Router()

appointmentRouter.use(bodyParser.json())

appointmentRouter.get('/',  (req, res) => {
    appointments.fetchAppointments(req, res)
})

appointmentRouter.get('/recent', (req, res) => {
    appointments.recentAppointments(req, res)
})

appointmentRouter.get('/:id',  (req, res) => {
    appointments.fetchAppointment(req, res)
})

appointmentRouter.post('/add',  (req, res) => {
    appointments.addAppointment(req, res)
})

appointmentRouter.patch('/:id',  (req, res) => {
    appointments.updateAppointments(req, res)
})

appointmentRouter.delete('/:id',  (req, res) => {
    appointments.deleteAppointment(req, res)
})

export {
    appointmentRouter
}