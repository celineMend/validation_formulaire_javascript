document.addEventListener("DOMContentLoaded", function () {
    // Code à exécuter lorsque le DOM est entièrement chargé et prêt à être manipulé
    const form = document.getElementById('submissionForm');
    const successMessage = document.getElementById('successMessage');

    if (form) {
        // Si l'élément avec l'id 'submissionForm' existe dans le DOM
        form.addEventListener('submit', function (event) {
            // Écouteur d'événement pour intercepter la soumission du formulaire
            event.preventDefault(); // Empêche l'action par défaut de soumission du formulaire

            let isValid = true; // Variable pour suivre si le formulaire est valide

            // Validation du Prénom
            const prenom = document.getElementById('prenom');
            const prenomError = document.getElementById('prenomError');
            if (prenom && (prenom.value.length < 3 || prenom.value.length > 15)) {
                // Vérifie si le prénom a une longueur incorrecte
                if (prenomError) {
                    prenomError.textContent = 'Le prénom doit contenir entre 3 et 15 caractères.';
                }
                isValid = false; // Marque le formulaire comme invalide
            } else if (prenomError) {
                prenomError.textContent = ''; // Réinitialise le message d'erreur s'il n'y a pas d'erreur
            }

            // Validation du Nom
            const nom = document.getElementById('nom');
            const nomError = document.getElementById('nomError');
            if (nom && (nom.value.length < 3 || nom.value.length > 15)) {
                // Vérifie si le nom a une longueur incorrecte
                if (nomError) {
                    nomError.textContent = 'Le nom doit contenir entre 3 et 15 caractères.';
                }
                isValid = false; // Marque le formulaire comme invalide
            } else if (nomError) {
                nomError.textContent = ''; // Réinitialise le message d'erreur s'il n'y a pas d'erreur
            }

            // Validation de l'Adresse Email
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour vérifier le format de l'email
            if (email && !emailRegex.test(email.value)) {
                // Vérifie si l'email ne correspond pas au format regex spécifié
                if (emailError) {
                    emailError.textContent = 'Veuillez entrer une adresse email valide.';
                }
                isValid = false; // Marque le formulaire comme invalide
            } else if (emailError) {
                emailError.textContent = ''; // Réinitialise le message d'erreur s'il n'y a pas d'erreur
            }

            // Validation du Mot de Passe
            const password = document.getElementById('password');
            const passwordError = document.getElementById('passwordError');
            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
            if (password && !passwordRegex.test(password.value)) {
                // Vérifie si le mot de passe ne correspond pas au format regex spécifié
                if (passwordError) {
                    passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caractères, un chiffre et un caractère spécial.';
                }
                isValid = false; // Marque le formulaire comme invalide
            } else if (passwordError) {
                passwordError.textContent = ''; // Réinitialise le message d'erreur s'il n'y a pas d'erreur
            }

            // Si toutes les validations sont passées avec succès
            if (isValid) {
                form.classList.add('hidden'); // Cache le formulaire
                successMessage.classList.remove('hidden'); // Affiche le message de succès
            }
        });
    }
});
