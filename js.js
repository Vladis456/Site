let burger = document.querySelector(".header__burger")
let BurgerActive = false

burger.addEventListener('click', ()=> {
	if (document.documentElement.clientWidth < 922) {
		if (BurgerActive == false) {
			document.getElementsByClassName("header__burger")[0].style="margin-right: 150px"
			document.getElementsByClassName("menu")[0].style="display: flex"
			BurgerActive = true
			console.log(BurgerActive)
		}
		else if (BurgerActive == true) {
			document.getElementsByClassName("header__burger")[0].style="margin-right: 0px"
			setTimeout(timer, 450)
			BurgerActive = false
		}
	}
	
	
	
})
function timer () {
	if (document.documentElement.clientWidth < 922) {
		document.getElementsByClassName('menu')[0].style="display: none"
		
	}
	
}
	
