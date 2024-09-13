document.getElementById('formPesan').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const pesan = document.getElementById('pesan').value;

    try {
        const response = await fetch('http://localhost:3000/pesan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nama, email, subject, pesan })
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        const result = await response.json();
        console.log(result); // Tambahkan ini untuk memeriksa response dari backend
        alert("Data Berhasil disimpan");
    
        // Reset form setelah sukses
        document.getElementById('formPesan').reset();
        
        // Refresh halaman setelah 1 detik
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        alert('Error: Unable to send message. Please try again later.');
        document.getElementById('formPesan').reset();
    }
});
