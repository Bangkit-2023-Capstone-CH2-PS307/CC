import express from 'express';
import verifyFirebaseToken from '../middleware/verifyFirebaseToken.js';
import AuthController from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', AuthController.signup);

export default router;
