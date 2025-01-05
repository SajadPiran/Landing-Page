"use strict";
export let isScrollingDown ;

$( document ).ready( ()=>{

    const header = $('.header')[0];
    const nav = $('nav')[1];
    let prevScroll = window.scrollY;

    $(window).on( 'scroll' , ()=>{

        let currentScroll = window.scrollY;
        if( currentScroll >= prevScroll ) {
            isScrollingDown = true ;
            $(header).css('top' , '-100%');
        }
        else {
            isScrollingDown = false ;
            $(header).css('top' , '-0%');
        }
        prevScroll = currentScroll ;

    } );

    $('#header-button').on( 'click' , ()=>{


        if( nav.style.left === '0%' ){
            $(nav).css( 'left' , '-100%');
        }else { $(nav).css( 'left' , '0%'); }

    } );

} )
