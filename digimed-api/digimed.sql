-- MariaDB dump 10.19  Distrib 10.6.12-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: gateway01.us-west-2.prod.aws.tidbcloud.com    Database: digimed
-- ------------------------------------------------------
-- Server version	5.7.25-TiDB-Serverless

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `medicamentos`
--

DROP TABLE IF EXISTS `medicamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medicamentos` (
  `id_medicamento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `nombre_comercial` varchar(250) NOT NULL,
  `presentacion` varchar(250) NOT NULL,
  PRIMARY KEY (`id_medicamento`) /*T![clustered_index] CLUSTERED */
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin AUTO_INCREMENT=30001;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicamentos`
--

LOCK TABLES `medicamentos` WRITE;
/*!40000 ALTER TABLE `medicamentos` DISABLE KEYS */;
INSERT INTO `medicamentos` VALUES (1,'Ibuprofeno','Advil','Tableta'),(2,'Morfina','MSContin','Tableta'),(3,'Paracetamol','Tylenol','Cápsula'),(4,'Omeprazol','Prilosec','Cápsula'),(5,'Amoxicilina','Amoxil','Suspensión'),(6,'Loratadina','Claritin','Tableta'),(7,'Atorvastatina','Lipitor','Tableta'),(8,'Sertralina','Zoloft','Tableta'),(9,'Salbutamol','Ventolin','Inhalador'),(10,'Naproxeno','Aleve','Tableta'),(11,'Losartán','Cozaar','Tableta'),(12,'Cetirizina','Zyrtec','Tableta'),(13,'Metformina','Glucophage','Tableta'),(14,'Lisinopril','Zestril','Tableta'),(15,'Metoprolol','Lopressor','Tableta'),(16,'Ranitidina','Zantac','Tableta'),(17,'Fluoxetina','Prozac','Cápsula'),(18,'Ciprofloxacino','Cipro','Tableta'),(19,'Amlodipino','Norvasc','Tableta'),(20,'Montelukast','Singulair','Tableta'),(21,'Escitalopram','Lexapro','Tableta'),(22,'Furosemida','Lasix','Tableta'),(23,'Enalapril','Vasotec','Tableta'),(24,'Valsartán','Diovan','Tableta'),(25,'Tramadol','Ultram','Tableta'),(26,'Alprazolam','Xanax','Tableta'),(27,'Rosuvastatina','Crestor','Tableta'),(28,'Levotiroxina','Synthroid','Tableta'),(29,'Pregabalina','Lyrica','Cápsula'),(30,'Gabapentina','Neurontin','Cápsula'),(31,'LosartánPotásico','Hyzaar','Tableta'),(32,'Candesartán','Atacand','Tableta'),(33,'Atenolol','Tenormin','Tableta'),(34,'Carvedilol','Coreg','Tableta'),(35,'Dexmetilfenidato','Concerta','Tableta'),(36,'Levetiracetam','Keppra','Tableta'),(37,'Quetiapina','Seroquel','Tableta'),(38,'Venlafaxina','Effexor','Cápsula'),(39,'Amiodarona','Cordarone','Tableta'),(40,'Bupropión','Wellbutrin','Tableta'),(41,'Mirtazapina','Remeron','Tableta'),(42,'Tamsulosina','Flomax','Cápsula'),(43,'Dextrometorfano','Robitussin','Jarabe'),(44,'Codeína','Tylenol3','Tableta'),(45,'Guayacolato','RobitussinDM','Jarabe'),(46,'Acetaminofén','Excedrin','Tableta'),(47,'Lorazepam','Ativan','Tableta'),(48,'Diazepam','Valium','Tableta'),(49,'Cefalexina','Keflex','Cápsula'),(50,'Metronidazol','Flagyl','Tableta'),(51,'Clonazepam','Klonopin','Tableta'),(52,'Aciclovir','Zovirax','Crema'),(53,'Sildenafil','Viagra','Tableta'),(54,'Esomeprazol','Nexium','Cápsula'),(55,'Lansoprazol','Prevacid','Cápsula'),(56,'Pantoprazol','Protonix','Tableta'),(57,'Rabeprazol','Aciphex','Tableta'),(58,'Beclometasona','Qvar','Inhalador'),(59,'Fluticasona','Flonase','SprayNasal'),(60,'Budesonida','Pulmicort','Inhalador'),(61,'Mometasona','Nasonex','SprayNasal'),(62,'Aclidinio','Tudorza','Inhalador'),(63,'Loperamida','Imodium','Cápsula'),(64,'Desloratadina','Clarinex','Tableta'),(65,'Cetotifeno','Zaditor','GotasOftálmicas'),(66,'Benzonatato','Tessalon','Cápsula'),(67,'Fexofenadina','Allegra','Tableta'),(68,'Guafenesina','Mucinex','Tableta'),(69,'Prometazina','Phenergan','Tableta'),(70,'Bromfeniramina','Dimetapp','Jarabe'),(71,'Hidroxicina','Atarax','Tableta'),(72,'Cefuroxima','Ceftin','Tableta'),(73,'Azitromicina','Zithromax','Tableta'),(74,'Levofloxacino','Levaquin','Tableta'),(75,'Cetoprofeno','Profenid','Tableta'),(76,'Rofecoxib','Vioxx','Tableta'),(77,'NaproxenoSódico','Aflaxen','Tableta'),(78,'Celecoxib','Celebrex','Cápsula'),(79,'Codeína+Paracetamol','Tylenol4','Tableta'),(80,'Tramadol+Paracetamol','Ultracet','Tableta'),(81,'Hidromorfona','Dilaudid','Tableta'),(82,'Pseudoefedrina','Sudafed','Tableta'),(83,'Aspirina','Bayer','Tableta'),(84,'Dipirona','Novalgina','Tableta'),(85,'Rivotril','Clonazepam','Tableta'),(86,'Pramipexol','Mirapex','Tableta'),(87,'Levodopa+Carbidopa','Sinemet','Tableta'),(88,'Donepezilo','Aricept','Tableta'),(89,'Alendronato','Fosamax','Tableta');
/*!40000 ALTER TABLE `medicamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicos`
--

DROP TABLE IF EXISTS `medicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medicos` (
  `id_medico` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `apellido` varchar(250) NOT NULL,
  `matricula` varchar(250) NOT NULL,
  `especialidad` varchar(250) NOT NULL,
  `activo` tinyint(4) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  PRIMARY KEY (`id_medico`) /*T![clustered_index] CLUSTERED */,
  KEY `fk_medicos_usuarios1_idx` (`id_usuario`),
  CONSTRAINT `fk_medicos_usuarios1` FOREIGN KEY (`id_usuario`) REFERENCES `digimed`.`usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin AUTO_INCREMENT=30001;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicos`
--

LOCK TABLES `medicos` WRITE;
/*!40000 ALTER TABLE `medicos` DISABLE KEYS */;
INSERT INTO `medicos` VALUES (1,'Emily','Johnson','67890','Pediatría',1,2),(2,'John','Smith','12345','Medicina Interna',1,1);
/*!40000 ALTER TABLE `medicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pacientes`
--

DROP TABLE IF EXISTS `pacientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pacientes` (
  `id_paciente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `dni` varchar(45) NOT NULL,
  `afiliado` varchar(45) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  PRIMARY KEY (`id_paciente`) /*T![clustered_index] CLUSTERED */,
  KEY `fk_pacientes_usuarios1_idx` (`id_usuario`),
  CONSTRAINT `fk_pacientes_usuarios1` FOREIGN KEY (`id_usuario`) REFERENCES `digimed`.`usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin AUTO_INCREMENT=30001;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacientes`
--

LOCK TABLES `pacientes` WRITE;
/*!40000 ALTER TABLE `pacientes` DISABLE KEYS */;
INSERT INTO `pacientes` VALUES (1,'Laura','Brown','12345678','98765',3),(2,'Daniel','Johnson','23456789','87654',4),(3,'Sofia','Martinez','34567890','76543',5);
/*!40000 ALTER TABLE `pacientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recetas`
--

DROP TABLE IF EXISTS `recetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recetas` (
  `id_receta` int(11) NOT NULL AUTO_INCREMENT,
  `prescription_date` date NOT NULL,
  `firma` varchar(250) NOT NULL,
  `id_medico` int(11) NOT NULL,
  `id_paciente` int(11) NOT NULL,
  `id_medicamento` int(11) NOT NULL,
  PRIMARY KEY (`id_receta`) /*T![clustered_index] CLUSTERED */,
  KEY `fk_recetas_medicos_idx` (`id_medico`),
  KEY `fk_recetas_pacientes1_idx` (`id_paciente`),
  KEY `fk_recetas_medicamentos1_idx` (`id_medicamento`),
  CONSTRAINT `fk_recetas_medicos` FOREIGN KEY (`id_medico`) REFERENCES `digimed`.`medicos` (`id_medico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_recetas_pacientes1` FOREIGN KEY (`id_paciente`) REFERENCES `digimed`.`pacientes` (`id_paciente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_recetas_medicamentos1` FOREIGN KEY (`id_medicamento`) REFERENCES `digimed`.`medicamentos` (`id_medicamento`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recetas`
--

LOCK TABLES `recetas` WRITE;
/*!40000 ALTER TABLE `recetas` DISABLE KEYS */;
/*!40000 ALTER TABLE `recetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(250) DEFAULT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `activo` tinyint(4) NOT NULL,
  PRIMARY KEY (`id_usuario`) /*T![clustered_index] CLUSTERED */
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin AUTO_INCREMENT=30001;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'john@example.com','john','john123',1),(2,'emily@example.com','emily','emily456',1),(3,'david@example.com','david','davidpass',1),(4,'sarah@example.com','sarah','s@r@hP@ss',1),(5,'michael@example.com','michael','mic456',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-28 20:03:18
