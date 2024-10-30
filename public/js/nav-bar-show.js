 // hamburger-menu.js
 document.getElementById("hamburger-menu").addEventListener("click", function(event) {
    var navBar = document.getElementById("nav-bar");
    navBar.classList.toggle("show"); // Mengganti kelas untuk menampilkan atau menyembunyikan menu
    event.stopPropagation(); // Mencegah event dari propagasi lebih lanjut
});

// Menutup navbar saat klik di luar
document.addEventListener("click", function(event) {
    var navBar = document.getElementById("nav-bar");
    var hamburgerMenu = document.getElementById("hamburger-menu");

    // Memeriksa jika klik terjadi di luar navbar dan tombol hamburger
    if (!navBar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        navBar.classList.remove("show"); // Menyembunyikan menu
    }
});
