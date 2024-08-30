import {users} from './users'
import {doctors} from "./doctors"
import { appointments } from './appointments'
import {services} from "./services"

const users = new users()
const doctors = new doctors()
const appointments = new appointments()
const services = new services() 
export {
    users,
    doctors,
    appointments,
    services
}