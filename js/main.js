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












     // Bars uchun bosilganda navigationni ochish/yopish
        document.querySelector('.bars').addEventListener('click', function() {
            // Navigationni ochish/yopish
            document.querySelector('.navigation').classList.toggle('active');
            
            // Bars animatsiyasi
            this.classList.toggle('active');
        });
        
        // Navigationdagi linklarni bosganda menyuni yopish (faqat kichik ekranda)
        document.querySelectorAll('.navigation .header__link').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 414) {
                    document.querySelector('.navigation').classList.remove('active');
                    document.querySelector('.bars').classList.remove('active');
                }
            });
        });
        
        // Ekran kattalashganda navigationni yopish
        window.addEventListener('resize', function() {
            if (window.innerWidth > 414) {
                document.querySelector('.navigation').classList.remove('active');
                document.querySelector('.bars').classList.remove('active');
            }
        });



        




























