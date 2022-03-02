(function($, window, document){
    var bmw = {
        init:function(){
            this.parallax();
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();
        },
        parallax(){
            
        },
        header: function(){
                        
            // 메인버튼 이벤트
            $('.main-btn').on({
                mouseenter: function(){
                    $('.main-btn').removeClass('addCurrent');
                    $(this).addClass('addCurrent');
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(400,'easeOutExpo');
                },
                focusin: function(){
                    $('.main-btn').removeClass('addCurrent');
                    $(this).addClass('addCurrent');
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(600,'easeOutExpo');
                }
            });
            // 서브버튼 이벤트
            $('.sub-btn').on({
                mouseenter: function(){
                    $('.sub-btn').removeClass('addCurrent');
                    $(this).addClass('addCurrent');
                    $('.sub-sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(400,'easeOutExpo');
                },
                focusin: function(){
                    $('.sub-btn').removeClass('addCurrent');
                    $(this).addClass('addCurrent');
                    $('.sub-sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(600,'easeOutExpo');
                }
            });

            // 슬라이드업
            $('#nav').on({
                mouseleave: function(){
                    $('.main-btn').removeClass('addCurrent');
                    $('.sub').stop().slideUp(400,'easeOutExpo');
                }
            });

            // 서브1 페이드인 효과
            function ani(){
                $('.img2').eq(0).stop().animate({opacity:1},600, function(){
                    $('.img2').eq(1).stop().animate({opacity:1},600, function(){
                        $('.img2').eq(2).stop().animate({opacity:1},600, function(){
                            $('.img2').eq(3).stop().animate({opacity:1},600, function(){
                                $('.img2').eq(4).stop().animate({opacity:1},600);
                            });
                        });
                    });
                });
            }
            
            setTimeout(ani, 600);
            
        },
        section1: function(){
            
        },
        section2: function(){
            
        },
        section3: function(){
            
        },
        section4: function(){
            // 섹션4 페이드인 효과
            function ani(){
                $('.img').eq(0).stop().animate({opacity:1},600, function(){
                    $('.img').eq(1).stop().animate({opacity:1},600, function(){
                        $('.img').eq(2).stop().animate({opacity:1},600, function(){
                            $('.img').eq(3).stop().animate({opacity:1},600, function(){
                                $('.img').eq(4).stop().animate({opacity:1},600);
                            });
                        });
                    });
                });
            }
            
            setTimeout(ani, 600);
        }
    }
    bmw.init();

})(jQuery, window, document);