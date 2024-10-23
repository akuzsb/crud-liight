CREATE TABLE `db_liight`.`users` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NULL,
  `lastname` VARCHAR(100) NULL,
  `password` VARCHAR(100) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

INSERT INTO `db_liight`.`users` (`email`, `name`, `lastname`, `password`) VALUES
('augustosn24@gmail.com', 'Augusto', 'Santillan', '$2b$10$SPt0BrrUjuhnXnH3OLNBwe96CQUpDdr9yQJme9KdVXGL9aENm7FEe');
