import express from 'express'
import bodyParser  from 'body-parser'
import {services} from '../model/services.js'

const serviceRouter = express.Router()

serviceRouter.use(bodyParser.json())

serviceRouter.get('/',(req,res) => {
    services.fetchServices(req,res)
})
// serviceRouter.get('/rece',(req,res) => {
//     services.fetchServices(req,res)
// })
serviceRouter.get('/:id',(req,res) => {
    services.fetchServices(req,res)
})
serviceRouter.get('/:id',(req,res) => {
    services.fetchService(req,res)
})
serviceRouter.post('/add',(req,res) => {
    services.addService(req,res)
})
serviceRouter.patch('/:id',(req,res) => {
    services.updateService(req,res)
})
serviceRouter.delete('/:id',(req,res) => {
    services.deleteService(req,res)
})

export{
    serviceRouter
}