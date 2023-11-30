import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
// import verifyFirebaseToken from './middleware/verifyFirebaseToken.js';
// import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));

// routes
// app.use('/api/v1/auth', authRoutes);

export default app;
