-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2020 a las 05:08:10
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pokebank`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimientos`
--

CREATE TABLE `movimientos` (
  `code` int(11) NOT NULL,
  `concepto` varchar(30) NOT NULL,
  `debitado` varchar(30) NOT NULL,
  `saldo` varchar(30) NOT NULL,
  `nuevoS` varchar(30) NOT NULL,
  `fecha` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movimientos`
--

INSERT INTO `movimientos` (`code`, `concepto`, `debitado`, `saldo`, `nuevoS`, `fecha`) VALUES
(4, 'Deposito', '215.00', '0', '215', '5/06/2020'),
(5, 'Deposito', '100.00', '215', '315', '5/06/2020'),
(6, 'Retiro', '100.00', '315', '215', '5/06/2020'),
(7, 'Retiro', '215.00', '215', '0', '5/06/2020'),
(8, 'Deposito', '100.00', '0', '100', '5/06/2020'),
(9, 'Pago de Servicios', '70.4', '100', '29.6', '5/06/2020');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `saldotb`
--

CREATE TABLE `saldotb` (
  `code` int(11) NOT NULL,
  `saldo` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `saldotb`
--

INSERT INTO `saldotb` (`code`, `saldo`) VALUES
(1, '29.6');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  ADD PRIMARY KEY (`code`);

--
-- Indices de la tabla `saldotb`
--
ALTER TABLE `saldotb`
  ADD PRIMARY KEY (`code`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  MODIFY `code` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
