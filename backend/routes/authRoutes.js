import express from 'express'
import register from 

const authRouter = express.Router();

authRouter.post('/register', register)