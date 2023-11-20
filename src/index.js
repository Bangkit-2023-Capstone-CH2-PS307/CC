import server from './server.js';

const port = process.env.PORT || 8080;

const startServer = () => {
  server.listen(port, () => {
    // eslint-disable-next-line
    console.log(`Whoooosshhh speed ${port} 🚀`);
  });
};

startServer();
