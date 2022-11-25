document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    smoothScrollForAnchors()
} )

const smoothScrollForAnchors = () => {
	const anchors = document.querySelectorAll( '.link-for-scrolling' )
		if ( ! anchors ) return

		for ( let anchor of anchors ) {
			anchor.addEventListener( 'click', function ( e ) {
				e.preventDefault()

			const blockID = anchor.getAttribute( 'href' ).substring( 1 )    //Smooth scroll for anchors

			document.getElementById( blockID ).scrollIntoView( {
				behavior: 'smooth',
				block: 'start'
			} )
		} )
	}
}