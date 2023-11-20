// import { FirebaseAuthError } from 'firebase-admin/auth';
import admin from '../config/firebase-config.js';

const verifyFirebaseToken = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      [, token] = req.headers.authorization.split(' ');
    }

    if (!token) {
      return res.status(401).json({
        status: 401,
        message: 'Please log in to get access.',
      });
    }

    const authToken = await admin.auth().verifyIdToken(token);
    if (authToken) {
      req.user = authToken;
      return next();
    }

    return res.status(401).json({
      status: 401,
      message: 'Please log in to get access.',
    });
  } catch (error) {
    // TODO : Handle FirebaseAuthError
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: 'Error',
    });
  }
};

export default verifyFirebaseToken;
