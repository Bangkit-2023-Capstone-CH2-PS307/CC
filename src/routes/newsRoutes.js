import express from 'express';
import NewsController from '../controllers/newsController.js';

const router = express.Router();

router.get('/', NewsController.index);

export default router;
