// Download.js

let timerInterval;
let timeLeft = 60; // waktu dalam detik

function showDownloadForm(nim, sertifikatId, nama, jenisPrestasi) {
    const downloadForm = document.getElementById("downloadForm");
    downloadForm.style.display = "block";
    resetTimer();

    document.getElementById("tokenForm").onsubmit = function (event) {
        return validateToken(event, nim, sertifikatId, nama, jenisPrestasi);
    };
}

function validateToken(event, nim, sertifikatId, nama, jenisPrestasi) {
    event.preventDefault();
    const tokenInput = document.getElementById('token').value;

    if (tokenInput === nim) {
        document.getElementById('message').textContent = `Mencari ${nama}...`;
        setTimeout(() => {
            document.getElementById('message').textContent = '';
            downloadSertifikat(sertifikatId, nama, jenisPrestasi);
            closeDownloadForm();
        }, 3000);
    } else {
        document.getElementById('message').textContent = 'NIM tidak valid!';
    }
    return false;
}

function downloadSertifikat(sertifikatId, nama, jenisPrestasi) {
    console.log(`Attempting to download sertifikat: ID=${sertifikatId}, Nama=${nama}, Jenis=${jenisPrestasi}`);
    
    fetch(`includes/get_sertifikat.php?id=${sertifikatId}`)
        .then(response => {
            console.log('Response received:', response);
            console.log('Content-Type:', response.headers.get('content-type'));
            
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json().then(data => {
                    throw new Error(data.message || 'Unknown error occurred');
                });
            }
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.blob();
        })
        .then(blob => {
            console.log('Blob received:', blob);
            
            if (blob.size === 0) {
                throw new Error('The file is empty');
            }
            
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.href = url;
            
            const contentType = blob.type;
            console.log('Blob content type:', contentType);
            
            let extension = 'jpg'; // default extension
            if (contentType === 'application/pdf') {
                extension = 'pdf';
            } else if (contentType.startsWith('image/')) {
                extension = contentType.split('/')[1];
            }
            
            const fileName = `Sertifikat_${jenisPrestasi.replace(/\s+/g, "_")}_${nama.replace(/\s+/g, "_")}.${extension}`;
            console.log('File name:', fileName);
            
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            console.log('Download initiated');
        })
        .catch(error => {
            console.error('Error during download:', error);
            document.getElementById('message').textContent = `Gagal mengunduh sertifikat: ${error.message}`;
        });
}

function closeDownloadForm() {
    const downloadForm = document.getElementById("downloadForm");
    downloadForm.style.display = "none"; // Menyembunyikan modal
    clearInterval(timerInterval); // Hentikan timer
    resetTimerDisplay(); // Reset tampilan timer
    document.getElementById("message").textContent = ""; // Menghapus pesan
    document.getElementById("token").value = ""; // Mengosongkan input token
}

function resetTimer() {
    clearInterval(timerInterval); // Hentikan timer jika sedang berjalan
    timeLeft = 60; // Reset waktu
    document.getElementById("timeLeft").textContent = timeLeft; // Update tampilan

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timeLeft").textContent = timeLeft; // Update tampilan
        if (timeLeft <= 0) {
            clearInterval(timerInterval); // Hentikan timer
            closeDownloadForm(); // Tutup modal ketika waktu habis
        }
    }, 1000);
}

function resetTimerDisplay() {
    document.getElementById("timeLeft").textContent = "60"; // Set kembali tampilan ke 60 detik
}