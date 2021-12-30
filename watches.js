const main = document.querySelector('.main')
const button = document.getElementById ('button')
const sec = document.querySelector('#sec')
const minute = document.querySelector('#min')
const hour = document.querySelector('#hour')
const deg = 6
let toggle_value = 0

button.addEventListener('click', () => {
    if (toggle_value == 0) {
        toggle_value = 1
        button.innerHTML = `<i class="far fa-sun"></i>` 
        main.classList.add('dark_mode')
    } else {
        toggle_value = 0
        button.innerHTML = `<i class="far fa-moon"></i>`
        main.classList.remove('dark_mode')
    }
    
})

setInterval(update_clock, 1000)

function update_clock() {
    let current_time = new Date()
    // get all time
    let seconds = current_time.getSeconds() * 9
    let minutes = current_time.getMinutes() * deg
    let hours = current_time.getHours() * deg


   
    // rotation 
    hour.style.transform = `rotateZ(${(hours) + (minutes / 12)} deg)`
    minute.style.transform = `rotateZ(${(minutes)}deg)`
    sec.style.transform = `rotateZ(${(seconds)}deg)`
}

update_clock()

