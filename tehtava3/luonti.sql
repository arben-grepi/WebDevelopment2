-- --------------------------------------------------------
-- Verkkotietokone:              127.0.0.1
-- Palvelinversio:               10.11.0-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Versio:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping database structure for tehtava3
DROP DATABASE IF EXISTS `tehtava3`;

CREATE DATABASE IF NOT EXISTS `tehtava3` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `tehtava3`;

-- Creating table for tehtava3.henkilot
CREATE TABLE IF NOT EXISTS `henkilot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `etunimi` varchar(100) NOT NULL,
  `sukunimi` varchar(100) NOT NULL,
  `kutsumanimi` varchar(100) NOT NULL,
  `syntymavuosi` date NOT NULL,
  `paino` decimal(5,2) NOT NULL,
  `kuvalinkki` varchar(255) NOT NULL,
  `laji` varchar(100) NOT NULL,
  `saavutukset` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

-- Insert actual NBA player data into the henkilot table
INSERT INTO `henkilot` (`etunimi`, `sukunimi`, `kutsumanimi`, `syntymavuosi`, `paino`, `kuvalinkki`, `laji`, `saavutukset`) VALUES
  ('LeBron', 'James', 'King James', '1984-12-30', 113.4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/250px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg', 'Basketball', '4× NBA Champion, 4× NBA MVP'),
  ('Stephen', 'Curry', 'Steph', '1988-03-14', 86.2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Stephen_Curry_dribbling_2016_%28cropped%29.jpg/800px-Stephen_Curry_dribbling_2016_%28cropped%29.jpg', 'Basketball', '4× NBA Champion, 2× NBA MVP'),
  ('Kevin', 'Durant', 'KD', '1988-09-29', 109.8, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Kevin_Durant_%28Wizards_v._Warriors%2C_1-24-2019%29_%28cropped%29.jpg/800px-Kevin_Durant_%28Wizards_v._Warriors%2C_1-24-2019%29_%28cropped%29.jpg', 'Basketball', '2× NBA Champion, 2× NBA MVP');

-- Finalizing
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
