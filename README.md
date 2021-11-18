# MartyDylan-P6-OpenClassrooms-Piiquante

Sixième projet OpenClassrooms : "Construisez une API sécurisée pour une application d'avis gastronomiques". L'objectif de ce projet est de créer une API sécurisée pour un site fictif d'évaluation de sauces piquante nommé Piiquante.

La partie front-end a été fournis au préalable, vous pouvez la retrouver [ici](https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6), ainsi que le [brief du projet ici](https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Requirements_DW_P6.pdf).

# Langages et technologies utilisés

* NodeJS
* Express
* MongoDB
* JavaScript
* Git et Github

# Exigences de sécurité

* Le mot de passe de l'utilisateur doit être haché.
* L'authentification doit être renforcée sur toutes les routes sauce requises.
* Les adresses électroniques dans la base de données sont uniques et un plugin Mongoose approprié est utilisé pour garantir leur unicité et signaler les erreurs.
* La sécurité de la base de données MongoDB (à partir d'un service tel que  MongoDB Atlas) ne doit pas empêcher l'application de se lancer sur la machine d'un utilisateur.
* Un plugin Mongoose doit assurer la remontée des erreurs issues de la base de données.
* Les versions les plus récentes des logiciels sont utilisées avec des correctifs de sécurité actualisés.
* Le contenu du dossier images ne doit pas être téléchargé sur GitHub.

# Tester le site

Tout d'abord vous aurez besoin d'avoir Node.js, npm et Angular d'installé en local sur votre machine. Ensuite clonez ce dépôt.

### Pour le back-end

Éxecutez la commande `npm install` en étant dans la partie back-end.

Ensuite, éxecutez la commande `nodemon server`.   
Vous pouvez voir dans le termimal que le serveur se lance et qu'il se connecte bien à MongoDB.

Toujours dans ce dossier, créez un dossier "images" pour que les images soient bien enregistrées lors de l'ajout d'une sauce.

### Pour le front-end

Éxecutez la commande `npm install` en étant dans la partie front-end.

Ensuite, éxecutez la commande `npm start`.   
Cela devrait lancer le serveur sur votre navigateur par défaut, sinon rendez vous sur `http://localhost:4200`.
