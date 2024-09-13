// routes/index.js
const message =require('./message');
const foto =require('./foto');

module.exports = [
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                index: ['index.html']
            }
        }
    },
    {
        method: 'POST',
        path: '/pesan',
        handler: message.insertMessageHand
    },
    {
        method: 'POST',
        path: '/upload-foto',
        options: {
            payload: {
                output: 'stream',
                parse: true,
                multipart: true,
                maxBytes: 10485760 // 10MB
            }
        },
        handler: foto.uploadFotoHandler
    }
];

