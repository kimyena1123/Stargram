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

INSERT INTO `post` (userId, content, img_src, createdAt, updatedAt)
VALUE (3, '첫 게시물!', 'https://blog.kakaocdn.net/dn/bTEhUV/btqECug9iOs/mxgZUk4MLJVCK3xtcNe6NK/img.jpg', now(), now());
 
INSERT INTO `post` (userId, content, img_src, createdAt, updatedAt)
VALUE (3, '첫 게시물!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuvA59GPi-APl7owF6UjLQt8Kr91iJ1vDxg&usqp=CAU', now(), now());
 
INSERT INTO `post` (userId, content, img_src, createdAt, updatedAt)
VALUE (4, '풍경이 예뻐요', 'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png', now(), now());
  
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