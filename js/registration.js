var reg_1 = document.querySelector(".reg-1"),
	reg_2 = document.querySelector(".reg-2");
 
function setEvent(){
	add = document.querySelector("#do");
	add.addEventListener('click', function() {
		reg_1.style.display = 'none';
		reg_2.style.display = 'block';
	});
}

setEvent();