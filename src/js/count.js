document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    timer()
} )

const timer = () => {
    let time = 1800
    const countDown = document.querySelector( '.order-timer' )

    function updateCountDown() {
        const minutes = Math.floor( time / 60 )
        let seconds   = time % 60
        seconds = seconds < 10 ? '0' + seconds : seconds
        countDown.innerHTML = `${ minutes} : ${ seconds }`
        time --
    }

    setInterval( updateCountDown, 1000 )
}

