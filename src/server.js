import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import verifyFirebaseToken from './middleware/verifyFirebaseToken.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));

// routes
app.get('/api/v1/', (req, res) => {
  res.json({
    appName: 'NutriKita-API',
    apiVersion: 'v1',
    description: 'API to serve request from NutriKita Android Apps',
  });
});
app.use('/api/v1/auth', authRoutes);

export default app;
