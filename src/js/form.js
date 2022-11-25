import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	onlyNumInput()
	formOnClick()
	inputNotes()
} )

const onlyNumInput = () => {
	const input = document.querySelector( '.phone' ); // only numbers in input

	input.addEventListener( 'keyup', e => {
		const value = e.target.value
		input.value = value.replace( /[^0-9-+ ()]/g, '' )
	} )
}

const formOnClick = () => {
	const formWrapper = document.querySelector( '.form-wrapper' ) //open form by button click and body scroll-lock
	const formButton  = document.querySelectorAll( '.open-form' )
	setTargetElement( document.querySelector( '#form-lock' ) )

	if ( ! formWrapper && ! formButton ) return

	formButton.forEach( button => {
		button.addEventListener( 'click', () => {
			if ( ! formWrapper.classList.contains( 'opened' ) ) {
				disableBodyScroll( getTargetElement() )
				formWrapper.classList.add( 'opened' )
			} else {
				formWrapper.classList.remove( 'opened' )
				enableBodyScroll( getTargetElement() )
			}
		} )
	} )

	formWrapper.addEventListener( 'click', e => {  //close for for touch anywhere
        e.stopPropagation()

        const target = e.target

        if ( target.className && target.classList.contains( 'form-wrapper' ) ) {
			formWrapper.classList.remove( 'opened' )
			enableBodyScroll( getTargetElement() )
		}
    } )
}

const inputNotes = () => {
	const form   = document.querySelector( 'form' )
	const wraps  = form.querySelectorAll( '.input-wrapper' )						//calling input notes by focus

	wraps.forEach( wrap => {
		const input  = wrap.querySelector( 'input' ),
		note  = wrap.querySelector( '.note' )

		input.addEventListener( 'focus', () => {
			if( note.classList.contains( 'hidden' ) ) note.classList.remove( 'hidden' )
		} )

		input.addEventListener( 'blur', () => {
			if( ! note.classList.contains( 'hidden' ) ) note.classList.add( 'hidden' )
		} )
	} )
}



