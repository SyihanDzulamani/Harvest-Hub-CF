// server.js
const createServer = require('./config/serverConfig');
const routes = require('./routes');

const init = async () => {
    const server = await createServer();

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
