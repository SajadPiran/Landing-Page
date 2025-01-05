"use strict";
import { isScrollingDown } from './header-module.js';

$(document).ready( ()=>{

    const observableSections = $('[data-observe]').toArray();
    const html = document.documentElement;

    let sectionsValue = {};
    const sectionsObserver = new IntersectionObserver( ( entry )=>{

        $( entry ).each( (index , section )=>{

            if( section.isIntersecting ) {

                const currentSection = section.target;
                const observedSectionName = $( currentSection ).attr('data-observe-name');
                const observedSectionNumber = + $( currentSection ).attr('data-observe-number');

                const nextElement =  $(`[data-observe-number = ${ observedSectionNumber + 1 }]`)[0];
                const prevElement =  $(`[data-observe-number = ${ observedSectionNumber - 1 }]`)[0];

                Object.defineProperty( sectionsValue , 'sections' , {

                    value: {

                        currentSection : observedSectionName,
                        prevSection : ( prevElement === undefined ) ? null : $(prevElement).attr('data-observe-name'),
                        nextSection : ( nextElement === undefined ) ? null : $(nextElement).attr('data-observe-name'),

                    },
                    writable: true,
                    enumerable: true,
                    configurable: true,

                } );

            }
        } )

    });
    $( observableSections ).each( ( index , section )=> {

        $( section ).attr( 'data-observe-number' , index + 1 );
        sectionsObserver.observe( section );

        const sectionObserverName = $(section).attr( 'data-observe-name' );
        const sectionRect = section.getBoundingClientRect() ;
        Object.defineProperty( sectionsValue , sectionObserverName , {

            value: {

                element : section,
                rect : sectionRect
            },
            writable: true,
            enumerable: true,
            configurable: true,

        } );

    });


    $(window).on( 'scroll' , ()=>{

        const currentSection = sectionsValue[sectionsValue.sections.currentSection];
        const nextSection = sectionsValue[sectionsValue.sections.nextSection];

        let currentScrollNumber = html.clientHeight + window.scrollY ;
        let nextSectionHeight = nextSection.rect.height > window.innerHeight;

        if( isScrollingDown && currentScrollNumber > currentSection.rect.bottom && nextSectionHeight ) {
            window.scrollTo(0, nextSection.rect.top - 24 );
        }

    });

})
