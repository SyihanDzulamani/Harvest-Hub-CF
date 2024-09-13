const { DataTypes } = require('sequelize');
const connection = require('../config/connect'); // Sesuaikan dengan path config connect Anda

const dbConnect = connection.connect;

const Foto = dbConnect.define('Foto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fotoPath: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'foto',
    freezeTableName: true,
    timestamps: false // Jika Anda tidak ingin menggunakan createdAt dan updatedAt
});

const saveToDatabase = async (subject, fotoPath) => {
    try {
        const foto = await Foto.create({ subject, fotoPath });
        console.log('Foto berhasil disimpan:', foto.toJSON());
    } catch (error) {
        console.error('Gagal menyimpan foto:', error.message);
        throw error;
    }
};

module.exports = { Foto, saveToDatabase };
