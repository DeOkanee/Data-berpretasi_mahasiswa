document.addEventListener('DOMContentLoaded', function () {
    const locationLink = document.getElementById('location-link');
    const popup = document.getElementById('location-popup');
    const closeBtn = document.querySelector('.close-location');

    // Menampilkan pop-up saat link diklik
    locationLink.addEventListener('click', function (event) {
        event.preventDefault();
        popup.style.display = 'block'; // Menampilkan pop-up
    });

    // Menutup pop-up saat tombol close diklik
    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none'; // Menutup pop-up
    });

    // Menutup pop-up jika mengklik di luar konten pop-up
    window.addEventListener('click', function (event) {
        if (event.target == popup) {
            popup.style.display = 'none'; // Menutup pop-up
        }
    });
});
