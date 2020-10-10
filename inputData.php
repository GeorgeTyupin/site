<?php
$data = $_POST["data"];
$file = fopen('database/classes/' . $data["name"] . ".json" , 'w');
fwrite($file, json_encode($data));
fclose($file);
?>