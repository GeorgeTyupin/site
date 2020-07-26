<?php


function auth($login , $password){
	$log = fopen('database/users.json', 'rt');
	$users = json_decode(fread($log, filesize('database/users.json')), True  );
	fclose($log);
    for($i = 0; $i < count($users); $i++) {
        if ($login == $users[$i]['login'] 
            && $password == $users[$i]['password']) {
            return $users[$i]['rules'] ;
            }      
    }
    
}
?>