const searchBar = document.querySelector('#tn__search__bar')
const searchButton = document.querySelector('#tn__search__button')
const searchBarCloseButton = document.querySelector('#tn__search__close')
const root = document.querySelector(':root')

searchButton.onclick = () => {
    searchBar.classList.add('active')
}

searchBarCloseButton.onclick = () => {
    searchBar.classList.remove('active')
}

const loginButton = document.querySelector('#login__button')
const loginWrapper = document.querySelector('#login__links__wrapper')
loginButton.onclick = () => {
    loginWrapper.classList.add('active')
}

loginButton.onblur = () => {
    loginWrapper.classList.remove('active')
}

const colorButtons = document.querySelectorAll('.color__button')
colorButtons.forEach((button, index) => {
    button.onclick = () => {
        const newColor = window.getComputedStyle(root).getPropertyValue(`--red-color-${index + 1}`)
        root.style.setProperty('--red-color', newColor)
    }
})


const fontButtons = document.querySelectorAll('.font__button')
fontButtons.forEach((button, index) => {
    button.onclick = () => {
        setElementPositions()
        const rootStyle = window.getComputedStyle(root)
        const newSmall = rootStyle.getPropertyValue(`--font-size-small-${index + 1}`)
        const newNormal = rootStyle.getPropertyValue(`--font-size-normal-${index + 1}`)
        const newMedium = rootStyle.getPropertyValue(`--font-size-medium-${index + 1}`)
        const newLarge = rootStyle.getPropertyValue(`--font-size-large-${index + 1}`)
        root.style.setProperty('--font-size-small', newSmall)
        root.style.setProperty('--font-size-normal', newNormal)
        root.style.setProperty('--font-size-medium', newMedium)
        root.style.setProperty('--font-size-large', newLarge)
    }
})

const chatNowButton = document.querySelector('#chat__now__button')
const chatNow = document.querySelector('#chat__now')
const chatNowClose = document.querySelector('#cn__close')

chatNowButton.onclick = () => {
    chatNow.classList.add('active')
}
chatNowClose.onclick = () => {
    chatNow.classList.remove('active')
}
const hero = document.querySelector('#hero')
const header = document.querySelector('#header')
const sidebar = document.querySelector('#sidebar')

const setElementPositions = () => {
    const headerHeight = header.getBoundingClientRect().height
    hero.style.marginTop = `${headerHeight}px`
    sidebar.style.top = `${headerHeight + 20}px`
}




const chooseTopic = document.querySelector('#choose__topic')
const chooseTopicsWrapper = document.querySelector('#choose__topics__wrapper')

chooseTopic.onclick = () => {
    chooseTopicsWrapper.classList.add('active')
}
chooseTopic.onblur = () => {
    chooseTopicsWrapper.classList.remove('active')
}


const setupCarousel = (node = '', options = {}, leftButton = '', rightButton = '')=>{
    const n = document.querySelector(node)
    const plugins = [EmblaCarouselAutoplay({ delay:options.delay || 4000 })]
    const embla = EmblaCarousel(n, {loop:options.loop}, plugins)
    const lb = document.querySelector(leftButton)
    const rb = document.querySelector(rightButton)
    lb.onclick = embla.scrollPrev
    rb.onclick = embla.scrollNext
}



const video1 = document.querySelector('#v1')
const video1pp = document.querySelector('#v1__pp')

video1pp.onclick = () => {
    if (video1.pause) {
        video1.play()
    } else {
        video1.pause();
    }
}
video1pp.onblur = () => {
   
    video1.pause();
    
}
video1.onplay = () => {
    video1pp.style.transform = 'scale(0)'
    video1.style.transform = 'scale(1.1)'
    video1.style.zIndex = '20'
}
video1.onpause = () => {
    video1pp.style.transform = 'scale(1)'
    video1.style.transform = 'scale(1)'
    video1.style.zIndex = '0'
}



window.onresize = setElementPositions

window.onload = () => {
    setElementPositions()
    setupCarousel('.carousel1', { loop: true, delay: 4000 }, '#c1__left', '#c1__right')
    setupCarousel('.carousel2', { loop: true, delay: 4000 }, '#c2__left', '#c2__right')
}
