CREATE DATABASE stargram DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

show databases;

use stargram;

show tables;

CREATE TABLE `user`(
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` VARCHAR(24) NOT NULL,
    `user_pw` VARCHAR(32) NOT NULL,
    `user_name` VARCHAR(16) NOT NULL,
    `user_birth` DATE NOT NULL,
    `profile_img` VARCHAR(500) NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 )ENGINE=InnoDB DEFAULT CHARSET = utf8mb4;
 
 CREATE TABLE `post`(
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `userId` INT NOT NULL,
    `content` VARCHAR(4096) NOT NULL,
	`createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(userId)
    references user(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
 )ENGINE=InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO `post` (userId, content, createdAt, updatedAt)
VALUE (1, '첫 게시물!', now(), now());

INSERT INTO `post` (userId, content, createdAt, updatedAt)
VALUE (1, '1번 user의 두번째 게시물!', now(), now());
 
INSERT INTO `post` (userId, content, createdAt, updatedAt)
VALUE (2, '나는 2번.', now(), now());
 
  CREATE TABLE `postImgs`(
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `postId` INT NOT NULL,
    `img_src` VARCHAR(1000) NULL,
	`createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(postId)
    references post(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
 )ENGINE=InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO `postImgs` (postId, img_src, createdAt, updatedAt)
VALUE (1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHXwJs8bT07WPe-0Akeu6bPfD4wvS-FSyyA&usqp=CAU', now(), now());

INSERT INTO `postImgs` (postId, img_src, createdAt, updatedAt)
VALUE (1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrpRSfTLi2rBRndWJXQmrbGre27t-U16xRg&usqp=CAU', now(), now());

INSERT INTO `postImgs` (postId, img_src, createdAt, updatedAt)
VALUE (2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdI6-mqkGJu5Oyo3Co59rHENy49LFjGM1QQ&usqp=CAU', now(), now());


 CREATE TABLE `comment`(
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `userId` INT NOT NULL,
    `postId` INT NOT NULL,
    `content` VARCHAR(1024) NOT NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(userId) references user(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(postId) references post(id) ON UPDATE CASCADE ON DELETE CASCADE
 )ENGINE=InnoDB DEFAULT CHARSET = utf8mb4;

 INSERT INTO `comment` (userId, postId, content, createdAt, updatedAt)
 VALUE (2, 1, '강아지 귀여워', now(), now());

  INSERT INTO `comment` (userId, postId, content, createdAt, updatedAt)
 VALUE (2, 1, '사진 더 없어?? ', now(), now());

  INSERT INTO `comment` (userId, postId, content, createdAt, updatedAt)
 VALUE (1, 3, '풍경 good', now(), now());

  INSERT INTO `comment` (userId, postId, content, createdAt, updatedAt)
 VALUE (2, 2, '강아지가 아니라 풍경인데??', now(), now());
 
 CREATE TABLE `likes`(
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `userId` INT NOT NULL,
    `postId` INT NOT NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(userId) references user(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(postId) references post(id) ON UPDATE CASCADE ON DELETE CASCADE
 )ENGINE=InnoDB DEFAULT CHARSET = utf8mb4;
 
 CREATE TABLE `channel`(
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`userId` INT NOT NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(userId) references user(id) ON UPDATE CASCADE ON DELETE CASCADE
 )ENGINE=InnoDB DEFAULT CHARSET = utf8mb4;
 
 CREATE TABLE `chat`(
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `userId` INT NOT NULL,
    `channelId` INT NOT NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(userId) references user(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(channelId) references channel(id) ON UPDATE CASCADE ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `message`(
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `userId` INT NOT NULL,
    `channelId` INT NOT NULL,
    `message` VARCHAR(5000) NOT NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(userId) references user(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(channelId) references channel(id) ON UPDATE CASCADE ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET = utf8mb4;