<?php
$log = fopen('database/users.json', 'rt');
$users = json_decode(fread($log, filesize('database/users.json')), True  );
fclose($log);

$login = $_POST['login'];
foreach ($users as $i) {
	if ($login == $i['login']){
		header('Location: http://site/raspisanie/index.php?new_user=not');
		exit();
	}
}
$password = $_POST['password'];
$name = $_POST['secondname'] . ' ' . $_POST['name'];
$class = $_POST['class'];
$user = ['login' => $login , 'password' => $password , 'name' => $name ,     'class' => $class , 'rules' => 'student'];
array_push($users , $user);

$file = fopen('database/users.json', 'w');
fwrite($file, json_encode($users));
fclose($file);
header('Location: http://site/raspisanie/index.php');
?>