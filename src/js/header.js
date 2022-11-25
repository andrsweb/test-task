import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	toogleBurgerMenu()
} )

const toogleBurgerMenu = () => {
	const burgerButton = document.querySelector( '.burger-button' )
	const headerInner  = document.querySelector( '.header-inner' )
	const links        = document.querySelectorAll( '.link-for-scrolling' )
	setTargetElement( document.querySelector( '#body-lock' ) )

	if( ! burgerButton && ! headerInner ) return

	burgerButton.addEventListener( 'click', () => {

		if( ! headerInner.classList.contains( 'opened' ) ) {
			headerInner.classList.add( 'opened' )
			burgerButton.classList.add( 'opened' )
			disableBodyScroll( getTargetElement() )
		} else {
			headerInner.classList.remove( 'opened' )
			burgerButton.classList.remove( 'opened' )
			enableBodyScroll( getTargetElement() )
		}
	})

	window.addEventListener('scroll', () => {
		const scrollTop = window.scrollY
		const header = document.querySelector( '.header' )

		if ( scrollTop > 0 ) {
			if ( ! header.classList.contains( 'scrolled' ) )
				header.classList.add( 'scrolled' )

	}   else {
			if ( header.classList.contains( 'scrolled' ) )
			header.classList.remove( 'scrolled' )
		}
	})

	window.addEventListener( 'resize', () => {
        const windowWidth = window.innerWidth
        const WINDOW_WIDTH_MD = 767

        if( windowWidth >= WINDOW_WIDTH_MD &&  headerInner.classList.contains( 'opened' ) ) {
            headerInner.classList.remove( 'opened' )
            burgerButton.classList.remove( 'opened' )
			enableBodyScroll( getTargetElement() )
        }
    } )

	links.forEach( link => {
		link.addEventListener( 'click', () => {
			if( headerInner.classList.contains( 'opened' ) ) {
				headerInner.classList.remove( 'opened' )
				burgerButton.classList.remove( 'opened' )
				enableBodyScroll( getTargetElement() )
			}
		} )
	} )
}