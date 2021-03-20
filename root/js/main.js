const menuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav__item')

let showMenu = false
menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open')
    nav.classList.add('open')
    menuNav.classList.add('open')
    navItems.forEach((item) => item.classList.add('open'))

    showMenu = true
  } else {
    hamburger.classList.remove('open')
    nav.classList.remove('open')
    menuNav.classList.remove('open')
    navItems.forEach((item) => item.classList.remove('open'))
    showMenu = false
  }
}

/*----- START ANIMATION -----*/
// OVERLAY
gsap.to('.first', 1.5, { delay: 0.2, top: '-100%', ease: Expo.easeInOut })
gsap.to('.second', 1.5, { delay: 0.4, top: '-100%', ease: Expo.easeInOut })
gsap.to('.third', 1.5, { delay: 0.6, top: '-100%', ease: Expo.easeInOut })

// Name
gsap.from('.home__name', { opacity: 0, duration: 2, delay: 2, x: 60 })
gsap.from('.contact', { opacity: 0, duration: 2, delay: 0.3, x: 40 })

// NAVBAR
gsap.from('.nav', {
  opacity: 0,
  duration: 3,
  delay: 3.2,
  y: 25,
  ease: 'expo.out',
})

///homepage text
gsap.from('.home', { opacity: 0, duration: 3, delay: 1.3, y: 25 })
gsap.from('.anime-text', {
  opacity: 0,
  duration: 3,
  delay: 1.3,
  y: 25,
  ease: 'expo.out',
  stagger: 0.3,
})

///social icons
gsap.from('.social-icons', {
  opacity: 0,
  duration: 3,
  delay: 2,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2,
})

gsap.from('.skills', {
  opacity: 0,
  duration: 3,
  delay: 2,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2,
})

gsap.from('.projects__items', {
  opacity: 0,
  duration: 3,
  delay: 2,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2,
})

gsap.from('.about__bio-image', { opacity: 0, duration: 3, delay: 1, y: 15 })
gsap.from('.anime-text', {
  opacity: 0,
  duration: 1,
  delay: 1.3,
  y: 15,
  ease: 'expo.out',
  stagger: 0.2,
})
