import express from 'express'
import { main } from '../Controller/main.js';
import { userLogIn } from '../Controller/user-controller.js';
import { userSignUp } from '../Controller/user-controller.js';


const router = express.Router();

router.get('/', main)


//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);



export default router;


