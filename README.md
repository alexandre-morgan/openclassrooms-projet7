# Openclassrooms - Formation développeur web - projet 7 :         GROUPOMANIA

Mission :
Créer un réseau social d’entreprise

### &nbsp; Mise en place du projet :

Il est possible de cloner le dépôt entièrement. Il contient un dossier backend et frontend.
Il est conseiller d'ouvrir dans deux fenêtres différentes chacun de ces dossiers avec votre éditeur de code.

NOTES : 
* Ajouter sudo devant les commandes suivantes pour les utilisateurs sur MacOS

#### &nbsp; BACKEND :
* Ouvrir le terminal sur ce dossier
* Installer les dépendances à l'aide de la commande suivante (sur le terminal) : 
* `npm install`
* Puis lancer le server :
* `npm start`

#### &nbsp; FRONTEND :
* Ouvrir le terminal sur le dossier ./FRONTEND/CLI-VERSION
* Installer les dépendances à l'aide de la commande suivante (sur le terminal) : 
* `npm install`
* Lancer le server :
* `npm run serve`

#### &nbsp; BASE DE DONNÉES :
* Dans le dossier MySQL à la racine du projet se trouve la sauvegarde de la base de données utilisée pour le projet.
* Pour l'utiliser, il est nécessaire d'installer mySQL sur votre poste.
* Puis dans un terminal, taper la commande suivante :
* `mysql opcr_projet7 < ./cheminverslefichier/p7_opcr_am.sql`
* Ou encore directement à partir de mySQL :
* `USE nom_base;`
* `SOURCE ./cheminverslefichier/p7_opcr_am.sql;`
* Enfin, vérifier que le server mySQL est actif.

#### &nbsp; ACCÈS A L'APPLICATION :
* Rendez-vous sur votre navigateur :
* [http://localhost:8080](http://localhost:8080)
* Penser à recharger la page si besoin


### &nbsp; AUTEUR :
Alexandre MORGAN
alexandre.morgan.pro@gmail.com