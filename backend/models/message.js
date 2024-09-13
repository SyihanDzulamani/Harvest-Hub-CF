const { DataTypes } = require('sequelize');
const connection = require('../config/connect');

const dbConnect = connection.connect;

const pesan_ = dbConnect.define('pesan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true  // Penulisan yang benar
    },
    tanggal: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // Menyimpan tanggal otomatis
    },
    nama: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    subject: {
        type: DataTypes.STRING
    },
    pesan: {
        type: DataTypes.TEXT
    },
}, {
    tableName: 'pesan',
    freezeTableName: true, // Penulisan yang benar
    timestamps: false
});

const insertMessage = async (nama, email, subject, pesan) => {
    try {
        const insert = await pesan_.create({ nama, email, subject, pesan });
        console.log('Pesan tersimpan:', insert.toJSON());
    } catch (error) {
        console.log('Gagal mengirim pesan:', error.message);
        throw error;
    }
};

module.exports = { insertMessage, pesan_ };
