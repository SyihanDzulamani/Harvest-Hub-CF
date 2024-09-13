const { saveToDatabase } = require('../models/foto'); // Path model

async function uploadFotoHandler(request, h) {
    const { subject } = request.payload;
    const foto = request.payload.foto;

    const fotoPath = path.join(__dirname, '../uploads', foto.hapi.filename);
    const fileStream = fs.createWriteStream(fotoPath);

    try {
        await new Promise((resolve, reject) => {
            foto.pipe(fileStream);
            foto.on('end', resolve);
            foto.on('error', reject);
        });

        // Simpan data di database
        await saveToDatabase(subject, fotoPath);

        return h.response({ message: 'Foto berhasil diupload' }).code(201);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Gagal upload foto' }).code(500);
    }
}

module.exports = {uploadFotoHandler};
