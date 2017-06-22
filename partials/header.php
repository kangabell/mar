<!DOCTYPE html>
<!--

===============================
=  =====  =====  =====       ==
=   ===   ====    ====  ====  =
=  =   =  ===  ==  ===  ====  =
=  == ==  ==  ====  ==  ===   =
=  =====  ==  ====  ==      ===
=  =====  ==        ==  ====  =
=  =====  ==  ====  ==  ====  =
=  =====  ==  ====  ==  ====  =
=  =====  ==  ====  ==  ====  =
===============================

site by kay belardinelli.

-->

<?php include('functions.php'); ?>

<html>

<head>

	<title>MAR &mdash; providence, RI</title>

	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Two-piece doom metal band from Providence, Rhode Island">

	<link rel="stylesheet" type="text/css" href="style.css" media="screen">

</head>

<body class="<?php echo basename($_SERVER['PHP_SELF'],'.php') ?>">

	<header>

		<h1><a href="index.php"><img src="img/logo.png" alt="Mar" class="logo" /></a></h1>

		<nav>
			<?php hyperlink('news','index'); ?>
			<?php hyperlink('info'); ?>
			<?php hyperlink('media'); ?>
			<?php hyperlink('history'); ?>
		</nav>

	</header>

	<main>