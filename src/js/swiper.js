import Swiper, { Autoplay, Scrollbar } from 'swiper';

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	testimonialsSwiper()
} )

const testimonialsSwiper = () => {

	const swiper = new Swiper( '.swiper', {
        slidesPerView: 3,
        direction: 'horizontal',
		loop: true,
        spaceBetween: 50,
        grabCursor: 1,

        modules: [ Autoplay, Scrollbar ],

        autoplay: {
            delay: 4000,
            },

		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: 1
		}
	} )
}