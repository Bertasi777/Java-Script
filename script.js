
        // Smooth scroll for anchor links 
        document.querySelectorAll('a[href^="#"]'.forEach(anchar => {
            anchar.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).
                scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }));

        // Product haver aniamations 
        const productCards = document.querySelectorAll('product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                productCards.forEach(card => {
                    card.addEventListener('mouseenter', function() }
                    this.style.transform = 'translateY(-15px)'
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
            });
        });