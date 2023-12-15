import BaseRepository from './baseRepository.js';

class NewsRepository extends BaseRepository {
  constructor() {
    super('news');
  }
}

export default new NewsRepository();
