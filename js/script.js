document.addEventListener("DOMContentLoaded", function() {
    
    const filterButtons = document.querySelectorAll('#portfolioFilter button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');

                    if (filterValue === 'all' || filterValue === itemCategory) {
                        item.style.display = 'block';
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 50);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            
            event.preventDefault();
            event.stopPropagation();

            if (!contactForm.checkValidity()) {
                const errorAlert = document.getElementById('errorAlert');
                const successAlert = document.getElementById('successAlert');
                
                if(errorAlert) errorAlert.classList.remove('d-none');
                if(successAlert) successAlert.classList.add('d-none');
                
            } else {
                const errorAlert = document.getElementById('errorAlert');
                const successAlert = document.getElementById('successAlert');

                if(successAlert) successAlert.classList.remove('d-none');
                if(errorAlert) errorAlert.classList.add('d-none');

                contactForm.reset();
                contactForm.classList.remove('was-validated');

                const submitBtn = document.getElementById('submitBtn');
                if(submitBtn) submitBtn.disabled = true;
                
                return;
            }
            contactForm.classList.add('was-validated');
        }, false);
    }
    const termsCheckbox = document.getElementById('invalidCheck');
    const submitBtn = document.getElementById('submitBtn');

    if (termsCheckbox && submitBtn) {
        submitBtn.disabled = !termsCheckbox.checked;

        termsCheckbox.addEventListener('change', function() {
            if (this.checked) {
                submitBtn.disabled = false;
            } else {
                submitBtn.disabled = true;
            }
        });
    }
});