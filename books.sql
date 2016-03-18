CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_published` int(11) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `snippet` text NOT NULL,
  `author` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8