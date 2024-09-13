document.getElementById('formFoto').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById('formFoto'));

    try {
        const response = await fetch('http://localhost:3000/upload-foto', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Upload gagal');
        }

        alert('Foto berhasil diupload!');
        document.getElementById('formFoto').reset();
    } catch (error) {
        alert('Error: ' + error.message);
    }
});