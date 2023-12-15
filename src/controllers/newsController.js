import newsRepository from '../repository/newsRepository.js';

class NewsController {
  async index(req, res) {
    try {
      // get list from firestore
      const data = await newsRepository.get();

      return res.status(200).json({
        status: 200,
        message: 'Success',
        data,
      });
    } catch (error) {
      console.log(error);

      return res.status(400).json({
        status: 400,
        message: error,
      });
    }
  }
}

export default new NewsController();
