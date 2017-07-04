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
	<meta name="theme-color" content="#fafbf7">

	<script src="https://unpkg.com/vue"></script>
	<script type="text/javascript" src="data.js"></script>

	<link rel="stylesheet" type="text/css" href="style.css" media="screen">
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">

</head>

<body class="<?php echo basename($_SERVER['PHP_SELF'],'.php') ?>">

	<header>

		<h1><a href="index.php"><img src="img/logo.png" alt="Mar" class="logo" /></a></h1>

		<nav>
			<?php menu( array(
				array('news','index'),
				array('info','info'),
				array('media','media'),
				array('history','history'),
			)); ?>
		</nav>

	</header>

	<main>