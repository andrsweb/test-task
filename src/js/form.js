document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	onlyNumInput()
} )

const onlyNumInput = () => {
	const input = document.querySelector( '.phone' );

	input.addEventListener( 'keyup', e => {
		const value = e.target.value
		input.value = value.replace( /[^0-9-+ ()]/g, '' )
	} )
}


