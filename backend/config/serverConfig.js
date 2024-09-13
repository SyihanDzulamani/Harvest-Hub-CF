// config/serverConfig.js
const Hapi = require('@hapi/hapi');
const Path = require('path');

const createServer = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'], // Mengizinkan semua origin
                additionalHeaders: ['cache-control', 'x-requested-with'], // Tambahkan header yang diperlukan
              },
            files: {
                relativeTo: Path.join(__dirname, '../../frontend')
            }
        }
    });

    await server.register(require('@hapi/inert'));

    return server;
};



module.exports = createServer;
