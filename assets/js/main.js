// menu
const btnMobile = document.querySelector('.btn-mobile')
const navbar = document.querySelector('.navbar')
const navbarLinks = document.querySelectorAll('#menu a')

function openMenu(event) {
    if(event.type == 'touch') event.preventDefault();

    navbar.classList.toggle('open')

    const isOpen = navbar.classList.contains('open')

    if(isOpen) {
        btnMobile.setAttribute('aria-expanded', 'true')
        btnMobile.setAttribute('aria-label', 'Fechar menu')
    } else {
        btnMobile.setAttribute('aria-expanded', 'false')
        btnMobile.setAttribute('aria-label', 'Abrir menu')
    }
    
}

navbarLinks.forEach(event => event.addEventListener('click', openMenu))

btnMobile.addEventListener('click', openMenu)
btnMobile.addEventListener('touch', openMenu)

//Animação máquina de escrever
const title = document.querySelector('#title')

function typeWriter(element) {
    const textArray = element.innerHTML.split('')
    element.innerHTML = ''
    textArray.forEach((letter, i) => {
        setTimeout( () => element.innerHTML += letter, 200 * i  )
    });
}

typeWriter(title)

// scroll suave nos links internos

$('nav li a').click(function(element){
	element.preventDefault();
	let id = $(this).attr('href'),
			menuHeight = $('header').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});