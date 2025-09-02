<script>
    // Défilement fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Formulaire de contact
    document.querySelector('.contact-form form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Merci pour votre message ! Nous vous contacterons très rapidement.');
        this.reset();
    });

    // Fonction pour afficher le message de succès
    function showSuccessMessage() {
        alert('Inscription réussie !');
    }

    // Événement de soumission du formulaire d'inscription
    document.querySelector('.contact-form form').addEventListener('submit', function(e) {
        e.preventDefault();
        showSuccessMessage();
        this.reset();
    });
    let slideIndexApropos = 0;
showSlidesApropos(slideIndexApropos);

document.querySelector(".prev-apropos").addEventListener("click", function(){
  showSlidesApropos(slideIndexApropos -= 1);
});

document.querySelector(".next-apropos").addEventListener("click", function(){
  showSlidesApropos(slideIndexApropos += 1);
});
    </script>