document.addEventListener("DOMContentLoaded", function () {
    const uploadLink = document.getElementById("upload-link");
    const popup = document.getElementById("login-popup");
    const closeButton = document.querySelector(".close");
    const loginButton = document.getElementById("login-button");
    const errorMessage = document.getElementById("error-message");

    // Menampilkan pop-up saat link diklik
    uploadLink.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "block";
    });

    // Menutup pop-up
    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Login logika
    loginButton.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Reset error message
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';

        // Cek username dan password
        if (username === "123456" && password === "123456") {
            window.location.href = "upload.html"; // Arahkan ke upload.html
        } else {
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

    // Menutup pop-up jika pengguna mengklik di luar pop-up
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});