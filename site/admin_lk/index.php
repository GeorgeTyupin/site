<?php
/*
r - read только чтение
w - write для записи
w+ - для работы с новым файлом
r+ - существующий файл для записи и чтения
a - дозапись файла
*/

var_dump($_POST);
$f = fopen ('data.txt' , 'a');


foreach ($_POST as $key => $value) {
    fwrite( $f, $key . ' : ' . $value . "\n");
}

fclose($f);

?>

<?php include('../templates/header.php')?>
<?php require_once('../templates/adminlk.php')?>
<?php include('../templates/footer.php')?>
