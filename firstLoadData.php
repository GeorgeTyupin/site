<?php
    $dir = 'database/classes/';
    $files = scandir($dir);
    $files = array_slice($files , 2);
    echo json_encode($files);
?>