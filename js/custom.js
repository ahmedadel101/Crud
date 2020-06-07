

/*--------------------- Copyright (c) 2018 -----------------------
[Master Javascript]
Project: Wlog - Blog and Magazine HTML template 
Version: 1.0.0
Assigned to: Theme Forest
-------------------------------------------------------------------*/





(function($) {
    "use strict";

    var assect_cookie = 0;
    var blog = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- Blog Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.Menu();
            this.HeaderSlider();
            this.BannerSlider();
            this.WorldNews_Slider();
            this.Sport_Slider();
            this.Food_Health();
            this.Travel_Slider();
            this.TechnologySlider();
            this.MoreOption_Sidebar();
            this.Magnific_Popup();
            this.UserProfile();
            this.Search_Popup();
            this.Login_Popup();
            this.Register_btn();
            this.ForgetPassword_btn();
            this.RightToggle();
            this.NavToggleOpen();
            this.BannerLeftSlider();
            this.BannerRightSlider();
            this.BannerCenterSlider();
            this.SortToggle();
            this.Fullwidth_Multislide_Slider();
            this.InstargamSlider();
            this.CookiesPopup();
            this.SinglepageToggle();
            this.CommentAction();
            this.CustomTab();
            this.TestimonialSlider();
            this.ContactFormSubmit();
            this.StickySidebar();
            this.wow();
           
        },
        /*-------------- Blog Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        // Toggle Menu
        /*menu toggle*/
        Menu: function() {
            var wh = window.innerWidth;
            // //Go to top
            if (wh < 991) {
                $('.blog_menu_toggle').on('click', function(e) {

                    if ($('.blog_main_menu_innerdiv li.active').length) {
                        $('.blog_main_menu_innerdiv li.active .sub-menu').hide();
                        $('.blog_main_menu_innerdiv li.active').removeClass('active');
                    }


                    $(".blog_main_menu ").slideToggle("slow");
                });

                $(document).on('click', ".blog_main_menu_innerdiv ul li.blog_dropdown", function(e) {
                    $('.blog_main_menu_innerdiv ul li.dd_open').not($(this)).removeClass('dd_open').find("ul.sub-menu").slideUp();
                    $(this).addClass('dd_open').find('.sub-menu').slideToggle();
                });
            }
            $(".blog_main_menu_innerdiv ul li ul.sub-menu").parent("li").addClass("blog_dropdown");
        },
        // Slider
        HeaderSlider: function() {
            var swiper = new Swiper(' .swiper-container .blog_tranding_slider ' ,  {
                direction: 'vertical',
                loop: true,
                speed: 1500,
                autoplay: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });
        },
        BannerSlider: function() {
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                spaceBetween: 20,
                direction: 'vertical',
                slidesPerView: 'auto',
                loop: false,
                touchRatio: 1,
                freeMode: true,
                loopedSlides: 3, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                breakpoints: {
                    1800: {
                        direction: 'vertical',
                    },
                    1400: {
                        direction: 'vertical',
                    },
                    992: {
                        direction: 'vertical',
                    },
                    767: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    640: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    480: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    375: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    }
                },
            });
            var galleryTop = new Swiper('.gallery-top', {
                spaceBetween: 0,
                loop: false,
                touchRatio: 0,
                effect: 'fade',
                loopedSlides: 3, //looped slides should be the same
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: galleryThumbs,
                },
                breakpoints: {
                    767: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    640: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    480: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    375: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    }
                },
            });
        },
        WorldNews_Slider: function() {

            new Swiper('.blog_world_news_slider .swiper-container', {
                loop: false,
                loopedSlides: 1,
                slidesPerView: 1,
                slidesPerColumn: 2,
                spaceBetween: 0,
                navigation: {
                    nextEl: '.worldnews-swiper-button-next',
                    prevEl: '.worldnews-swiper-button-prev',
                },
                breakpoints: {
                    767: {
                        slidesPerColumn: 2,
                    },
                    480: {
                        slidesPerColumn: 1,
                    },
                },
            });
            $('.worldnews_tab .tab-pane').css("display", "none");
            $('#nav-tab a').on('click', function(e) {
                var t = $(this).attr('href');
                $('.worldnews_tab .tab-pane').hide();
                $(t).show();
                //return false;

            });
            $('.worldnews_tab .tab-pane.active.show').show();

            $('.worldnews_tab2 .tab-pane').css("display", "none");

            $('#nav-tab a').on('click', function(e) {
                $('.worldnews_tab2  .custom_tab_content .tab').css('display', 'none');
                var t = $(this).attr('href');
                $('.worldnews_tab2 .tab-pane').hide();
                $(t).show();
                //return false;

            });
            $('.worldnews_tab2 .tab-pane.active.show').show();

            $('.worldnews_tab2 .tabs.animated-fade .tab-links .link_data a').on('click', function(e) {
                $('.worldnews_tab2 .tab-content .tab-pane').css('display', 'none');
            });
        },
        CustomTab: function() {
            $('.custom_tab_content .tab').hide();
            $('.tabs.animated-fade .tab-links .link_data a').on('click', function(e) {
                var currentAttrValue = $(this).attr('href');

                // Show/Hide Tabs
                $('.custom_tab_content ' + currentAttrValue).show().addClass('show').siblings().hide().removeClass('show');

                // Change/remove current tab to active
                $(this).parent('li').addClass('active').siblings().removeClass('active');

                e.preventDefault();
            });
        },
        Sport_Slider: function() {
            new Swiper('.blog_sport_slider .swiper-container', {
                slidesPerView: 2,
                slidesPerColumn: 3,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.sport-swiper-button-next',
                    prevEl: '.sport-swiper-button-prev',
                },
                breakpoints: {
                    1024: {
                        slidesPerColumn: 3,
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerColumn: 1,
                        slidesPerView: 1,
                    },
                    320: {
                        slidesPerColumn: 1,
                        slidesPerView: 1,
                    },
                },
            });
            $('.blog_sports .tab-pane').css("display", "none");
            $('#nav-tab1 a').on('click', function(e) {
                $('.blog_sports .custom_tab_content .tab').css('display', 'none');
                var t = $(this).attr('href');
                $('.blog_sports .tab-pane').hide();
                $(t).show();
                //return false;

            });
            $('.blog_sports .tab-pane.active.show').show();

            $('.blog_sports .tabs.animated-fade .tab-links .link_data a').on('click', function(e) {
                $('.blog_sports .tab-content .tab-pane').css('display', 'none');
            });

        },
        Food_Health: function() {
            var galleryThumbs = new Swiper('.thumbs1', {
                spaceBetween: 20,
                direction: 'vertical',
                slidesPerView: 'auto',
                loop: false,
                touchRatio: 0.1,
                freeMode: true,
                loopedSlides: 5, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,

                breakpoints: {
                    1800: {
                        direction: 'vertical',
                    },
                    1400: {
                        direction: 'vertical',
                    },
                    992: {
                        direction: 'vertical',
                    },
                    767: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    640: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    480: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    375: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    }
                },
            });
            var galleryTop = new Swiper('.gallery1', {
                spaceBetween: 0,
                loop: false,
                touchRatio: 0,
                //direction:'vertical',
                effect: 'fade',
                loopedSlides: 3, //looped slides should be the same
                navigation: {
                    nextEl: '.tab-next-1',
                    prevEl: '.tab-prev-1',
                },
                thumbs: {
                    swiper: galleryThumbs,
                },

                breakpoints: {
                    767: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    640: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    480: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    375: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    }
                },
            });
            /*for second tab*/
            var galleryThumbs = new Swiper('.thumbs2', {
                spaceBetween: 20,
                direction: 'vertical',
                slidesPerView: 'auto',
                loop: false,
                touchRatio: 0.1,
                freeMode: true,
                loopedSlides: 5, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,

                breakpoints: {
                    1800: {
                        direction: 'vertical',
                    },
                    1400: {
                        direction: 'vertical',
                    },
                    992: {
                        direction: 'vertical',
                    },
                    767: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    640: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    480: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    375: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    }
                },
            });
            var galleryTop = new Swiper('.gallery2', {
                spaceBetween: 0,
                loop: false,
                touchRatio: 0,
                //direction:'vertical',
                effect: 'fade',
                loopedSlides: 3, //looped slides should be the same
                navigation: {
                    nextEl: '.tab-next-2',
                    prevEl: '.tab-prev-2',
                },
                thumbs: {
                    swiper: galleryThumbs,
                },

                breakpoints: {
                    767: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    640: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    480: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    375: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    }
                },
            });
            /*for third tab*/
            var galleryThumbs = new Swiper('.thumbs3', {
                spaceBetween: 20,
                direction: 'vertical',
                slidesPerView: 'auto',
                loop: false,
                touchRatio: 0.1,
                freeMode: true,
                loopedSlides: 5, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,

                breakpoints: {
                    1800: {
                        direction: 'vertical',
                    },
                    1400: {
                        direction: 'vertical',
                    },
                    992: {
                        direction: 'vertical',
                    },
                    767: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    640: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    480: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    375: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    }
                },
            });
            var galleryTop = new Swiper('.gallery3', {
                spaceBetween: 0,
                loop: false,
                touchRatio: 0,
                //direction:'vertical',
                effect: 'fade',
                loopedSlides: 3, //looped slides should be the same
                navigation: {
                    nextEl: '.tab-next-3',
                    prevEl: '.tab-prev-3',
                },
                thumbs: {
                    swiper: galleryThumbs,
                },

                breakpoints: {
                    767: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    640: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    480: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    375: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    }
                },
            });
            /*for fourth tab*/
            var galleryThumbs = new Swiper('.thumbs4', {
                spaceBetween: 20,
                direction: 'vertical',
                slidesPerView: 'auto',
                loop: false,
                touchRatio: 0.1,
                freeMode: true,
                loopedSlides: 5, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,

                breakpoints: {
                    1800: {
                        direction: 'vertical',
                    },
                    1400: {
                        direction: 'vertical',
                    },
                    992: {
                        direction: 'vertical',
                    },
                    767: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    640: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    480: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    375: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    }
                },
            });
            var galleryTop = new Swiper('.gallery4', {
                spaceBetween: 0,
                loop: false,
                touchRatio: 0,
                //direction:'vertical',
                effect: 'fade',
                loopedSlides: 3, //looped slides should be the same
                navigation: {
                    nextEl: '.tab-next-4',
                    prevEl: '.tab-prev-4',
                },
                thumbs: {
                    swiper: galleryThumbs,
                },

                breakpoints: {
                    767: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    640: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    480: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    375: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    }
                },
            });
            /*for fifth tab*/
            var galleryThumbs = new Swiper('.thumbs5', {
                spaceBetween: 20,
                direction: 'vertical',
                slidesPerView: 'auto',
                loop: false,
                touchRatio: 0.1,
                freeMode: true,
                loopedSlides: 5, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,

                breakpoints: {
                    1800: {
                        direction: 'vertical',
                    },
                    1400: {
                        direction: 'vertical',
                    },
                    992: {
                        direction: 'vertical',
                    },
                    767: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    640: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    480: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    375: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    }
                },
            });
            var galleryTop = new Swiper('.gallery5', {
                spaceBetween: 0,
                loop: false,
                touchRatio: 0,
                //direction:'vertical',
                effect: 'fade',
                loopedSlides: 3, //looped slides should be the same
                navigation: {
                    nextEl: '.tab-next-5',
                    prevEl: '.tab-prev-5',
                },
                thumbs: {
                    swiper: galleryThumbs,
                },

                breakpoints: {
                    767: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    640: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    480: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    },
                    375: {
                        direction: 'horizontal',
                        touchRatio: 0.2,
                    }
                },
            });
            $('.blog_food_health .tab-pane').css("display", "none");
            $('#nav-tab2 a').on('click', function(e) {
                $('.blog_food_health .custom_tab_content .tab').css('display', 'none');
                var t = $(this).attr('href');
                $('.blog_food_health .tab-pane').hide();
                $(t).show();
                //return false;

            });
            $('.blog_food_health .tab-pane.active.show').show();

            $('.blog_food_health .tabs.animated-fade .tab-links .link_data a').on('click', function(e) {
                $('.blog_food_health .tab-content .tab-pane').css('display', 'none');
            });
        },
        Travel_Slider: function() {
            new Swiper('.blog_travel_slider .swiper-container', {
                loop: false,
                loopedSlides: 1,
                slidesPerView: 1,
                slidesPerColumn: 2,
                spaceBetween: 0,
                navigation: {
                    nextEl: '.travel-swiper-button-next',
                    prevEl: '.travel-swiper-button-prev',
                },
                breakpoints: {
                    767: {
                        slidesPerColumn: 2,
                    },
                },
            });

            $('.blog_travel .tab-pane').css("display", "none");
            $('#nav-tab3 a').on('click', function(e) {
                $('.blog_travel .custom_tab_content .tab').css('display', 'none');
                var t = $(this).attr('href');
                $('.blog_travel .tab-pane').hide();
                $(t).show();
                //return false;

            });
            $('.blog_travel .tab-pane.active.show').show();

            $('.blog_travel .tabs.animated-fade .tab-links .link_data a').on('click', function(e) {
                $('.blog_travel .tab-content .tab-pane').css('display', 'none');
            });
        },
        TechnologySlider: function() {
            new Swiper('.blog_technology_slider .swiper-container', {
                loop: false,
                loopedSlides: 1,
                slidesPerView: 1,
                slidesPerColumn: 4,
                spaceBetween: 0,
                navigation: {
                    nextEl: '.technology-swiper-button-next',
                    prevEl: '.technology-swiper-button-prev',
                },
                breakpoints: {
                    767: {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                    },
                },
            });

            $('.blog_technology .tab-pane').css("display", "none");
            $('#nav-tab4 a').on('click', function(e) {
                $('.blog_technology .custom_tab_content .tab').css('display', 'none');
                var t = $(this).attr('href');
                $('.blog_technology .tab-pane').hide();
                $(t).show();
                //return false;

            });
            $('.blog_technology .tab-pane.active.show').show();

            $('.blog_technology .tabs.animated-fade .tab-links .link_data a').on('click', function(e) {
                $('.blog_technology .tab-content .tab-pane').css('display', 'none');
            });
        },
        MoreOption_Sidebar: function() {
            $(".blog_news_action").on('click', function(e) {
                $('ul.more_option').not($(this).closest('.blog_news').find('ul.more_option')).removeClass('open_option');
                $(this).closest('.blog_news').find('ul.more_option').toggleClass('open_option');
            });
            $(document).on('click', function(e) {
                if (!$(e.target).closest('.blog_news_action').length) {
                    $('ul.more_option').removeClass("open_option");
                }
            });
        },
        Magnific_Popup: function() {
            $('.widget_instagram_news ul li').magnificPopup({
                delegate: 'a.blog_popup',
                type: 'image',
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true,
                },
            });
        },
        UserProfile: function() {
            $(document).on("click", '.blog_user_div a', function() {
                if(!$(this).hasClass('profileLink')) {
                    $(this).closest('.blog_user_div').toggleClass("profile_open");
                }
                
            });

            // $('.blog_user_div').html('<div class="blogUserWrapper">' + $('.blog_user_div').html() + '</div>');


            $(document).on('click', function(e) {
                if (!$(e.target).closest('.blogUserWrapper').length) {
                    $('.blog_user_div').removeClass("profile_open");
                }
            });
           
            // $(document).on('click', function(e) {
            //     $(e.target).closest('.blog_user_div').toggleClass("profile_open");
               
            // });
        },
        Search_Popup: function() {

            $(".blog_search > a").on("click", function() {
                $(this).parent().addClass('show_search');
            });
            $(".search_close").on("click", function() {
                $('.search_close').closest('.blog_search ').removeClass('show_search');
            });
        },
        Login_Popup: function() {
            $("#login_btn").click(function(e) {
                e.preventDefault();
                $(this).parents().addClass('show_search'),
                    $('.Login').css({ "display": "block", "animation": "slideInUp", "animation-duration": "0.5s" })
            });
            $(".search_close").click(function(e) {
                e.preventDefault();
                $('.search_close').closest('li').removeClass('show_search'),
                    $('.Register').css({ "display": "none" });
                    $('.forgetPassword').css({ "display": "none" });
                    $('.ResendCode').css({ "display": "none" })
                   


            });
        },
        Register_btn: function() {
            $("#register_btn").click(function(e) {
                e.preventDefault();
                $('.Login').css({ "display": "none" }),
                    $('.Register').css({ "display": "block", "animation": "slideInDown", "animation-duration": "0.5s" }),
                    $

            });

            $("#signInNow").click(function(e) {
                e.preventDefault();
                $('.Register').css({ "display": "none" }),
                    $('.Login').css({ "display": "block", "animation": "slideInUp", "animation-duration": "0.5s" })

            });

        },

        ForgetPassword_btn: function(){
            $('#forgetBtn').click(function(e){
                e.preventDefault();
                $('.Login').css({ "display": "none", "animation": "slideInUp", "animation-duration": "0.5s" }),
                    $('.forgetPassword').css({ "display": "block", "animation": "slideInDown", "animation-duration": "0.5s" })
                    
            });

            $('#backToSignIn-Btn').click(function(e){
                e.preventDefault();
                $('.forgetPassword').css({ "display": "none", "animation": "slideInUp", "animation-duration": "0.5s" }),
                    $('.Login').css({ "display": "block", "animation": "slideInDown", "animation-duration": "0.5s" }),
                    $('.ResendCode').css({ "display": "none" })
                    
            });

            $('.fintMail').click(function(e){
                e.preventDefault();
                $('.ResendCode').css({ "display": "block", "animation": "fadeIn", "animation-duration": "0.5s" }),
                $('.fintMail').css({ "display": "none"}),
                $('.nextToRest').css({ "display": "block", "animation": "fadeIn", "animation-duration": "0.5s" })
                
            })

           
        },
     



        RightToggle: function() {
            $(".blog_righttoggle a").on("click", function() {
                $('body').addClass('right_toggle_open');
            });
            $(".toggle_close").on("click", function() {
                $('body').removeClass('right_toggle_open');
            });
            $(".outer_close").on("click", function() {
                $('body').removeClass('right_toggle_open');
            });
        },
        NavToggleOpen: function() {
            $(".tab_toggle_menu a").on("click", function() {

                $('.nav-tabs').not($(this).closest('.blog_topheading_slider_nav').find('.nav-tabs')).removeClass('nav_toggle_open');
                $(this).closest('.blog_topheading_slider_nav').find('.nav-tabs').toggleClass('nav_toggle_open');
            });

        },
        BannerLeftSlider: function() {
            new Swiper('.blog_banner_slider_left_vertical .swiper-container', {
                spaceBetween: 0,
                direction: 'vertical',
                slidesPerView: 3,
                loop: true,
                autoplay: {
                    delay: 2000
                },
                touchRatio: 0.1,
                freeMode: true,
                loopedSlides: 3, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });
        },
        BannerRightSlider: function() {
            new Swiper('.blog_banner_slider_right_vertical .swiper-container', {
                spaceBetween: 0,
                direction: 'vertical',
                slidesPerView: 3,
                loop: true,
                autoplay: {
                    delay: 2000,
                    reverseDirection: true,
                },
                touchRatio: 0.1,
                freeMode: true,
                loopedSlides: 3, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });
        },
        BannerCenterSlider: function() {
            var swiper = new Swiper('.blog_banner_slider_center .swiper-container', {
                spaceBetween: 0,
                loop: false,
                touchRatio: 0,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        },
        SortToggle: function() {
            $('.blog_sorting_togglediv span').on("click", function(e) {
                $('.sort_toggleclose').closest('.blog_sorting_option').slideUp(200);
                e.preventDefault();
                $(this).parent().find('.blog_sorting_option').slideDown(200);
            });
            $('.sort_toggleclose').on("click", function(e) {
                e.preventDefault();
                $(this).closest('.blog_sorting_option').slideUp(200);
            });
            $(document).on('click', function(e) {
                if (!$(e.target).closest('.blog_sorting_togglediv').length) {
                    $('.sort_toggleclose').closest('.blog_sorting_option').slideUp(200);
                }
            });
        },
        Fullwidth_Multislide_Slider: function() {
            var swiper = new Swiper('.blog_fullwidth_multislide_slider .swiper-container', {
                slidesPerView: 6,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 2000
                },
                touchRatio: 0.1,
                freeMode: true,
                loopedSlides: 6, //looped slides should be the same		
                breakpoints: {
                    // when window width is <= 320px
                    480: {
                        slidesPerView: 1,
                    },
                    // when window width is <= 480px
                    600: {
                        slidesPerView: 2,
                    },
                    // when window width is <= 640px
                    767: {
                        slidesPerView: 3,
                    },
                    // when window width is <= 640px
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                    1530: {
                        slidesPerView: 5,
                    }
                },
            });
        },
        InstargamSlider: function() {
            var swiper = new Swiper('.blog_instagram_slider .swiper-container', {
                slidesPerView: 6,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 2000
                },
                touchRatio: 0.1,
                freeMode: true,
                loopedSlides: 6, //looped slides should be the same	
                breakpoints: {
                    // when window width is <= 320px
                    480: {
                        slidesPerView: 1,
                    },
                    // when window width is <= 480px
                    600: {
                        slidesPerView: 2,
                    },
                    // when window width is <= 640px
                    767: {
                        slidesPerView: 3,
                    },
                    // when window width is <= 640px
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                    1530: {
                        slidesPerView: 5,
                    }
                },
            });
        },
        CookiesPopup: function() {
            $('.blog_icon').on("click", function(e) {
                e.preventDefault();
                $(this).parent().toggleClass('open animation_effect');
                //var _this = $(this);
                //setTimeout(function(){ _this.removeClass('animation_effect'); }, 900);
            });
            $('.cookie_btn').on("click", function(e) {
                e.preventDefault();
                $('.blog_cookies_div').hide();
                assect_cookie = 1;
            });
        },
        SinglepageToggle: function() {
            $('.blog_toggleonclick').on('click', function(e) {
                e.preventDefault();
                $('.blog_toggleonclick').not($(this).closest('.blog_comment_meta').find('.blog_toggleonclick')).removeClass('menu_open');
                $(this).closest('.blog_comment_meta').find('.blog_toggleonclick').toggleClass('menu_open');
            });
            $(document).on('click', function(e) {
                if (!$(e.target).closest('.blog_toggleonclick').length) {
                    $('.blog_toggleonclick').removeClass("menu_open");
                }
            });
        },
        CommentAction: function() {
            $(".blog_comment_action").on('click', function(e) {
                $('ul.comment_action').not($(this).closest('.blog_comment_meta').find('ul.comment_action')).removeClass('open');
                $(this).closest('.blog_comment_meta').find('ul.comment_action').toggleClass('open');
            });
            $(document).on('click', function(e) {
                if (!$(e.target).closest('.blog_comment_action').length) {
                    $('.comment_action').removeClass("open");
                }
            });

        },
        TestimonialSlider: function() {
            var galleryThumbs15 = new Swiper('.blog_testimonial_slider .testimonial-thumbs', {
                spaceBetween: 0,
                slidesPerView: 3,
                //centeredSlides: true,
                initialSlide: 1,
                loop: false,
                loopedSlides: 3,
                freeMode: true,
                direction: 'horizontal',
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });
            var galleryTop15 = new Swiper('.blog_testimonial_slider .testimonial-top', {
                spaceBetween: 30,
                direction: 'horizontal',
                thumbs: {
                    swiper: galleryThumbs15
                }
            });
        },
        ContactFormSubmit: function() {
            if ($('#send_btn').length > 0) {
                $("#send_btn").on("click", function() {
                    var e = $("#ur_name").val();
                    var t = $("#ur_mail").val();
                    var ph = $("#ur_phone").val();
                    var s = $("#sub").val();
                    var r = $("#msg").val();
                    $.ajax({
                        type: "POST",
                        url: "ajaxmail.php",
                        data: {
                            username: e,
                            useremail: t,
                            userphone: ph,
                            usersub: s,
                            mesg: r
                        },
                        success: function(n) {
                            var i = n.split("#");
                            if (i[0] == "1") {
                                $("#ur_name").val("");
                                $("#ur_mail").val("");
                                $("#ur_phone").val("");
                                $("#sub").val("");
                                $("#msg").val("");
                                $("#err").html(i[1]);
                            } else {
                                $("#ur_name").val(e);
                                $("#ur_mail").val(t);
                                $("#ur_phone").val(ph);
                                $("#sub").val(s);
                                $("#msg").val(r);
                                $("#err").html(i[1]);
                            }
                        }
                    });
                });
            }
        },
        StickySidebar: function() {
            $('.theiaStickySidebar').theiaStickySidebar({
                additionalMarginTop: 30,
                additionalMarginBottom: 30,
            });
        },
        wow: function() {
            new WOW().init();
        }
    };
    $(document).ready(function() {
        blog.init();

    });
    // Preloader Js
    jQuery(window).on('load', function() {
        jQuery("#blog_preloader_box").fadeOut();
        jQuery("#blog_preloader_wrapper").delay(350).fadeOut("slow");
    });
    // Window Scroll
    $(window).scroll(function() {
        var wh = window.innerWidth;
        // //Go to top
        if (assect_cookie == 0) {
            if ($(this).scrollTop() > 100) {
                $(".blog_cookies_div").show();
            } else {
                $(".blog_cookies_div").hide();
            }
        }
        $.get("http://localhost:3000/xlarge/post/list", function(data) {
            // console.log(data);

            let posts = "";

            data.forEach((ele) => {
                // console.log(ele);

                posts += `<div class="card">
				<img class="card-img-top" src="${ele.img}" alt="">
				<div class="card-body">
				  <h4 class="card-title">${ele.title}</h4>
				  <p class="card-text">${ele.content}</p>
				</div>
			  </div>`;
            });
            // console.log(posts);
            $("#blogPost").html(posts);
        });

    });

    // Get Posts
    window.onload = function() {

        // http request by JQ
        $.get("http://localhost:3000/xlarge/post/list", function(data) {
            // console.log(data);

            let sliderPosts = "";
            let posts = "";

            data.forEach((ele) => {
                // console.log(ele);
                let imgSrc = ele.img;
                // if (ele.img === "")
                // 	imgSrc = "images/The-Uses-of-Technology-in-Our-Life.jpg";
                // else
                // 	imgSrc = ele.img;

                // slider
                sliderPosts +=
                    `<div class="swiper-slide">
				<div class="blog_post_slider_wrapper"> 
					<div class="blog_post_slider_img"> 
						<img src="${imgSrc}" alt=""> 
					</div> 
					<div class="blog_post_slider_content"> 
						<h2><a href="blog_single_with_sidebar.html">${ele.title}</a></h2>
						<div class="blog_author_data"><a href="#"><img src="https://via.placeholder.com/34x34" class="img-fluid" alt="" width="34" height="34"> John Doe</a></div> 
						<ul class="blog_meta_tags">
							<li><span class="blog_bg_blue"><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="7px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)" d="M11.829,3.074 C11.732,2.948 9.422,-0.000 6.468,-0.000 C3.514,-0.000 1.203,2.948 1.106,3.074 C0.916,3.320 0.916,3.678 1.106,3.925 C1.203,4.050 3.514,6.999 6.468,6.999 C9.422,6.999 11.732,4.050 11.829,3.925 C12.020,3.678 12.020,3.320 11.829,3.074 ZM7.370,1.771 C7.569,1.651 7.846,1.788 7.989,2.077 C8.132,2.366 8.087,2.696 7.888,2.816 C7.689,2.936 7.412,2.799 7.269,2.510 C7.126,2.221 7.171,1.890 7.370,1.771 ZM6.468,5.930 C4.404,5.930 2.668,4.183 2.067,3.499 C2.473,3.037 3.397,2.091 4.589,1.525 C4.357,1.915 4.220,2.381 4.220,2.883 C4.220,4.251 5.227,5.360 6.468,5.360 C7.709,5.360 8.715,4.251 8.715,2.883 C8.715,2.381 8.579,1.915 8.346,1.525 C9.539,2.091 10.463,3.037 10.869,3.499 C10.268,4.184 8.531,5.930 6.468,5.930 Z"/></svg> 21K</span></li> 
							<li><span class="blog_bg_pink"><svg xmlns="http://www.w3.org/2000/svg" width="13px" height="10px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)" d="M12.485,7.049 C12.142,7.544 11.670,7.962 11.070,8.303 C11.119,8.417 11.168,8.520 11.219,8.615 C11.270,8.710 11.330,8.801 11.401,8.889 C11.471,8.977 11.525,9.045 11.564,9.095 C11.603,9.145 11.665,9.214 11.752,9.305 C11.840,9.394 11.895,9.453 11.919,9.482 C11.924,9.487 11.934,9.497 11.948,9.514 C11.963,9.530 11.974,9.542 11.981,9.549 C11.988,9.556 11.998,9.568 12.010,9.585 C12.022,9.602 12.030,9.614 12.035,9.624 L12.053,9.659 C12.053,9.659 12.058,9.673 12.068,9.702 C12.077,9.730 12.078,9.745 12.071,9.748 C12.064,9.750 12.062,9.766 12.064,9.794 C12.050,9.860 12.018,9.912 11.970,9.950 C11.921,9.988 11.868,10.005 11.810,10.000 C11.568,9.967 11.360,9.929 11.186,9.887 C10.441,9.697 9.769,9.394 9.169,8.977 C8.734,9.053 8.309,9.091 7.893,9.091 C6.582,9.091 5.441,8.778 4.469,8.153 C4.749,8.172 4.962,8.182 5.107,8.182 C5.886,8.182 6.633,8.075 7.349,7.862 C8.064,7.649 8.703,7.343 9.264,6.946 C9.868,6.510 10.333,6.008 10.657,5.440 C10.981,4.872 11.143,4.271 11.143,3.637 C11.143,3.272 11.087,2.912 10.976,2.557 C11.600,2.893 12.093,3.315 12.456,3.821 C12.818,4.328 13.000,4.872 13.000,5.455 C13.000,6.023 12.828,6.554 12.485,7.049 ZM7.672,6.787 C6.886,7.111 6.031,7.273 5.107,7.272 C4.691,7.272 4.266,7.235 3.830,7.159 C3.231,7.575 2.558,7.879 1.814,8.068 C1.640,8.111 1.432,8.148 1.190,8.182 L1.168,8.182 C1.115,8.182 1.065,8.163 1.019,8.125 C0.973,8.087 0.946,8.037 0.936,7.976 C0.931,7.962 0.929,7.946 0.929,7.930 C0.929,7.914 0.930,7.898 0.932,7.884 C0.935,7.869 0.939,7.855 0.947,7.841 L0.965,7.805 C0.965,7.805 0.973,7.792 0.990,7.767 C1.007,7.740 1.017,7.729 1.019,7.731 C1.022,7.734 1.033,7.722 1.052,7.696 C1.071,7.670 1.081,7.659 1.081,7.664 C1.105,7.636 1.161,7.577 1.248,7.486 C1.335,7.396 1.398,7.326 1.436,7.277 C1.475,7.227 1.530,7.158 1.600,7.071 C1.670,6.983 1.730,6.892 1.781,6.797 C1.832,6.703 1.881,6.598 1.930,6.485 C1.330,6.144 0.859,5.725 0.515,5.228 C0.172,4.731 0.000,4.200 0.000,3.637 C0.000,2.978 0.227,2.370 0.682,1.812 C1.137,1.253 1.757,0.812 2.543,0.487 C3.329,0.163 4.183,0.000 5.107,0.000 C6.031,0.000 6.886,0.162 7.672,0.487 C8.458,0.812 9.078,1.253 9.532,1.812 C9.987,2.370 10.214,2.978 10.214,3.637 C10.214,4.295 9.987,4.903 9.532,5.462 C9.078,6.020 8.458,6.462 7.672,6.787 ZM8.716,2.280 C8.337,1.859 7.825,1.525 7.182,1.279 C6.539,1.033 5.847,0.910 5.107,0.910 C4.367,0.910 3.676,1.033 3.032,1.279 C2.389,1.525 1.878,1.859 1.498,2.280 C1.119,2.702 0.929,3.154 0.929,3.637 C0.929,4.025 1.057,4.399 1.313,4.759 C1.569,5.119 1.930,5.431 2.394,5.697 L3.098,6.094 L2.844,6.691 C3.008,6.596 3.158,6.503 3.294,6.414 L3.613,6.194 L3.997,6.264 C4.375,6.331 4.745,6.364 5.107,6.364 C5.847,6.364 6.539,6.240 7.182,5.994 C7.825,5.748 8.337,5.415 8.716,4.993 C9.096,4.572 9.286,4.120 9.286,3.637 C9.286,3.154 9.096,2.702 8.716,2.280 Z"/></svg>12</span></li> 
						</ul>
					</div> 
				</div>
			</div>`

                // posts
                posts +=
                    `<div class="swiper-slide">
			<div class="blog_post_style2">
				<div class="blog_post_style2_img">
					<img src="${imgSrc}" class="img-fluid" alt="">
				</div>
				<div class="blog_post_style2_content">
					<h3><a href="blog_single_with_sidebar.html">${ele.title}</a></h3>
					<div class="blog_author_data"><a href="#"><img src="https://via.placeholder.com/34x34" class="img-fluid" alt="" width="34" height="34"> John Doe</a></div> 
					<ul class="blog_meta_tags">
						<li><span class="blog_bg_blue"><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="7px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)" d="M11.829,3.074 C11.732,2.948 9.422,-0.000 6.468,-0.000 C3.514,-0.000 1.203,2.948 1.106,3.074 C0.916,3.320 0.916,3.678 1.106,3.925 C1.203,4.050 3.514,6.999 6.468,6.999 C9.422,6.999 11.732,4.050 11.829,3.925 C12.020,3.678 12.020,3.320 11.829,3.074 ZM7.370,1.771 C7.569,1.651 7.846,1.788 7.989,2.077 C8.132,2.366 8.087,2.696 7.888,2.816 C7.689,2.936 7.412,2.799 7.269,2.510 C7.126,2.221 7.171,1.890 7.370,1.771 ZM6.468,5.930 C4.404,5.930 2.668,4.183 2.067,3.499 C2.473,3.037 3.397,2.091 4.589,1.525 C4.357,1.915 4.220,2.381 4.220,2.883 C4.220,4.251 5.227,5.360 6.468,5.360 C7.709,5.360 8.715,4.251 8.715,2.883 C8.715,2.381 8.579,1.915 8.346,1.525 C9.539,2.091 10.463,3.037 10.869,3.499 C10.268,4.184 8.531,5.930 6.468,5.930 Z"/></svg> 21K</span></li> 
						<li><span class="blog_bg_pink"><svg xmlns="http://www.w3.org/2000/svg" width="13px" height="10px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)" d="M12.485,7.049 C12.142,7.544 11.670,7.962 11.070,8.303 C11.119,8.417 11.168,8.520 11.219,8.615 C11.270,8.710 11.330,8.801 11.401,8.889 C11.471,8.977 11.525,9.045 11.564,9.095 C11.603,9.145 11.665,9.214 11.752,9.305 C11.840,9.394 11.895,9.453 11.919,9.482 C11.924,9.487 11.934,9.497 11.948,9.514 C11.963,9.530 11.974,9.542 11.981,9.549 C11.988,9.556 11.998,9.568 12.010,9.585 C12.022,9.602 12.030,9.614 12.035,9.624 L12.053,9.659 C12.053,9.659 12.058,9.673 12.068,9.702 C12.077,9.730 12.078,9.745 12.071,9.748 C12.064,9.750 12.062,9.766 12.064,9.794 C12.050,9.860 12.018,9.912 11.970,9.950 C11.921,9.988 11.868,10.005 11.810,10.000 C11.568,9.967 11.360,9.929 11.186,9.887 C10.441,9.697 9.769,9.394 9.169,8.977 C8.734,9.053 8.309,9.091 7.893,9.091 C6.582,9.091 5.441,8.778 4.469,8.153 C4.749,8.172 4.962,8.182 5.107,8.182 C5.886,8.182 6.633,8.075 7.349,7.862 C8.064,7.649 8.703,7.343 9.264,6.946 C9.868,6.510 10.333,6.008 10.657,5.440 C10.981,4.872 11.143,4.271 11.143,3.637 C11.143,3.272 11.087,2.912 10.976,2.557 C11.600,2.893 12.093,3.315 12.456,3.821 C12.818,4.328 13.000,4.872 13.000,5.455 C13.000,6.023 12.828,6.554 12.485,7.049 ZM7.672,6.787 C6.886,7.111 6.031,7.273 5.107,7.272 C4.691,7.272 4.266,7.235 3.830,7.159 C3.231,7.575 2.558,7.879 1.814,8.068 C1.640,8.111 1.432,8.148 1.190,8.182 L1.168,8.182 C1.115,8.182 1.065,8.163 1.019,8.125 C0.973,8.087 0.946,8.037 0.936,7.976 C0.931,7.962 0.929,7.946 0.929,7.930 C0.929,7.914 0.930,7.898 0.932,7.884 C0.935,7.869 0.939,7.855 0.947,7.841 L0.965,7.805 C0.965,7.805 0.973,7.792 0.990,7.767 C1.007,7.740 1.017,7.729 1.019,7.731 C1.022,7.734 1.033,7.722 1.052,7.696 C1.071,7.670 1.081,7.659 1.081,7.664 C1.105,7.636 1.161,7.577 1.248,7.486 C1.335,7.396 1.398,7.326 1.436,7.277 C1.475,7.227 1.530,7.158 1.600,7.071 C1.670,6.983 1.730,6.892 1.781,6.797 C1.832,6.703 1.881,6.598 1.930,6.485 C1.330,6.144 0.859,5.725 0.515,5.228 C0.172,4.731 0.000,4.200 0.000,3.637 C0.000,2.978 0.227,2.370 0.682,1.812 C1.137,1.253 1.757,0.812 2.543,0.487 C3.329,0.163 4.183,0.000 5.107,0.000 C6.031,0.000 6.886,0.162 7.672,0.487 C8.458,0.812 9.078,1.253 9.532,1.812 C9.987,2.370 10.214,2.978 10.214,3.637 C10.214,4.295 9.987,4.903 9.532,5.462 C9.078,6.020 8.458,6.462 7.672,6.787 ZM8.716,2.280 C8.337,1.859 7.825,1.525 7.182,1.279 C6.539,1.033 5.847,0.910 5.107,0.910 C4.367,0.910 3.676,1.033 3.032,1.279 C2.389,1.525 1.878,1.859 1.498,2.280 C1.119,2.702 0.929,3.154 0.929,3.637 C0.929,4.025 1.057,4.399 1.313,4.759 C1.569,5.119 1.930,5.431 2.394,5.697 L3.098,6.094 L2.844,6.691 C3.008,6.596 3.158,6.503 3.294,6.414 L3.613,6.194 L3.997,6.264 C4.375,6.331 4.745,6.364 5.107,6.364 C5.847,6.364 6.539,6.240 7.182,5.994 C7.825,5.748 8.337,5.415 8.716,4.993 C9.096,4.572 9.286,4.120 9.286,3.637 C9.286,3.154 9.096,2.702 8.716,2.280 Z"/></svg>12</span></li> 
					</ul> 
					<p>${ele.content}</p>
					<a href="#" class="blog_readmore">read more <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="6px"><path fill-rule="evenodd" fill="rgb(255, 54, 87)" d="M12.924,2.786 L10.035,0.042 C9.955,-0.026 9.867,-0.039 9.772,0.003 C9.677,0.045 9.629,0.120 9.629,0.230 L9.629,1.986 L0.242,1.986 C0.172,1.986 0.114,2.010 0.069,2.057 C0.024,2.104 0.001,2.164 0.001,2.237 L0.001,3.743 C0.001,3.816 0.024,3.876 0.069,3.923 C0.114,3.970 0.172,3.994 0.242,3.994 L9.629,3.994 L9.629,5.750 C9.629,5.854 9.677,5.930 9.772,5.977 C9.867,6.019 9.955,6.003 10.035,5.930 L12.924,3.154 C12.974,3.102 12.999,3.039 12.999,2.966 C12.999,2.899 12.974,2.839 12.924,2.786 Z"></path></svg></a>
				</div>
			</div>
		</div>`;
            });
            // console.log(posts);
            $("#posts").html(posts);
            $("#slider").html(sliderPosts);
        });
    };



})(jQuery);