"use strict";
import Swiper from './swiper/swiper-bundle.min.mjs';
import {} from './header-module.js';
import {} from './SectionsObeserver.js';

$(document).ready( ()=>{

    const caseStudiesSwiper = $('.case-studies-swiper')[0];
    if( window.innerWidth <= 1024 ){

        new Swiper( caseStudiesSwiper , {
            slidesPerView: 1,
            autoplay : true,
            speed : 1000,
        });
    }

    const processButton = $('.process').toArray();
    $( processButton ).each( ( index , button )=>{

        $(button).on('click' , ()=>{

            const processContainer = $(button.parentElement)[0];
            const processTextContainer = $(button.parentElement).find('.process-text')[0];
            const processText = $(processTextContainer).find('p')[0];

            const process = {

                isActive : null ,
                processActiveClass : 'border-t border-black mt-4 pt-4',
                processContainerActiveClass : 'process-container--active',
                textHeight : processText.clientHeight + 20,
                active : function (){

                    if( processTextContainer.style.height === '' ) {

                        $(processTextContainer).addClass( process.processActiveClass );
                        $(processTextContainer).css('height' , `${ process.textHeight }px`);

                        process.isActive = true;
                        process.changeSvgIcon()
                        process.activeContainer();

                    }
                    else{

                        $(processTextContainer).removeClass( process.processActiveClass );
                        $(processTextContainer).css('height' , '');

                        process.isActive = false;
                        process.changeSvgIcon();
                        process.activeContainer();

                    }

                },
                changeSvgIcon : function () {

                    const plusIcon = $(button).find('svg')[0];
                    const minusIcon = $(button).find('svg')[1];
                    if( this.isActive ) {

                        $(plusIcon).css( 'top' , '-2rem');
                        $(minusIcon).css( 'top' , '0');

                    }else{

                        $(plusIcon).css( 'top' , '0');
                        $(minusIcon).css( 'top' , '2rem');
                    }

                },
                activeContainer : function () {

                    if( this.isActive ) {
                        $(processContainer).addClass( this.processContainerActiveClass );

                    }else{
                        $(processContainer).removeClass( this.processContainerActiveClass );
                    }
                }

            }
            process.active();

        } );

    } );

    const testimonialsSwiper = $('.testimonials-swiper')[0];
    new Swiper( testimonialsSwiper , {

        slidesPerView: 1,
        autoplay : true,
        speed : 1000,
        spaceBetween : 16 ,
        breakpoints : { 1024 : { slidesPerView: 2 } },
    });

    const observableAnimations = $('[data-anime]').toArray();
    const observeAnimations = new IntersectionObserver( ( entry )=>{

        $( entry ).each( ( index , section )=>{

            if( section.isIntersecting ) {

                const sectionsAnimation = {

                    main : {

                        title : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                                    2000 :
                                                    1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateX : [ 50 , 0 ],
                                duration : duration

                            } );


                        },
                        image : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                                    2000 :
                                                    1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateX : [ -50 , 0 ],
                                duration : duration

                            } );


                        },
                        text : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                                    2000 :
                                                    1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration

                            } );


                        },
                        button : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );

                            let duration = ( window.innerWidth >= 1024 ) ?
                                            2000 :
                                            1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                scaleX : [ 0.5 , 1 ],
                                duration : duration

                            } );


                        },

                    },
                    services : {

                        title : function (){

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration

                            } );

                        },
                        text : function (){

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration,
                                delay : 300
                            } );

                        },
                        service : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 80 , 0 ],
                                duration : duration,
                                delay : 200
                            } );
                        },
                        contactUs : function (){
                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                                    2000 :
                                                    1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 100 , 0 ],
                                duration : duration,
                            } );
                        }

                    },
                    caseStudies : {

                        title : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration

                            } );
                        },
                        text : function (){

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration,
                                delay : 300
                            } );

                        },
                        case : function () {
                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 100 , 0 ],
                                duration : duration,
                                delay : 500

                            } );
                        }

                    },
                    workingProcess : {

                        title : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration

                            } );
                        },
                        text : function (){

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration,
                                delay : 300
                            } );

                        },
                        process : function () {
                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : 500,
                            } );
                        }
                    },
                    team : {
                        title : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration

                            } );
                        },
                        text : function (){

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration,
                                delay : 300
                            } );

                        },
                        member : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 80 , 0 ],
                                duration : duration,
                                delay : 200
                            } );
                        },

                    },
                    testimonials : {
                        title : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration

                            } );
                        },
                        text : function (){

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration,
                                delay : 300
                            } );

                        },
                        testimonial : function () {
                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 80 , 0 ],
                                duration : duration,
                                delay : 200
                            } );
                        }
                    },
                    contactUs : {
                        title : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration

                            } );
                        },
                        text : function (){

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration,
                                delay : 300
                            } );

                        },
                        container : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 100 , 0 ],
                                duration : duration,
                            } );

                        },
                        form : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 50 , 0 ],
                                duration : duration,
                                delay : 400
                            } );

                        },
                        image : function () {

                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                scaleY : [ 0 , 1 ],
                                duration : duration,
                                delay : 500
                            } );

                        }


                    },
                    footer : {

                        footer : function () {
                            const target = section.target;
                            $(target).attr( 'data-anime' , true );
                            let duration = ( window.innerWidth >= 1024 ) ?
                                2000 :
                                1000

                            anime( {

                                targets : target,
                                opacity : [ 0 , 1 ],
                                translateY : [ 100 , 0 ],
                                duration : duration,
                            } );
                        }

                    }

                }

                const sectionObservedName = $(section.target).attr('data-anime-name').split('-');
                const parentName = sectionObservedName[0];
                const animeName = sectionObservedName[1];
                if ( $(section.target).attr('data-anime') !== 'true' ){
                    sectionsAnimation[parentName][animeName]();
                }

            }

        });

    } );
    $( observableAnimations ).each( (index , section )=>{ observeAnimations.observe( section ) });


});

