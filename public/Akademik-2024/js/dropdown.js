  // Toggle untuk membuka dropdown saat di klik
  document.getElementById('akademik-link').addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah link navigasi default
    this.parentElement.classList.toggle('show');
  });

  // Menutup dropdown jika klik di luar elemen dropdown
  window.onclick = function (event) {
    if (!event.target.matches('#akademik-link')) {
      var dropdowns = document.getElementsByClassName('dropdown');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

