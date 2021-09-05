-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2021 at 02:14 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bateaupirate`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles_commande`
--

CREATE TABLE `articles_commande` (
  `id` int(11) NOT NULL,
  `idCommande` int(11) NOT NULL,
  `idVinyl` int(11) NOT NULL,
  `montantHT` float NOT NULL DEFAULT 0,
  `quantite` tinyint(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `articles_commande`
--

INSERT INTO `articles_commande` (`id`, `idCommande`, `idVinyl`, `montantHT`, `quantite`) VALUES
(1, 3, 4, 0, 1),
(2, 2, 2, 0, 1),
(3, 7, 4, 0, 3),
(4, 7, 3, 0, 2),
(5, 3, 1, 0, 4),
(6, 2, 2, 0, 3),
(7, 3, 5, 0, 2),
(92, 230, 2, 0, 3),
(93, 230, 3, 0, 5),
(94, 231, 3, 32.97, 3),
(95, 232, 2, 159.9, 10),
(96, 232, 3, 76.93, 7),
(97, 233, 2, 31.98, 2),
(98, 234, 3, 10.99, 1),
(99, 234, 2, 31.98, 2),
(100, 235, 3, 10.99, 1),
(101, 236, 3, 10.99, 1),
(102, 237, 2, 15.99, 1),
(103, 237, 3, 10.99, 1),
(104, 238, 2, 15.99, 1),
(105, 239, 2, 15.99, 1),
(106, 240, 2, 47.97, 3),
(107, 241, 2, 111.93, 7),
(108, 242, 3, 10.99, 1),
(109, 243, 3, 10.99, 1),
(110, 244, 3, 10.99, 1),
(111, 245, 2, 63.96, 4),
(112, 246, 3, 10.99, 1),
(113, 247, 3, 54.95, 5),
(114, 248, 2, 15.99, 1),
(115, 248, 1, 19.99, 1),
(116, 249, 3, 10.99, 1),
(117, 250, 3, 10.99, 1),
(118, 251, 3, 32.97, 3),
(119, 252, 3, 10.99, 1),
(120, 253, 2, 15.99, 1),
(121, 254, 2, 15.99, 1),
(122, 255, 3, 10.99, 1),
(123, 256, 3, 10.99, 1),
(124, 257, 3, 10.99, 1),
(125, 258, 3, 10.99, 1),
(126, 259, 3, 10.99, 1),
(127, 260, 3, 10.99, 1),
(128, 261, 3, 10.99, 1),
(129, 262, 3, 10.99, 1),
(130, 263, 2, 15.99, 1),
(131, 264, 3, 10.99, 1),
(132, 265, 3, 10.99, 1),
(133, 266, 2, 15.99, 1),
(134, 267, 3, 10.99, 1),
(135, 268, 3, 10.99, 1),
(136, 269, 3, 10.99, 1),
(137, 270, 3, 10.99, 1),
(138, 271, 3, 10.99, 1),
(139, 272, 3, 10.99, 1),
(140, 273, 3, 10.99, 1),
(141, 274, 3, 10.99, 1),
(142, 275, 3, 10.99, 1),
(143, 275, 2, 15.99, 1),
(144, 277, 2, 15.99, 1),
(145, 277, 3, 10.99, 1),
(146, 278, 3, 10.99, 1),
(147, 279, 2, 15.99, 1),
(148, 280, 3, 10.99, 1),
(149, 281, 3, 10.99, 1),
(150, 282, 3, 10.99, 1),
(151, 283, 3, 10.99, 1),
(152, 283, 2, 15.99, 1),
(153, 283, 1, 19.99, 1),
(154, 284, 2, 15.99, 1),
(155, 285, 3, 10.99, 1),
(156, 285, 2, 15.99, 1),
(157, 286, 3, 10.99, 1),
(158, 287, 2, 15.99, 1),
(159, 288, 1, 39.98, 2),
(160, 288, 2, 47.97, 3),
(161, 288, 3, 10.99, 1),
(162, 289, 3, 10.99, 1),
(163, 289, 2, 15.99, 1),
(164, 289, 1, 59.97, 3),
(165, 290, 1, 19.99, 1),
(166, 290, 3, 21.98, 2),
(167, 291, 2, 159.9, 10),
(168, 291, 3, 21.98, 2),
(169, 292, 3, 109.9, 10),
(170, 292, 4, 33.98, 2),
(171, 293, 4, 33.98, 2),
(172, 293, 1, 59.97, 3),
(173, 294, 2, 15.99, 1),
(174, 295, 2, 15.99, 1),
(175, 295, 3, 10.99, 1),
(176, 296, 4, 16.99, 1),
(177, 297, 3, 43.96, 4),
(178, 298, 1, 39.98, 2),
(179, 298, 3, 21.98, 2),
(180, 298, 2, 207.87, 13),
(181, 299, 3, 10.99, 1),
(182, 300, 3, 241.78, 22),
(183, 300, 4, 50.97, 3),
(184, 300, 1, 99.95, 5),
(185, 301, 4, 33.98, 2),
(186, 301, 6, 9.99, 1),
(187, 301, 1, 2058.97, 103),
(188, 302, 5, 9.99, 1),
(189, 302, 6, 9.99, 1),
(190, 303, 1, 39.98, 2),
(191, 304, 1, 39.98, 2),
(192, 304, 6, 9.99, 1),
(193, 304, 4, 33.98, 2),
(194, 305, 2, 15.99, 1),
(195, 305, 4, 16.99, 1),
(196, 306, 2, 47.97, 3),
(197, 306, 1, 39.98, 2),
(198, 307, 2, 15.99, 1),
(199, 308, 2, 15.99, 1),
(200, 309, 1, 19.99, 1),
(201, 310, 1, 19.99, 1),
(202, 311, 1, 19.99, 1),
(203, 312, 1, 19.99, 1),
(204, 313, 1, 19.99, 1),
(205, 314, 2, 19.99, 1),
(206, 315, 4, 19.99, 1),
(207, 316, 1, 19.99, 1),
(208, 317, 1, 19.99, 1),
(209, 318, 1, 19.99, 1),
(210, 319, 1, 19.99, 1),
(211, 320, 1, 19.99, 1),
(212, 321, 1, 19.99, 1),
(213, 322, 1, 19.99, 1),
(214, 322, 4, 19.99, 1),
(215, 322, 2, 19.99, 1),
(216, 323, 1, 19.99, 1),
(217, 323, 2, 19.99, 1),
(218, 324, 1, 79.96, 4),
(219, 324, 4, 19.99, 1),
(220, 324, 2, 59.97, 3),
(221, 325, 1, 19.99, 1),
(222, 325, 2, 19.99, 1),
(223, 326, 4, 19.99, 1),
(224, 326, 2, 19.99, 1),
(225, 326, 1, 19.99, 1),
(226, 327, 1, 59.97, 3),
(227, 328, 1, 39.98, 2),
(228, 328, 2, 19.99, 1),
(229, 329, 1, 19.99, 1),
(230, 330, 1, 19.99, 1),
(231, 330, 2, 19.99, 1),
(232, 331, 1, 19.99, 1),
(233, 332, 1, 19.99, 1),
(234, 333, 5, 19.99, 1),
(235, 334, 1, 19.99, 1),
(236, 335, 2, 59.97, 3),
(237, 335, 1, 19.99, 1),
(238, 336, 1, 39.98, 2),
(239, 336, 2, 19.99, 1),
(240, 337, 1, 39.98, 2),
(241, 338, 2, 19.99, 1),
(242, 338, 1, 19.99, 1),
(243, 339, 8, 19.99, 1),
(244, 339, 2, 19.99, 1);

-- --------------------------------------------------------

--
-- Table structure for table `auteurs`
--

CREATE TABLE `auteurs` (
  `idAuteur` int(11) NOT NULL,
  `nom` varchar(45) NOT NULL,
  `prenom` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `auteurs`
--

INSERT INTO `auteurs` (`idAuteur`, `nom`, `prenom`) VALUES
(1, 'Rickie', 'Lee Jones'),
(2, 'Brandi', 'Carlile'),
(3, 'Michelle', 'Zauner'),
(4, 'Ariana', 'Grande'),
(5, 'Greta', 'Van Fleet'),
(6, 'Freddie', 'Gibbs'),
(7, 'Deftones', 'Deftones'),
(8, 'Lady', 'Gaga'),
(9, 'Dua', 'Lipa'),
(10, 'Bloodhound', 'Gang'),
(11, 'David', 'Bowie'),
(12, 'Cannibal', 'Corpse'),
(13, 'Joe', 'Strummer'),
(14, 'Chris', 'Cornell'),
(15, 'Green', 'Day'),
(16, 'Willie', 'Nelson'),
(17, 'Troye', 'Sivan'),
(18, 'Top', 'Petty'),
(19, 'The Mars', 'Volta'),
(20, 'Shakey', 'Graves'),
(21, 'Lana', 'Del Rey'),
(22, 'Dinosaur', 'Junior'),
(23, 'First Aid', 'Kid'),
(24, 'The Mars', 'Volta'),
(25, 'Dry', 'Cleaning'),
(26, 'Bloodhound', 'Gang'),
(27, 'Jethro', 'Tull'),
(28, 'Sturgill Simpson', 'Corpse'),
(29, 'La', 'Femme'),
(30, 'The', 'Vaccines'),
(31, 'Fleet', 'Foxes'),
(32, 'The', 'Offspring'),
(33, 'L', 'Imperatrice'),
(34, 'Dire', 'Straights'),
(35, 'Laurie', 'Anderson'),
(36, 'Neil', 'Young'),
(37, 'Ben', 'Howard'),
(40, 'Damso', ''),
(41, 'Pop ', 'Smoke'),
(42, '', 'Eminem'),
(43, '', 'Booba'),
(44, '', 'Martin'),
(45, 'Iouie', 'King '),
(46, 'Family', 'Fonky'),
(47, '', 'Kaaris');

-- --------------------------------------------------------

--
-- Table structure for table `auteur_pistes`
--

CREATE TABLE `auteur_pistes` (
  `idAuteur` int(11) NOT NULL,
  `idPiste` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `auteur_pistes`
--

INSERT INTO `auteur_pistes` (`idAuteur`, `idPiste`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `categories_musique`
--

CREATE TABLE `categories_musique` (
  `idCategorie` int(11) NOT NULL,
  `nom` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories_musique`
--

INSERT INTO `categories_musique` (`idCategorie`, `nom`) VALUES
(3, 'Musique de film'),
(4, 'Pop, Rock'),
(5, 'Jazz,Blues'),
(6, 'Soul,Funk'),
(7, 'Hard-rock,Metal'),
(8, 'Electro'),
(9, 'Musique classique'),
(10, 'Variété française'),
(11, 'Complis,Dance'),
(12, 'Autre musique'),
(13, 'Rap');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `idClient` int(11) NOT NULL,
  `idParrain` int(11) NOT NULL,
  `nom` varchar(45) NOT NULL,
  `prenom` varchar(45) NOT NULL,
  `pseudo` varchar(70) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  `role` int(11) NOT NULL,
  `adresse` varchar(45) NOT NULL,
  `code_postal` mediumint(9) NOT NULL,
  `ville` varchar(45) NOT NULL,
  `email` varchar(150) NOT NULL,
  `tel` int(11) NOT NULL,
  `date_inscription` datetime NOT NULL DEFAULT current_timestamp(),
  `token` varchar(255) NOT NULL,
  `auth` int(11) NOT NULL,
  `photoUrl` varchar(255) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`idClient`, `idParrain`, `nom`, `prenom`, `pseudo`, `mdp`, `role`, `adresse`, `code_postal`, `ville`, `email`, `tel`, `date_inscription`, `token`, `auth`, `photoUrl`, `type`) VALUES
(1, 2, 'Sedrati', 'Yusin', 'yusin', '123456', 777, '462 Pierre Brossolette', 83300, 'Draguignan', 'sunkatabeckamaaa@gmail.com', 623857048, '2021-05-14 10:18:19', '', 0, 'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png', ''),
(2, 3, 'Dani', 'Stoyanova', 'danistoyanova', '123456', 555, 'Elenovo 8', 2700, 'Blagoevgrad', 'dani4kaaaa_05@gmail.com', 623857048, '2021-06-04 00:36:44', '', 0, 'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png', ''),
(14, 0, 'sunkaaaa', 'sunka', 'sunka', '$2b$10$RAJWkvXg6A1PV/chjYsfUOaryksrBy9OlbyLuQjV1P0ORqqEoXnMi', 555, '', 0, '', 'sunkatabeckama@gmail.com', 0, '2021-07-23 16:39:30', '', 0, 'https://marbellamodelagency.com/wp-content/uploads/2017/02/marbella-model-agency-male.jpg', ''),
(15, 0, 'piskata', 'pisinka', 'pisi', '$2b$10$LMI5ZyXNIRhtnkapTiV0NeS.F4ukNLCI3tqgEDn30F9uP7ARyK8/W', 555, '', 0, '', 'petstore1999@gmail.com', 0, '2021-07-23 17:30:47', '', 0, 'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png', ''),
(16, 0, 'Sedrati', 'Yusin', 'sassaa', '$2b$10$EtL.G52L1a5BBjdMmPB3hOE/q9wDH9N2RLFXar35K8XKVjRdjrisy', 555, '', 0, '', 'sunkssassaasatabeckama@gmail.com', 0, '2021-07-24 17:43:05', '', 0, 'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png', ''),
(17, 0, 'hihi', 'hihi', 'hihi', '$2b$10$j6.P16.xuJKrU.FsdrXh1.8VlClHGXdkDNEj..QALuHReCUtweWOi', 555, '', 0, '', 'hihi@gmail.com', 0, '2021-07-24 17:46:43', '', 0, 'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png', ''),
(18, 0, 'peci', 'peci', 'peci', '$2b$10$bZaxsszMYlPRpN/IdOkSWORtswzQgo.Q5rIOxW0puDfu2G/zT6woq', 555, '', 0, '', 'peci@gmail.com', 0, '2021-07-24 17:52:38', '', 0, 'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png', ''),
(19, 0, 'kkk', 'kkk', 'kkk', '$2b$10$Q.qfxKWZcHcQIEeJavk.Y.qGLStplZpM6SAmOFVoeHxPoqEF5Cj.W', 555, '', 0, '', 'kkk@kkk.kk', 0, '2021-07-24 17:53:25', '', 0, 'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png', ''),
(20, 0, 'ppp', 'ppp', 'ppp', '$2b$10$VHR2GhWGzXSt2kkD//3QO.UpkuR7xZSVSP2mOVXXf6U7/WFVU1mLm', 555, '', 0, '', 'ppp@gmail.com', 0, '2021-07-24 17:54:52', '', 0, 'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png', ''),
(21, 0, 'Yusin', 'Sedrati', 'kiki', '$2b$10$g4R4U93E1Q9HpwqCmfSFjuZsZfADoGF0UaVf.9Xgfg/XNfqms4q.e', 555, '', 0, '', 'kiki@gmail.com', 0, '2021-08-09 13:18:39', '', 0, '', ''),
(22, 0, 'Trenkov', 'Kiril', 'kikitrenkov', '$2b$10$ohp8IlQ5bg/IvCpy8y5pvePmcTwPU2PmD5JW7.wbipGYuGYkfOxhS', 555, '', 0, '', 'kiriltrenkov@gmail.com', 0, '2021-08-17 15:57:06', '', 0, 'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png', ''),
(23, 0, 'sadasd', '<script>alert(\"hahahah\")</script>', 'ascdsacasc', '$2b$10$ndn0oLbd81OTiZpkVFpUQORKDkmrEcOtOGBECnnNRhdgWa/pTzRd.', 555, '', 0, '', 'asdasd@sadsadas.cacas', 0, '2021-08-23 19:05:32', '', 0, 'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png', '');

-- --------------------------------------------------------

--
-- Table structure for table `commandes`
--

CREATE TABLE `commandes` (
  `idCommande` int(11) NOT NULL,
  `idClient` int(11) NOT NULL,
  `date_commande` datetime NOT NULL DEFAULT current_timestamp(),
  `status_commande` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `commandes`
--

INSERT INTO `commandes` (`idCommande`, `idClient`, `date_commande`, `status_commande`) VALUES
(2, 1, '2021-06-04 00:18:08', 0),
(3, 2, '2021-06-04 00:18:24', 1),
(7, 1, '2021-06-04 01:05:35', 1),
(230, 2, '2021-06-09 20:19:42', 0),
(231, 2, '2021-06-09 20:21:20', 0),
(232, 2, '2021-06-09 20:22:15', 0),
(233, 2, '2021-06-09 20:24:02', 0),
(234, 2, '2021-06-09 20:24:49', 0),
(235, 2, '2021-06-09 20:26:18', 0),
(236, 2, '2021-06-09 20:26:40', 0),
(237, 2, '2021-06-09 20:27:38', 0),
(238, 2, '2021-06-09 20:29:23', 0),
(239, 2, '2021-06-09 20:29:49', 0),
(240, 2, '2021-06-09 20:30:42', 0),
(241, 2, '2021-06-09 20:31:18', 0),
(242, 2, '2021-06-09 20:46:29', 0),
(243, 2, '2021-06-09 20:47:25', 0),
(244, 2, '2021-06-09 20:48:57', 0),
(245, 2, '2021-06-09 20:50:18', 0),
(246, 2, '2021-06-09 20:50:58', 0),
(247, 2, '2021-06-09 20:51:38', 0),
(248, 2, '2021-06-09 20:53:45', 0),
(249, 2, '2021-06-09 20:54:13', 0),
(250, 2, '2021-06-09 20:55:33', 0),
(251, 2, '2021-06-09 20:59:45', 0),
(252, 2, '2021-06-09 21:01:48', 0),
(253, 2, '2021-06-09 21:02:30', 0),
(254, 2, '2021-06-09 21:02:55', 0),
(255, 2, '2021-06-09 21:03:16', 0),
(256, 2, '2021-06-09 21:03:44', 0),
(257, 2, '2021-06-09 21:07:45', 0),
(258, 2, '2021-06-09 21:08:40', 0),
(259, 2, '2021-06-09 21:11:03', 0),
(260, 2, '2021-06-09 21:14:41', 0),
(261, 2, '2021-06-09 21:19:20', 0),
(262, 2, '2021-06-09 21:25:03', 0),
(263, 2, '2021-06-09 21:30:26', 0),
(264, 2, '2021-06-09 21:32:36', 0),
(265, 2, '2021-06-09 21:35:03', 0),
(266, 2, '2021-06-09 21:35:59', 0),
(267, 2, '2021-06-09 21:37:25', 0),
(268, 2, '2021-06-09 21:38:07', 0),
(269, 2, '2021-06-09 21:38:47', 0),
(270, 2, '2021-06-09 21:43:31', 0),
(271, 2, '2021-06-09 21:44:47', 0),
(272, 2, '2021-06-09 21:46:14', 0),
(273, 2, '2021-06-09 21:47:49', 0),
(274, 2, '2021-06-09 21:50:13', 0),
(275, 2, '2021-06-09 21:57:05', 0),
(276, 2, '2021-06-09 21:57:08', 0),
(277, 2, '2021-06-09 21:58:26', 0),
(278, 2, '2021-06-09 21:59:18', 0),
(279, 2, '2021-06-09 22:00:38', 0),
(280, 2, '2021-06-09 22:04:09', 0),
(281, 2, '2021-06-09 22:07:18', 0),
(282, 2, '2021-06-09 22:08:43', 0),
(283, 2, '2021-06-09 22:10:00', 0),
(284, 2, '2021-06-09 22:12:07', 0),
(285, 2, '2021-06-09 22:16:08', 0),
(286, 2, '2021-06-09 22:18:46', 0),
(287, 2, '2021-06-10 21:46:00', 0),
(288, 2, '2021-06-10 22:06:24', 0),
(289, 2, '2021-06-11 20:08:26', 0),
(290, 2, '2021-06-11 20:10:36', 0),
(291, 2, '2021-06-11 22:50:04', 0),
(292, 2, '2021-06-12 12:31:57', 0),
(293, 2, '2021-06-13 16:54:21', 0),
(294, 2, '2021-06-14 18:33:14', 0),
(295, 2, '2021-06-25 18:10:51', 0),
(296, 2, '2021-07-09 10:33:08', 0),
(297, 2, '2021-07-12 11:58:16', 0),
(298, 2, '2021-07-22 10:08:53', 0),
(299, 2, '2021-07-23 15:43:13', 0),
(300, 2, '2021-07-23 17:35:24', 0),
(301, 2, '2021-07-23 22:40:40', 0),
(302, 2, '2021-07-24 20:09:04', 0),
(303, 2, '2021-07-26 22:35:17', 0),
(304, 2, '2021-07-27 20:51:48', 0),
(305, 2, '2021-08-18 16:53:37', 0),
(306, 2, '2021-08-27 21:06:38', 0),
(307, 2, '2021-08-30 19:34:20', 0),
(308, 2, '2021-08-30 19:36:57', 0),
(309, 2, '2021-08-30 19:42:01', 0),
(310, 2, '2021-08-30 19:42:52', 0),
(311, 2, '2021-08-30 19:45:24', 0),
(312, 2, '2021-08-30 19:46:57', 0),
(313, 2, '2021-08-30 19:49:29', 0),
(314, 2, '2021-08-30 19:54:54', 0),
(315, 2, '2021-08-30 19:59:48', 0),
(316, 2, '2021-08-30 20:00:04', 0),
(317, 2, '2021-08-30 20:00:39', 0),
(318, 2, '2021-08-30 20:01:03', 0),
(319, 2, '2021-08-30 20:04:15', 0),
(320, 2, '2021-08-30 20:06:37', 0),
(321, 2, '2021-08-30 20:08:31', 0),
(322, 2, '2021-08-30 20:12:36', 0),
(323, 2, '2021-08-30 20:15:42', 0),
(324, 2, '2021-08-30 20:19:19', 0),
(325, 2, '2021-08-30 20:19:52', 0),
(326, 2, '2021-08-30 20:30:22', 0),
(327, 2, '2021-08-30 20:31:21', 0),
(328, 2, '2021-08-30 20:34:28', 0),
(329, 2, '2021-08-30 20:35:41', 0),
(330, 2, '2021-08-30 20:39:50', 0),
(331, 2, '2021-08-30 20:40:53', 0),
(332, 2, '2021-08-30 20:42:26', 0),
(333, 2, '2021-08-30 20:46:05', 0),
(334, 2, '2021-08-30 20:47:16', 0),
(335, 2, '2021-08-30 20:48:56', 0),
(336, 2, '2021-08-30 20:56:17', 0),
(337, 14, '2021-08-30 20:59:26', 0),
(338, 14, '2021-08-30 22:01:19', 0),
(339, 14, '2021-09-02 19:17:15', 0);

-- --------------------------------------------------------

--
-- Table structure for table `groupes`
--

CREATE TABLE `groupes` (
  `idGroupe` int(11) NOT NULL,
  `nom` varchar(45) NOT NULL,
  `date_creation` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groupes`
--

INSERT INTO `groupes` (`idGroupe`, `nom`, `date_creation`) VALUES
(1, 'AC/DC', 1973),
(2, 'Add N To X', 1972),
(3, 'Air', 1986),
(4, 'Alcatrazz', 1983),
(6, 'Kaaris', 2005),
(7, 'ABBA', 1970),
(8, 'Big Carlos', 1977);

-- --------------------------------------------------------

--
-- Table structure for table `musiciens`
--

CREATE TABLE `musiciens` (
  `idMusicien` int(11) NOT NULL,
  `nom` varchar(45) NOT NULL,
  `prenom` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `musiciens_groupe`
--

CREATE TABLE `musiciens_groupe` (
  `idMusicien` int(11) NOT NULL,
  `idGroupe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `pistes`
--

CREATE TABLE `pistes` (
  `idPiste` int(11) NOT NULL,
  `idVinyl` int(11) NOT NULL,
  `nom` varchar(45) NOT NULL,
  `duree` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pistes`
--

INSERT INTO `pistes` (`idPiste`, `idVinyl`, `nom`, `duree`) VALUES
(1, 1, 'The Night Fall', '00:00:30'),
(2, 2, 'Bizon', '00:03:15'),
(3, 2, 'Zoo', '00:03:15'),
(4, 2, 'Ciroc', '00:03:15'),
(5, 2, 'MBM', '00:03:15'),
(6, 2, 'Binks', '00:03:15'),
(7, 2, 'Je Bibi', '00:03:15'),
(8, 2, 'Bouchon De Liège', '00:03:15'),
(9, 2, 'Paradis Ou Enfer', '00:03:15'),
(10, 2, 'L.E.F', '00:03:15'),
(11, 2, 'Dès Le Départ', '00:03:15'),
(12, 2, 'Pas De Remède', '00:03:15'),
(13, 2, '63', '00:03:15'),
(14, 2, 'Bébé', '00:03:15'),
(15, 2, 'Plus Rien', '00:03:15'),
(16, 2, 'Or Noir', '00:03:15'),
(17, 2, 'Tu Me Connais', '00:03:15'),
(18, 2, '2 Et Demi', '00:03:15'),
(47, 3, 'Mamma Mia', '00:03:06'),
(48, 3, 'Hey, Hey Helen', '00:03:06'),
(49, 3, 'Tropical Loveland', '00:03:06'),
(50, 3, 'SOS', '00:03:06'),
(51, 3, 'Man In The Middle', '00:03:06'),
(52, 3, 'Bang-A-Boomerang', '00:03:06'),
(53, 3, 'I Do, I Do, I Do, I Do, I Do', '00:03:06'),
(54, 3, 'Rock Me', '00:03:06'),
(55, 3, 'Intermezzo No. 1', '00:03:06'),
(56, 3, 'I\'ve Been Waiting For You', '00:03:06'),
(57, 3, 'So Long', '00:03:06'),
(58, 4, 'It\'s A Long Way To The Top', '00:04:27'),
(59, 4, 'The Rock \'N\' Roll Singer', '00:04:28'),
(60, 4, 'The Jack', '00:04:29'),
(61, 4, 'Live Wire', '00:03:27'),
(62, 4, 'T.N.T.', '00:04:22'),
(63, 4, 'Rocker', '00:04:23'),
(64, 4, 'Can I Sit Next To You Girl', '00:04:22'),
(65, 4, 'High Voltage', '00:04:29'),
(66, 4, 'School Days', '00:04:20'),
(67, 5, 'Big Bisou	', '00:03:06'),
(68, 5, 'Les Croisades	', '00:03:06'),
(69, 5, 'L\'Année Des Nanas', '00:04:29'),
(70, 5, 'Carlostenstrasse', '00:03:49'),
(71, 5, 'Professeur Carlos', '00:03:23'),
(72, 5, 'Bamba Carlos', '00:03:16'),
(73, 5, 'Le Bougalou Du Loup Garou', '00:03:49'),
(74, 5, 'Senor Meteo', '00:03:16'),
(75, 5, 'La Bamboula', '00:02:49'),
(76, 5, 'On Est Tous Des Clowns', '00:03:10'),
(77, 5, 'La Demoiselle De Déshonneur', '00:03:15'),
(78, 5, 'Demandez-Moi Ce Que Vous Voulez', '00:03:49');

-- --------------------------------------------------------

--
-- Table structure for table `promo_parrainage`
--

CREATE TABLE `promo_parrainage` (
  `idPromo` int(11) NOT NULL,
  `idClient` int(11) NOT NULL,
  `utilise` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `vinyl`
--

CREATE TABLE `vinyl` (
  `idVinyl` int(11) NOT NULL,
  `idGroupe` int(11) NOT NULL,
  `idCategorie` int(11) NOT NULL,
  `quantite_dispo` mediumint(9) NOT NULL DEFAULT 1,
  `nomVinyl` varchar(45) NOT NULL,
  `annee_sortie` year(4) NOT NULL,
  `prixHT` double(6,2) NOT NULL,
  `photo` varchar(60) NOT NULL,
  `disponible` tinyint(1) NOT NULL DEFAULT 1,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vinyl`
--

INSERT INTO `vinyl` (`idVinyl`, `idGroupe`, `idCategorie`, `quantite_dispo`, `nomVinyl`, `annee_sortie`, `prixHT`, `photo`, `disponible`, `description`) VALUES
(1, 1, 4, 0, 'Through The Mists Of Time', 2021, 19.99, 'cabrel.jpg', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi nam voluptas, accusamus facilis amet eius at quaerat porro blanditiis, animi pariatur rerum laboriosam dolores non vel reprehenderit tempora explicabo cum unde omnis? Dolores voluptates a'),
(2, 6, 13, 189, 'Or Noir', 2013, 15.99, 'kaarisornoir.jpg', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi nam voluptas, accusamus facilis amet eius at quaerat porro blanditiis, animi pariatur rerum laboriosam dolores non vel reprehenderit tempora explicabo cum unde omnis? Dolores voluptates a'),
(3, 7, 4, 29, 'Abba', 1975, 10.99, 'abba.jpg', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi nam voluptas, accusamus facilis amet eius at quaerat porro blanditiis, animi pariatur rerum laboriosam dolores non vel reprehenderit tempora explicabo cum unde omnis? Dolores voluptates a'),
(4, 1, 7, 206, 'T.N.T', 1975, 16.99, 'acdc.jpg', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi nam voluptas, accusamus facilis amet eius at quaerat porro blanditiis, animi pariatur rerum laboriosam dolores non vel reprehenderit tempora explicabo cum unde omnis? Dolores voluptates a'),
(5, 8, 4, 196, 'Big Bisous', 1979, 9.99, 'bisous.jpg', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi nam voluptas, accusamus facilis amet eius at quaerat porro blanditiis, animi pariatur rerum laboriosam dolores non vel reprehenderit tempora explicabo cum unde omnis? Dolores voluptates a'),
(6, 8, 4, 20, 'Big Bisous', 1979, 9.99, 'bisous.jpg', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi nam voluptas, accusamus facilis amet eius at quaerat porro blanditiis, animi pariatur rerum laboriosam dolores non vel reprehenderit tempora explicabo cum unde omnis? Dolores voluptates a'),
(7, 1, 7, 73, 'T.N.T', 1975, 16.99, 'acdc.jpg', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi nam voluptas, accusamus facilis amet eius at quaerat porro blanditiis, animi pariatur rerum laboriosam dolores non vel reprehenderit tempora explicabo cum unde omnis? Dolores voluptates a'),
(8, 6, 13, 189, 'Or Noir', 2013, 15.99, 'kaarisornoir.jpg', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi nam voluptas, accusamus facilis amet eius at quaerat porro blanditiis, animi pariatur rerum laboriosam dolores non vel reprehenderit tempora explicabo cum unde omnis? Dolores voluptates a'),
(9, 1, 7, 511, 'T.N.T', 1975, 16.99, 'acdc.jpg', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi nam voluptas, accusamus facilis amet eius at quaerat porro blanditiis, animi pariatur rerum laboriosam dolores non vel reprehenderit tempora explicabo cum unde omnis? Dolores voluptates a'),
(10, 1, 4, 10, 'Witch’s Spell / Through The Mists Of Time', 2021, 19.99, 'cabrel.jpg', 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi nam voluptas, accusamus facilis amet eius at quaerat porro blanditiis, animi pariatur rerum laboriosam dolores non vel reprehenderit tempora explicabo cum unde omnis? Dolores voluptates a'),
(11, 8, 4, 23, 'Big Bisous', 1979, 9.99, 'bisous.jpg', 1, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles_commande`
--
ALTER TABLE `articles_commande`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Articles_commande_Commandes1_idx` (`idCommande`),
  ADD KEY `fk_Articles_commande_Vinyl1_idx` (`idVinyl`);

--
-- Indexes for table `auteurs`
--
ALTER TABLE `auteurs`
  ADD PRIMARY KEY (`idAuteur`);

--
-- Indexes for table `auteur_pistes`
--
ALTER TABLE `auteur_pistes`
  ADD KEY `fk_Auteur_pistes_Pistes1_idx` (`idPiste`),
  ADD KEY `fk_Auteur_pistes_Auteurs1_idx` (`idAuteur`);

--
-- Indexes for table `categories_musique`
--
ALTER TABLE `categories_musique`
  ADD PRIMARY KEY (`idCategorie`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`idClient`);

--
-- Indexes for table `commandes`
--
ALTER TABLE `commandes`
  ADD PRIMARY KEY (`idCommande`),
  ADD KEY `fk_Commandes_Clients1_idx` (`idClient`);

--
-- Indexes for table `groupes`
--
ALTER TABLE `groupes`
  ADD PRIMARY KEY (`idGroupe`);

--
-- Indexes for table `musiciens`
--
ALTER TABLE `musiciens`
  ADD PRIMARY KEY (`idMusicien`);

--
-- Indexes for table `musiciens_groupe`
--
ALTER TABLE `musiciens_groupe`
  ADD KEY `fk_musiciens_groupe_Groupes1_idx` (`idGroupe`),
  ADD KEY `fk_musiciens_groupe_Musiciens1_idx` (`idMusicien`);

--
-- Indexes for table `pistes`
--
ALTER TABLE `pistes`
  ADD PRIMARY KEY (`idPiste`),
  ADD KEY `fk_Pistes_Vinyl_idx` (`idVinyl`);

--
-- Indexes for table `promo_parrainage`
--
ALTER TABLE `promo_parrainage`
  ADD PRIMARY KEY (`idPromo`),
  ADD KEY `fk_promo_parrainage_Clients1_idx` (`idClient`);

--
-- Indexes for table `vinyl`
--
ALTER TABLE `vinyl`
  ADD PRIMARY KEY (`idVinyl`),
  ADD KEY `fk_Vinyl_Categories_musique1_idx` (`idCategorie`),
  ADD KEY `fk_Vinyl_Groupes1_idx` (`idGroupe`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles_commande`
--
ALTER TABLE `articles_commande`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=245;

--
-- AUTO_INCREMENT for table `auteurs`
--
ALTER TABLE `auteurs`
  MODIFY `idAuteur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `categories_musique`
--
ALTER TABLE `categories_musique`
  MODIFY `idCategorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `idClient` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `commandes`
--
ALTER TABLE `commandes`
  MODIFY `idCommande` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=343;

--
-- AUTO_INCREMENT for table `groupes`
--
ALTER TABLE `groupes`
  MODIFY `idGroupe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `musiciens`
--
ALTER TABLE `musiciens`
  MODIFY `idMusicien` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pistes`
--
ALTER TABLE `pistes`
  MODIFY `idPiste` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `promo_parrainage`
--
ALTER TABLE `promo_parrainage`
  MODIFY `idPromo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vinyl`
--
ALTER TABLE `vinyl`
  MODIFY `idVinyl` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articles_commande`
--
ALTER TABLE `articles_commande`
  ADD CONSTRAINT `fk_Articles_commande_Commandes1` FOREIGN KEY (`idCommande`) REFERENCES `commandes` (`idCommande`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Articles_commande_Vinyl1` FOREIGN KEY (`idVinyl`) REFERENCES `vinyl` (`idVinyl`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `auteur_pistes`
--
ALTER TABLE `auteur_pistes`
  ADD CONSTRAINT `fk_Auteur_pistes_Auteurs1` FOREIGN KEY (`idAuteur`) REFERENCES `auteurs` (`idAuteur`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Auteur_pistes_Pistes1` FOREIGN KEY (`idPiste`) REFERENCES `pistes` (`idPiste`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `fk_Commandes_Clients1` FOREIGN KEY (`idClient`) REFERENCES `clients` (`idClient`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `musiciens_groupe`
--
ALTER TABLE `musiciens_groupe`
  ADD CONSTRAINT `fk_musiciens_groupe_Groupes1` FOREIGN KEY (`idGroupe`) REFERENCES `groupes` (`idGroupe`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_musiciens_groupe_Musiciens1` FOREIGN KEY (`idMusicien`) REFERENCES `musiciens` (`idMusicien`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `pistes`
--
ALTER TABLE `pistes`
  ADD CONSTRAINT `fk_Pistes_Vinyl` FOREIGN KEY (`idVinyl`) REFERENCES `vinyl` (`idVinyl`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `promo_parrainage`
--
ALTER TABLE `promo_parrainage`
  ADD CONSTRAINT `fk_promo_parrainage_Clients1` FOREIGN KEY (`idClient`) REFERENCES `clients` (`idClient`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `vinyl`
--
ALTER TABLE `vinyl`
  ADD CONSTRAINT `fk_Vinyl_Categories_musique1` FOREIGN KEY (`idCategorie`) REFERENCES `categories_musique` (`idCategorie`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Vinyl_Groupes1` FOREIGN KEY (`idGroupe`) REFERENCES `groupes` (`idGroupe`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
