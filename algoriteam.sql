-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2018 at 06:40 AM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `algoriteam`
--

-- --------------------------------------------------------

--
-- Table structure for table `houseandlot`
--

CREATE TABLE IF NOT EXISTS `houseandlot` (
`h_id` int(10) NOT NULL,
  `la` int(10) NOT NULL,
  `fa` int(10) NOT NULL,
  `address` text NOT NULL,
  `year_ac` int(10) NOT NULL,
  `cond` text NOT NULL,
  `price` int(20) NOT NULL,
  `date_added` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `houseandlot`
--

INSERT INTO `houseandlot` (`h_id`, `la`, `fa`, `address`, `year_ac`, `cond`, `price`, `date_added`) VALUES
(11, 70, 150, 'Blk 231 Lot 31 Santolan, Pasig CIty', 2005, 'Poor', 1200000, '2018-11-15 15:43:47'),
(12, 457, 759, '37 Ilang-Ilang st.', 2003, 'Poor', 1200000, '2018-11-16 11:43:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `houseandlot`
--
ALTER TABLE `houseandlot`
 ADD PRIMARY KEY (`h_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `houseandlot`
--
ALTER TABLE `houseandlot`
MODIFY `h_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
