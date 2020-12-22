<?php
$dir = 'database/classes/';
$data = $_GET['data'];
$file = fopen($dir . $data . ".json", 'r');
$read = fread($file, filesize($dir . $data . ".json"));
fclose($file);
echo $read;
 ?> 
