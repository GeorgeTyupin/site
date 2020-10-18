<?php
	$file = fopen("../../database/classes/test", 'w');
	fwrite($file, 'hey');
	fclose($file);
?>