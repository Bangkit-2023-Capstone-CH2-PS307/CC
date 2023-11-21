import bcrypt from 'bcrypt';
import admin from '../config/firebase-config.js';
import userRepository from '../repository/userRepository.js';
import { Timestamp } from 'firebase-admin/firestore';

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
      const createdAt = Timestamp.now();
      const updatedAt = createdAt;

      const user = await admin.auth().createUser({
        email,
        password,
        emailVerified: true,
        phoneNumber: phone,
        displayName: name,
        disabled: false,
      });

      // save to firestore
      await userRepository.create({
        uid: user.uid,
        email,
        password: await bcrypt.hash(password, 10),
        name,
        phone,
        dateOfBirth,
        createdAt,
        updatedAt,
      });

      return res.status(201).json({
        status: 201,
        message: 'Account created successfully, please log in',
        user: {
          email: user.email,
          name: user.displayName,
          phone: user.phoneNumber,
          dateOfBirth,
          createdAt,
        },
      });
    } catch (error) {
      // TODO : Handle FirestoreError
      let message = 'Failed to signup, please try again.';
      switch (error.code) {
        case 'auth/email-already-exists':
          message = 'The email address is already in use by another account.';
          break;
        case 'auth/invalid-phone-number':
          message = 'The phone format muse be +62xxxxx.';
          break;
        default:
          message = 'Failed to signup, please try again.';
      }

      console.log(error);

      return res.status(400).json({
        status: 400,
        message,
      });
    }
  }
}

export default new AuthController();
