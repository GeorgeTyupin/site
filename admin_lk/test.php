<?php
var_dump($_POST);
echo '<br>';
var_dump($_GET);
echo '<br>';
var_dump( isset($_GET['name']) )
?>



<form action="test.php" method='post'>
    <input type="text" name='class'>
    <input type="text" name='spisok'>
    <input type='submit'>
</form>





<a href='?name=Serg'>Push Me</a>

