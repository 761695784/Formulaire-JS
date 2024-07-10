//
document.addEventListener('DOMContentLoaded', function() {
    //rekuperation du formulaire par son id 
    let myForm = document.getElementById('myForm');
    // Ajout d'un écouteur d'événement sur le formulaire pour le soumission
    myForm.addEventListener('submit', function(event) {
        // Empêcher le comportement par défaut du formulaire (soumission immédiate)
        event.preventDefault(); 
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
            document.getElementById('prenomError').innerText="Le prenom doit comporter entre 3 et 15 caractères";
            return;
        }
        if (nom.length < 3 || nom.length > 15) {
            document.getElementById('nomError').innerText="Le nom doit comporter entre 3 et 15 caractères";
            return;
        }

        // Validation de l'email
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            document.getElementById('emailError').innerText="L'email est invalide";
            return;
        }

        // Validation du mot de passe
        if (password.length < 8) {
            document.getElementById('passwordError').innerText="Le mot de passe doit comporter au moins 8 caractères";   
            return;
        }

        // Si toutes les validations passent, soumettre le formulaire
        alert('Formulaire soumis avec succès!');
        myForm.submit();
    });
});
