<?php
	if(isset( $_POST['name']))
	$name = $_POST['name'];
	if(isset( $_POST['email']))
	$email = $_POST['email'];
	if(isset( $_POST['message']))
	$message = $_POST['message'];

	$content="From: $name \n Email: $email \n Message: $message";
	$recipient = "chrischow10250@gmail.com";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $content, $mailheader) or die('<script>alert("Error! Message did not send!");history.go(-1);</script>');
	echo '<script>alert("Email sent!");history.go(-1);</script>';
?>