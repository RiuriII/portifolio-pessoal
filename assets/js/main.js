// menu
const btnMobile = document.querySelector('.btn-mobile')
const navbar = document.querySelector('.navbar')
const navbarLinks = document.querySelectorAll('#menu a[href^="#"]')

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

// active menu link

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        resetLinks()
        link.classList.add('active')
    })
})

function resetLinks() {
    navbarLinks.forEach(link => link.classList.remove('active'));
}

//typewriter animation

const title = document.querySelector('#title')

function typeWriter(element) {
    const textArray = element.innerHTML.split('')
    element.innerHTML = ''
    textArray.forEach((letter, i) => {
        setTimeout( () => element.innerHTML += letter, 200 * i  )
    });
}

typeWriter(title)

// scroll Reveal

let dataAnime = document.querySelectorAll('[data-anime]')

function scrollReveal() {
    dataAnime.forEach(element => {
        let elementTop = element.getBoundingClientRect().top
        let windowTop = window.innerHeight * 0.5

        if (windowTop > elementTop) {
            element.classList.add('animate')
        } else {
            element.classList.remove('animate')
        }
    })
}

scrollReveal();
window.addEventListener('scroll', scrollReveal)

// smooth scroll for internal links

navbarLinks.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 68;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  smoothScrollTo(0, to, 600);
}

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};