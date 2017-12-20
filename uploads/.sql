-- phpMyAdmin SQL Dump
-- version 4.7.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 19, 2017 at 11:37 AM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oars`
--

-- --------------------------------------------------------

--
-- Table structure for table `Rowers`
--

CREATE TABLE `Rowers` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20171218211605-create-user.js'),
('20171218211615-create-ship.js'),
('20171218211636-create-rower.js'),
('20171218211646-create-training.js'),
('20171219095200-TrainingRower.js'),
('20171219101705-TrainingShip.js'),
('20171219102824-TrainingShip.js'),
('20171219103158-TrainingRower.js'),
('20171219103342-Trainings.js');

-- --------------------------------------------------------

--
-- Table structure for table `Ships`
--

CREATE TABLE `Ships` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `TrainingRower`
--

CREATE TABLE `TrainingRower` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `RowerId` int(11) NOT NULL,
  `TrainingId` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `boat_number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Trainings`
--

CREATE TABLE `Trainings` (
  `id` int(11) NOT NULL,
  `startdate` date DEFAULT NULL,
  `starttime` time DEFAULT NULL,
  `duration` time DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL,
  `boat` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Trainings`
--

INSERT INTO `Trainings` (`id`, `startdate`, `starttime`, `duration`, `createdAt`, `updatedAt`, `UserId`, `boat`) VALUES
(1, '2017-12-10', '07:00:00', '01:00:00', '2017-12-18 00:00:00', '2017-12-18 00:00:00', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `TrainingShip`
--

CREATE TABLE `TrainingShip` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ShipId` int(11) NOT NULL,
  `TrainingId` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `boat_number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'trainer', 'pass', '2017-12-18 00:00:00', '2017-12-18 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Rowers`
--
ALTER TABLE `Rowers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `SequelizeMeta_name_unique` (`name`);

--
-- Indexes for table `Ships`
--
ALTER TABLE `Ships`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `TrainingRower`
--
ALTER TABLE `TrainingRower`
  ADD PRIMARY KEY (`id`),
  ADD KEY `TrainingId` (`TrainingId`),
  ADD KEY `RowerId` (`RowerId`,`TrainingId`) USING BTREE;

--
-- Indexes for table `Trainings`
--
ALTER TABLE `Trainings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `TrainingShip`
--
ALTER TABLE `TrainingShip`
  ADD PRIMARY KEY (`id`),
  ADD KEY `TrainingId` (`TrainingId`),
  ADD KEY `ShipId` (`ShipId`,`TrainingId`) USING BTREE;

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Rowers`
--
ALTER TABLE `Rowers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Ships`
--
ALTER TABLE `Ships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `TrainingRower`
--
ALTER TABLE `TrainingRower`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Trainings`
--
ALTER TABLE `Trainings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `TrainingShip`
--
ALTER TABLE `TrainingShip`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `TrainingRower`
--
ALTER TABLE `TrainingRower`
  ADD CONSTRAINT `trainingrower_ibfk_1` FOREIGN KEY (`RowerId`) REFERENCES `Rowers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `trainingrower_ibfk_2` FOREIGN KEY (`TrainingId`) REFERENCES `Trainings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Trainings`
--
ALTER TABLE `Trainings`
  ADD CONSTRAINT `trainings_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `TrainingShip`
--
ALTER TABLE `TrainingShip`
  ADD CONSTRAINT `trainingship_ibfk_1` FOREIGN KEY (`ShipId`) REFERENCES `Ships` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `trainingship_ibfk_2` FOREIGN KEY (`TrainingId`) REFERENCES `Trainings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
