import 'dotenv/config';
import express from 'express';
import verifyFirebaseToken from './middleware/verifyFirebaseToken.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(verifyFirebaseToken);

export default app;
