import admin from '../config/firebase-config.js';
import userRepository from '../repository/userRepository.js';

class AuthController {
  async signup(req, res) {
    try {
      const {
        email,
        password,
        name,
        phone,
        dateOfBirth,
      } = req.body;

      const user = await admin.auth().createUser({
        email,
        password,
        emailVerified: true,
        phoneNumber: phone,
        displayName: name,
        disabled: false,
      });

      // save to firestore
      userRepository.create({
        uid: user.uid,
        email,
        password,
        name,
        phone,
        dateOfBirth,
      });

      return res.status(201).json({
        status: 201,
        message: 'Account created successfully, please log in',
        user: {
          email: user.email,
          name: user.displayName,
          phone: user.phoneNumber,
          dateOfBirth,
        },
      });
    } catch (error) {
      // TODO : Handle FirestoreAuthError & FirestoreError
      console.log(error);
      return res.status(400).json({
        status: 400,
        message: 'Failed to signup, please try again.',
      });
    }
  }
}

export default new AuthController();
