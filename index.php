<?php
    include_once('login.php');
    $title = "Главная";
    if(isset($_POST['login']) ){
          $rules = auth($_POST['login'],$_POST['password']);
    }
    include('logic.php');
    //include_once('templates/header.php');
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Главная</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <link rel='stylesheet' href='style/adminlk.css' >
    <link rel='stylesheet' href='style/header.css' >
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"> 
</head>
<body>
    <?php include_once('templates/header.php'); ?>
<div class="wrapper">

    <?php
        if ($rules == Null) {
            include('templates/registration.php');
        }elseif ($rules == 'admin') {
            include('templates/adminlk.php');
        }elseif ($rules == 'teacher') {
            include('templates/teacherlk.php');
        }else {
            include('templates/table.php');
        }
    ?>

</div>

</body>
</html>