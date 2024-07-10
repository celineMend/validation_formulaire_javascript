document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('submissionForm');
    const successMessage = document.getElementById('successMessage');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            let isValid = true;

            // Prénom Validation
            const prenom = document.getElementById('prenom');
            const prenomError = document.getElementById('prenomError');
            if (prenom && (prenom.value.length < 3 || prenom.value.length > 15)) {
                if (prenomError) {
                    prenomError.textContent = 'Le prénom doit contenir entre 3 et 15 caractères.';
                }
                isValid = false;
            } else if (prenomError) {
                prenomError.textContent = '';
            }

            // Nom Validation
            const nom = document.getElementById('nom');
            const nomError = document.getElementById('nomError');
            if (nom && (nom.value.length < 3 || nom.value.length > 15)) {
                if (nomError) {
                    nomError.textContent = 'Le nom doit contenir entre 3 et 15 caractères.';
                }
                isValid = false;
            } else if (nomError) {
                nomError.textContent = '';
            }

            // Email Validation
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailRegex.test(email.value)) {
                if (emailError) {
                    emailError.textContent = 'Veuillez entrer une adresse email valide.';
                }
                isValid = false;
            } else if (emailError) {
                emailError.textContent = '';
            }

            // Mot de Passe Validation
            const password = document.getElementById('password');
            const passwordError = document.getElementById('passwordError');
            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
            if (password && !passwordRegex.test(password.value)) {
                if (passwordError) {
                    passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caractères, un chiffre et un caractère spécial.';
                }
                isValid = false;
            } else if (passwordError) {
                passwordError.textContent = '';
            }

            if (isValid) {
                form.classList.add('hidden');
                successMessage.classList.remove('hidden');
            }
        });
    }
});
