document.addEventListener("DOMContentLoaded", function () {
    const uploadLink = document.getElementById("upload-link");
    const popup = document.getElementById("login-popup");
    const closeButton = document.querySelector(".close");
    const loginButton = document.getElementById("login-button");
    const errorMessage = document.getElementById("error-message");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Fungsi untuk menampilkan popup
    function showPopup() {
        if (popup) popup.style.display = "block";
    }

    // Fungsi untuk menyembunyikan popup
    function hidePopup() {
        if (popup) popup.style.display = "none";
    }

    // Menampilkan pop-up saat link diklik
    if (uploadLink) {
        uploadLink.addEventListener("click", function (event) {
            event.preventDefault();
            showPopup();
        });
    }

    // Menutup pop-up
    if (closeButton) {
        closeButton.addEventListener("click", hidePopup);
    }

    // Login logika
    if (loginButton) {
        loginButton.addEventListener("click", function () {
            const username = usernameInput ? usernameInput.value : '';
            const password = passwordInput ? passwordInput.value : '';

            // Reset error message
            if (errorMessage) {
                errorMessage.style.display = 'none';
                errorMessage.textContent = '';
            }

            // Cek username dan password
            if (username === "123456" && password === "123456") {
                window.location.href = "upload.html"; // Arahkan ke upload.html
            } else if (errorMessage) {
                // Tampilkan pesan kesalahan
                errorMessage.style.display = 'block';
                if (username !== "123456" && password !== "123456") {
                    errorMessage.textContent = 'Username dan password salah!';
                } else if (username !== "123456") {
                    errorMessage.textContent = 'Username salah!';
                } else {
                    errorMessage.textContent = 'Password salah!';
                }
            }
        });
    }

    // Menutup pop-up jika pengguna mengklik di luar pop-up
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            hidePopup();
        }
    });
});