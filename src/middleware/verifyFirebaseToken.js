import admin from '../config/firebase-config.js';

const verifyFirebaseToken = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const authToken = await admin.auth().verifyIdToken(token);
    if (authToken) {
      req.user = authToken;
      return next();
    }

    return res.status(401).json({
      status: 401,
      code: 'UNAUTHORIZED',
    });
  } catch (e) {
    return res.status(500).send({
      status: 500,
      code: 'SERVER_ERROR',
    });
  }
};

export default verifyFirebaseToken;
