const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// On dit à Express de servir les fichiers HTML du dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Si on tape l'adresse de base, on affiche index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// On lance le serveur
app.listen(port, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${port}`);
    console.log(`👉 Ouvre ton navigateur à cette adresse pour voir le site.`);
});