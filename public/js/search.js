// This code should be in your js/search.js file
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchDropdown = document.querySelector('.search-dropdown');
    const searchInput = searchDropdown.querySelector('input[type="text"]');

    searchIcon.addEventListener('click', function(e) {
        e.preventDefault();
        searchDropdown.style.display = searchDropdown.style.display === 'block' ? 'none' : 'block';
        if (searchDropdown.style.display === 'block') {
            searchInput.focus();
        }
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', function(e) {
        if (!searchIcon.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.style.display = 'none';
        }
    });

    // Prevent the dropdown from closing when clicking inside it
    searchDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});