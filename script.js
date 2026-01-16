// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mettre à jour l'année automatiquement dans le footer
    const yearSpan = document.getElementById('currentYear');
    yearSpan.textContent = new Date().getFullYear();

    // 2. Exemple de fonction pour ajouter dynamiquement une alerte/article
    // Vous pourrez utiliser cette fonction pour remplir le site via une base de données plus tard
    function ajouterArticle(axeId, titre, date, resume, lien) {
        // Sélectionner la section correspondante (axe1, axe2 ou axe3)
        const section = document.querySelector(`#${axeId} .cards-container`);
        
        if(section) {
            // Créer le HTML de la carte
            const articleHTML = `
                <article class="card">
                    <h4>${titre}</h4>
                    <p class="date">${date}</p>
                    <p class="summary">${resume}</p>
                    <a href="${lien}" class="read-more" target="_blank">Lire la source →</a>
                </article>
            `;
            
            // Ajouter le HTML à la fin de la section
            section.innerHTML += articleHTML;
        }
    }

    // --- TEST : Décommentez la ligne ci-dessous pour voir l'ajout dynamique ---
    // ajouterArticle('axe3', 'Nouvelle norme C2PA publiée', '2023-10-27', 'Adobe et Microsoft valident la version 1.3...', 'https://c2pa.org');
    
    console.log("Site de veille chargé et prêt.");
});