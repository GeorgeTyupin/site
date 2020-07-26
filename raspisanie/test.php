<?php 
	$arr =[1, 2, 3];
	var_dump($arr);
	$arr_json = json_encode($arr);
	var_dump($arr_json);
	$arr_json2 = json_decode($arr_json);
	var_dump($arr_json2);
	$file = fopen("название","w");
	fwrite($file, $arr_json);
	fclose($file);
	$file = fopen("название","r");
	$file2 = fread($file, filesize("название"));
	fclose($file);
	var_dump($file2);
?>