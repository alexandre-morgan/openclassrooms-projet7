-- MySQL dump 10.13  Distrib 8.0.23, for macos10.15 (x86_64)
--
-- Host: localhost    Database: opcr_projet7
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Articles`
--

DROP TABLE IF EXISTS `Articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Articles` (
  `idArticle` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text,
  `imageUrl` varchar(255) DEFAULT NULL,
  `isGif` tinyint DEFAULT NULL,
  `userId` int unsigned DEFAULT NULL,
  `dateOfCreation` datetime DEFAULT NULL,
  `dateOfModification` datetime DEFAULT NULL,
  `likes` int DEFAULT NULL,
  `dislikes` int DEFAULT NULL,
  PRIMARY KEY (`idArticle`),
  KEY `fk_user_id` (`userId`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`userId`) REFERENCES `Users` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Articles`
--

LOCK TABLES `Articles` WRITE;
/*!40000 ALTER TABLE `Articles` DISABLE KEYS */;
INSERT INTO `Articles` VALUES (60,'Le Canadien balaie les Jets et accède au carré d\'as !!','Le Canadien de Montréal a complété le balayage avec un gain de 3 à 2 en prolongation face aux Jets de Winnipeg, lundi soir, au Centre Bell.\n\nLe CH a donc remporté sa série de deuxième tour en quatre parties et a ainsi atteint le carré d’as des séries éliminatoires de la coupe Stanley. Il s’agit d’une première pour l’équipe de la Belle Province depuis la saison 2013-2014.\n\nC’est une réussite de Tyler Toffoli qui a fait la différence en surtemps. Le meilleur buteur du Canadien en saison régulière a bénéficié d’un beau relais de Cole Caufield pour sceller l’issue de la série.\n\nLe Tricolore avait amorcé le match en lion, s’inscrivant à la marque deux fois lors du premier vingt. Profitant de la présence d’Andrew Copp au cachot, Erik Gustafsson a inscrit son premier but dans l’uniforme du Canadien. Le défenseur a feinté de refiler le disque à un coéquipier, ce qui lui a ouvert un angle de tir et lui a permis de déjouer Connor Hellebuyck.\n\nDans la dernière minute du premier engagement, Artturi Lehkonen a redirigé un lancer de la pointe de Brett Kulak dans le haut du filet adverse.\n\nLes Jets ont toutefois trouvé le moyen de niveler le pointage lors de la période médiane. Le défenseur Logan Stanley a trompé la vigilance de Carey Price deux fois en moins de quatre minutes. C’était la toute première fois que le joueur de 6 pi 7 po amassait deux buts dans un même match.\n\nAu final, Price a repoussé 14 des 16 lancers des Jets, tandis que Hellebuyck a été testé à 41 reprises.\n\nEn demi-finale, le CH affrontera le gagnant de la série qui oppose les Golden Knights de Vegas et l’Avalanche du Colorado. Présentement, les deux formations ont chacune remporté deux matchs.\n\nEn bref\nLe défenseur Jeff Petry n’a pas pris part à la rencontre. Il s’était blessé à des doigts de la main droite dans l’affrontement de la veille. C’est Alexander Romanov qui a pris sa place dans la formation du CH, disputant ainsi son premier match en séries éliminatoires. Le Russe a été l’arrière le moins utilisé par Dominique Ducharme, lui qui a passé un peu plus de neuf minutes sur la patinoire.','',2,33,'2021-06-09 14:35:26','2021-06-09 14:35:26',0,0),(61,'C\'est Roland Garros !','','http://localhost:3000/images/200_(1).gif1623264157820.gif',1,28,'2021-06-09 14:42:37','2021-06-09 14:42:37',0,0),(62,'Bientôt le Tour de France !','','http://localhost:3000/images/2021-Tour-de-France-route.jpeg1623264245518.jpg',1,33,'2021-06-09 14:44:05','2021-06-09 14:44:05',0,0),(71,'Jeff Bezos annonce le premier vol de sa fusée Blue Origin','C\'est une nouvelle page du tourisme spatial qui se tourne. Le premier voyage touristique dans l\'espace de la compagnie Blue Origin décollera le 20 juillet prochain. Jeff Bezos sera de la partie. \n\nLe milliardaire Jeff Bezos, le patron d\'Amazon, lancera le premier vol touristique dans l\'espace de sa société Blue Origin. Il a annoncé qu\'il participerait lui-même à ce vol. \"Je veux faire ce vol parce que c\'est un rêve d\'enfant, ça représente beaucoup pour moi\", a-t-il déclaré. Il sera accompagné par des pilotes et des astronautes, à bord d\'un vaisseau qui a déjà volé en pilote automatique. Il a proposé à son propre frère de l\'accompagner. \n\nLa course aux étoiles\nIl y a vingt ans, le millionnaire américain Dennis Tito réalisait le premier vol touristique dans l\'espace. Aujourd\'hui, c\'est à bord de leurs propres vaisseaux que les géants de la Silicon Valley s\'envolent. Elon Musk a peut-être raflé les contrats avec la Nasa. Mais c\'est bien Jeff Bezos qui voyagera le premier en orbite. Il sera suivi dans quelques mois par l\'entrepreneur Richard Branson. ','',2,30,'2021-06-09 15:31:40','2021-06-09 15:31:40',0,0),(72,'Ma future voiture !','','http://localhost:3000/images/tesla.gif1623267222028.gif',1,30,'2021-06-09 15:33:42','2021-06-09 15:33:42',0,0),(83,'Tournoi de Poker du Lundi 14 Juin.','Bonjour à tous,\nJ\'organise le tournoi de poker annuel des employés de Groupomania !\nMettez en commentaires si vous voulez y participer pour que je valide votre inscription et que je comptabilise le nombre de participants.\nMerci, Robert.','',2,30,'2021-06-09 16:10:52','2021-06-09 16:10:52',0,0);
/*!40000 ALTER TABLE `Articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Articles9`
--

DROP TABLE IF EXISTS `Articles9`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Articles9` (
  `idArticle` int unsigned NOT NULL AUTO_INCREMENT,
  `idUser` varchar(30) DEFAULT NULL,
  `title` varchar(50) NOT NULL,
  `imageUrl` varchar(250) DEFAULT NULL,
  `likes` int unsigned DEFAULT NULL,
  `dislikes` int unsigned DEFAULT NULL,
  `dateOfCreation` datetime NOT NULL,
  `dateOfModification` datetime NOT NULL,
  PRIMARY KEY (`idArticle`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Articles9`
--

LOCK TABLES `Articles9` WRITE;
/*!40000 ALTER TABLE `Articles9` DISABLE KEYS */;
INSERT INTO `Articles9` VALUES (18,'','America','http://localhost:3000/images/america-1238707_1280.jpg1620161605346.jpg',0,0,'2021-05-04 16:53:25','2021-05-04 16:53:25'),(19,'','America 2','http://localhost:3000/images/america-1238707_1280.jpg1620161686059.jpg',0,0,'2021-05-04 16:54:46','2021-05-04 16:54:46'),(20,'','Voiture','http://localhost:3000/images/200.gif1620219327145.gif',0,0,'2021-05-05 08:55:27','2021-05-05 08:55:27');
/*!40000 ALTER TABLE `Articles9` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ArticlesR`
--

DROP TABLE IF EXISTS `ArticlesR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ArticlesR` (
  `idArticle` smallint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `content` varchar(150) DEFAULT NULL,
  `idUser` varchar(50) NOT NULL,
  `dateOfCreation` datetime DEFAULT NULL,
  `dateOfModification` datetime DEFAULT NULL,
  PRIMARY KEY (`idArticle`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ArticlesR`
--

LOCK TABLES `ArticlesR` WRITE;
/*!40000 ALTER TABLE `ArticlesR` DISABLE KEYS */;
INSERT INTO `ArticlesR` VALUES (4,'Encore un nouvel article','Encore un nouvel article','','2021-05-03 13:43:43','2021-05-03 13:43:43'),(9,'Nouvel article','Je test utilisation évènement parent depuis enfant','','2021-05-04 14:23:54','2021-05-04 14:23:54'),(13,'Encore un nouvel article','vsvsvs','','2021-05-04 14:36:10','2021-05-04 14:36:10'),(17,'HVSL633063A006I','sacwva','','2021-05-04 14:42:56','2021-05-04 14:42:56');
/*!40000 ALTER TABLE `ArticlesR` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comments`
--

DROP TABLE IF EXISTS `Comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comments` (
  `commentId` int unsigned NOT NULL AUTO_INCREMENT,
  `content` text,
  `dateOfCreation` datetime DEFAULT NULL,
  `dateOfModification` datetime DEFAULT NULL,
  `userId` int unsigned DEFAULT NULL,
  `idArticle` int unsigned DEFAULT NULL,
  PRIMARY KEY (`commentId`),
  KEY `fk_comments_user_id` (`userId`),
  KEY `fk_comments_id_article` (`idArticle`),
  CONSTRAINT `fk_comments_id_article` FOREIGN KEY (`idArticle`) REFERENCES `Articles` (`idArticle`) ON DELETE CASCADE,
  CONSTRAINT `fk_comments_user_id` FOREIGN KEY (`userId`) REFERENCES `Users` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments`
--

LOCK TABLES `Comments` WRITE;
/*!40000 ALTER TABLE `Comments` DISABLE KEYS */;
INSERT INTO `Comments` VALUES (33,'J\'ai trop hâte !','2021-06-09 14:55:12','2021-06-09 14:55:12',33,61),(34,'Je ne m\'intéresse pas au vélos...','2021-06-09 14:56:25','2021-06-09 14:56:25',28,62),(35,'Présent !','2021-06-09 16:11:31','2021-06-09 16:11:31',33,83),(36,'Moi aussi !','2021-06-09 16:12:07','2021-06-09 16:12:07',28,83);
/*!40000 ALTER TABLE `Comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Stuff`
--

DROP TABLE IF EXISTS `Stuff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Stuff` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  `imageUrl` varchar(150) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `userId` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Stuff`
--

LOCK TABLES `Stuff` WRITE;
/*!40000 ALTER TABLE `Stuff` DISABLE KEYS */;
INSERT INTO `Stuff` VALUES (1,'Mon premier objet','Les infos de mon premier objet','https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',4900,'qsomihvqios'),(2,'Mon deuxième objet','Les infos de mon deuxième objet','https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',2900,'qsomihvqios');
/*!40000 ALTER TABLE `Stuff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `userId` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `dateOfCreation` datetime NOT NULL,
  `firstname` varchar(25) NOT NULL,
  `lastname` varchar(25) NOT NULL,
  `isActive` smallint NOT NULL,
  `lastLog` varchar(255) DEFAULT NULL,
  `presentLog` datetime DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `unique_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (28,'test@test.com','$2b$10$0IUgJ41zTxQOIRYT5ya4eeSDNhxB76m6e5S9Tez/fLgFU4TC5T8Im','2021-05-04 14:02:27','Léa','SID',1,'1623270607225',NULL),(30,'jetestmaconnexion@test.com','$2b$10$zDpl0HBLZav5j3K9z8HlTe0nphiyIDUSg7tQdwE1vMSU0/Ftp8GGm','2021-05-05 09:33:48','Robert','DEMIRO',1,'1623269478116',NULL),(31,'test2@test.com','$2b$10$3rrp/5QYGV10JFH8pckCWOI9bTJQ/RZlL8F.s.K2AVqUkYsQgQ9yW','2021-05-12 16:45:23','undefined','MORGAN',1,NULL,NULL),(33,'test23@test.com','$2b$10$bkZNeCQyyrW3lsC4FzwaluL9NKEeA39cqi07ky9m6l/vljXLYUnk.','2021-05-12 16:48:04','Alexandre','MORGAN',1,'1623272413199',NULL),(35,'test1@test.com','$2b$10$/F8RCkYVwo08BonLeNsMgedu6CzEaAEo0g93WLIjjnEV5ivHq5Uey','2021-05-17 19:43:23','Prénom test','Nom test',1,NULL,NULL),(50,'email@email.com','$2b$10$DuNrUXRFPlGDJH.9/W3yZOXy8NL/5GHKAx.m2GMaRoll/9RmMjMTa','2021-05-25 11:31:36','email','email',1,'1621956714994',NULL);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-10  9:59:37
