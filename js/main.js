document.addEventListener('DOMContentLoaded', function() {
            const searchContainer = document.querySelector('.search');
            const searchInput = document.querySelector('.search-input');
            const searchIcon = document.querySelector('.search-icon');
            let isActive = false;
            
            searchIcon.addEventListener('click', function() {
                if (!isActive) {
                    // Activate the search bar
                    searchContainer.classList.add('active');
                    searchInput.focus();
                    isActive = true;
                } else {
                    // Perform search with loading animation
                    if (searchInput.value.trim() !== '') {
                        searchContainer.classList.add('loading');
                        
                        // Simulate search process
                        setTimeout(function() {
                            searchContainer.classList.remove('loading');
                            alert('Searching for: ' + searchInput.value);
                        }, 1500);
                    }
                }
            });
            
            // Close search when clicking outside
            document.addEventListener('click', function(e) {
                if (isActive && !searchContainer.contains(e.target)) {
                    searchContainer.classList.remove('active');
                    searchContainer.classList.remove('loading');
                    isActive = false;
                }
            });
        });

















         // Bars uchun bosilganda menyuni ochish funktsiyasi
        document.querySelector('.bars').addEventListener('click', function() {
            alert('Bars menyusi bosildi! Bu yerda mobil navigatsiya ochiladi.');});




























