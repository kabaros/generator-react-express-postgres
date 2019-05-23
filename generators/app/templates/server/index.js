const CONFIG = require('./src/config');
const app = require('./src/app');

app.listen(CONFIG.LISTEN_PORT, () => {
  console.log(`Node Env is ${process.env.NODE_ENV}`);
  console.log(`Server is ready for business on port ${CONFIG.LISTEN_PORT}`);
});

process.on('unhandledRejection', (reason, promise) => {
  //TODO: Log it or do something
});
