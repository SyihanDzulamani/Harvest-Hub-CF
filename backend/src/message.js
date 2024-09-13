const message = require('../models/message');

async function insertMessageHand(request, h) {
    try {
        const { nama, email, subject, pesan } = request.payload;

        // Memasukkan pesan ke dalam database
        await message.insertMessage(nama, email, subject, pesan);

        // Kembalikan response JSON agar konsisten
        return h.response({ message: 'Pesan terkirim' }).code(201);
    } catch (error) {
        console.error('Error saat mengirim pesan:', error.message);

        // Kembalikan response JSON untuk error
        return h.response({ error: 'Terjadi kesalahan pada server' }).code(500);
    }
};

module.exports = { insertMessageHand };
