import express from 'express';
import bodyParser from 'body-parser';
import { users } from '../model/users.js';

const userRouter = express.Router();
userRouter.use(bodyParser.json());

const userController = new users(); // Instantiate the users class

userRouter.get('/', (req, res) => {
    userController.fetchUsers(req, res); // Use the instance to call methods
});

userRouter.get('/:id', (req, res) => {
    userController.fetchUser(req, res);
});

userRouter.post('/register', (req, res) => {
    userController.registerUser(req, res);
});

userRouter.patch('/:id', (req, res) => {
    userController.updateUser(req, res);
});

userRouter.delete('/:id', (req, res) => {
    userController.deleteUser(req, res);
});

userRouter.post('/login', (req, res) => {
    userController.login(req, res);
});

export { userRouter };
