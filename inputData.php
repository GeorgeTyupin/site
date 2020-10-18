<?php
$data = $_POST["data"];
$name = 'database/classes/' . $data["name"] . ".json";
$file = fopen($name , 'w');
fwrite($file, json_encode($data));
fclose($file);
echo $name;
?>