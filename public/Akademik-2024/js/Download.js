// Download.js
import { storage } from './firebase-config.js';
import { ref as storageRef, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

let timerInterval;
let timeLeft = 60;

export function showDownloadForm(nim, linkSertifikat, nama, jenisPrestasi) {
    console.log('ShowDownloadForm called with:', { nim, linkSertifikat, nama, jenisPrestasi });
    
    const downloadForm = document.getElementById("downloadForm");
    if (!downloadForm) return;

    downloadForm.style.display = "block";
    resetTimer();

    const tokenForm = document.getElementById("tokenForm");
    if (tokenForm) {
        tokenForm.onsubmit = (event) => validateToken(event, nim, linkSertifikat, nama, jenisPrestasi);
    }
}

function validateToken(event, nim, linkSertifikat, nama, jenisPrestasi) {
    event.preventDefault();
    
    const tokenInput = document.getElementById('token').value;
    const messageElement = document.getElementById('message');

    if (!tokenInput || !nim) {
        messageElement.textContent = 'NIM tidak boleh kosong!';
        return false;
    }

    if (tokenInput === nim) {
        messageElement.textContent = `Memverifikasi NIM ${nama}...`;
        setTimeout(() => {
            messageElement.textContent = 'Memulai download...';
            startDownload(linkSertifikat, nama, jenisPrestasi);
        }, 1500);
    } else {
        messageElement.textContent = 'NIM tidak valid!';
    }
    return false;
}

async function startDownload(linkSertifikat, nama, jenisPrestasi) {
    try {
        console.log('Downloading:', linkSertifikat);
        
        const fileRef = storageRef(storage, linkSertifikat);
        const downloadURL = await getDownloadURL(fileRef);
        
        // Buat element untuk download
        const link = document.createElement('a');
        link.href = downloadURL;
        link.style.display = 'none';
        
        // Format nama file
        const safeNama = nama.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const safeJenis = jenisPrestasi.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const extension = linkSertifikat.split('.').pop() || 'pdf';
        
        link.download = `sertifikat_${safeJenis}_${safeNama}.${extension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Download berhasil dimulai!';
        messageElement.style.color = '#4CAF50';
        
        setTimeout(() => {
            closeDownloadForm();
        }, 2000);

    } catch (error) {
        console.error('Download error:', error);
        const messageElement = document.getElementById('message');
        messageElement.textContent = `Gagal mengunduh: ${error.message}`;
        messageElement.style.color = '#f44336';
        
        setTimeout(() => {
            closeDownloadForm();
        }, 3000);
    }
}

export function closeDownloadForm() {
    const downloadForm = document.getElementById("downloadForm");
    if (!downloadForm) return;
    
    downloadForm.style.display = "none";
    clearInterval(timerInterval);
    resetTimerDisplay();
    
    const messageElement = document.getElementById("message");
    const tokenInput = document.getElementById("token");
    
    if (messageElement) {
        messageElement.textContent = "";
        messageElement.style.color = ""; // Reset warna
    }
    if (tokenInput) tokenInput.value = "";
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 60;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            closeDownloadForm();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timeLeftElement = document.getElementById("timeLeft");
    if (timeLeftElement) {
        timeLeftElement.textContent = timeLeft;
    }
}

function resetTimerDisplay() {
    const timeLeftElement = document.getElementById("timeLeft");
    if (timeLeftElement) {
        timeLeftElement.textContent = "60";
    }
}

// Make functions available globally
window.showDownloadForm = showDownloadForm;
window.closeDownloadForm = closeDownloadForm;

// Tambahkan CSS untuk animasi pesan
const style = document.createElement('style');
style.textContent = `
    #message {
        transition: color 0.3s ease;
        margin-top: 10px;
        font-weight: bold;
    }
    
    .modal {
        animation: fadeIn 0.3s ease-out;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);