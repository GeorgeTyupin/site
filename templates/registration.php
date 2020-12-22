<div class="row">
<div class="col-4"></div>

<div class="place col-4">
	<div class="reg-1">
		<form action="index.php" method="Post" class="indent_1">
			<div class="row top_2">
				<p class="log_text">ЛОГИН</p>
				<input name="login" class="inp">
			</div>
			<div class="row top_2">
				<p class="log_text">ПАРОЛЬ</p>
				<input type="password" name="password" class="inp">
			</div>
			<button type="submit" id="subm">
				Войти
			</button>
		</form>
			
			<div class="row reg1">
				<div class="col-3"></div>
				<div class="col-6">			
					<div align="center" id="do" href="">
						<p id="reg" >Зарегистрироваться</p>
					</div>
				</div>					
				<div class="col-3"></div>
			</div>

		</div>	

		<div class="reg-2 hidden" >
			<form action="new_user.php" method="Post" class="indent_2">
				<div class="top_2 row">
					<p class="log_text">ЛОГИН</p>
					<input name="login" class="inp">
				</div>
				
				<div class="top_2 row">
					<p class="log_text">ФАМИЛИЯ</p>
					<input name="secondname" class="inp">
				</div>
				
				<div class="top_2 row">
					<p class="log_text">ИМЯ</p>
					<input name="name" class="inp">
				</div>

				<div class="top_2 row">
					<p class="log_text">КЛАСС</p>
					<input name="class" class="inp">
				</div>

				<div class="top_2 row">
					<p class="log_text">ПАРОЛЬ</p>
					<input type="password" name="password" class="inp">
				</div>
				<button type="submit" id="subm">
					Зарегистрироваться
				</button>

				
				<p id="reg_1">
					<?php 
						if (isset($_GET['new_user']) ){
							if($_GET['new_user'] == 'not'){
								echo "Данный пользователь уже существует, придумайте другой логин";
							}
						}
					?>
				</p>
				<div class="col-2"></div>
			</form>
		</div>
		<!--<input type="submit" class="inp" id="subm">-->
	
</div>

<div class="col-4"></div>
<script src="js/registration.js"></script>