CREATE DATABASE `Drink-me`;

  USE `Drink-me`;

  DROP TABLE IF EXISTS`teacher_In_Subject`;
  DROP TABLE IF EXISTS`Teachers`;
  DROP TABLE IF EXISTS`Groups`;
  
    CREATE TABLE `Teachers`(
        `id`  BIGINT AUTO_INCREMENT,
        `email` VARCHAR(200) NOT NULL UNIQUE,
        `fristname` VARCHAR(120) NOT NULL ,
        `lastname` VARCHAR(120) NOT NULL,

        PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DFFAULT CHARSET utf8mb4;

    CREATE TABLE `Groups`(
        `id` BIGINT,
        `name` VARCHAR(120),

        PRIMARY KEY (`id`)
    )ENGINE=InnoDB DFFAULT CHARSET utf8mb4;

    CREATE TABLE `Teacher_In_Subject`(
        `id` BIGINT,
        `teacher_id` BIGINT,
        `group_id` BIGINT,

        PRIMARY KEY (`id`)
        CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers`.`id`,
        CONSTRAINT `groups_ibfk_2` FOREIGN KEY (`group_id`) REFERENCES `teachers`.`id`,

    )ENGINE=InnoDB DFFAULT CHARSET utf8mb4;