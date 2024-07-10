document.addEventListener('DOMContentLoaded', function() {
    let myForm = document.getElementById('myForm');
    myForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le navigateur de soumettre le formulaire normalement

        // Récupération des données du formulaire
        let prenom = document.getElementById('prenom').value.trim();
        let nom = document.getElementById('nom').value.trim();
        let email = document.getElementById('email').value.trim();
        let password = document.getElementById('password').value.trim();

        // Validation des champs
        if (prenom === '' || nom === '' || email === '' || password === '') {
            alert('Tous les champs doivent être remplis');
            return;
        }

        // Validation de la longueur des champs prénom et nom
        if (prenom.length < 3 || prenom.length > 15) {
            alert('Le prénom doit comporter entre 3 et 15 caractères');
            return;
        }
        if (nom.length < 3 || nom.length > 15) {
            alert('Le nom doit comporter entre 3 et 15 caractères');
            return;
        }

        // Validation de l'email
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alert('Veuillez saisir un email valide');
            return;
        }

        // Validation du mot de passe
        if (password.length < 8) {
            alert('Le mot de passe doit comporter au moins 8 caractères');
            return;
        }

        // Si toutes les validations passent, soumettre le formulaire
        alert('Formulaire soumis avec succès!');
        myForm.submit();
    });
});
