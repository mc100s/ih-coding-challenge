(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    
    $( document ).ready(function() {

        scaleVideoContainer();

        initBannerVideoSize('.video-container .poster img');
        initBannerVideoSize('.video-container .filter');
        initBannerVideoSize('.video-container video');

        $(window).on('resize', function() {
            scaleVideoContainer();
            scaleBannerVideoSize('.video-container .poster img');
            scaleBannerVideoSize('.video-container .filter');
            scaleBannerVideoSize('.video-container video');
        });

    });

    function scaleVideoContainer() {

        var height = $(window).height() + 5;
        var unitHeight = parseInt(height) + 'px';
        $('.homepage-hero-module').css('height',unitHeight);

    }

    function initBannerVideoSize(element){

        $(element).each(function(){
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });

        scaleBannerVideoSize(element);

    }

    function scaleBannerVideoSize(element){

        var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

        // console.log(windowHeight);

        $(element).each(function(){
            var videoAspectRatio = $(this).data('height')/$(this).data('width');

            $(this).width(windowWidth);

            if(windowWidth < 1000){
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

                $(this).width(videoWidth).height(videoHeight);
            }

            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

        });
    }

    function checkScroll(){
        var startY = $('.nav-wrapper-landing').height() * 1; //The point where the nav-wrapper changes in px

        if($(window).scrollTop() > startY){
            $('.nav-wrapper-landing').addClass("scrolled");
            document.getElementById("nav-landing-logo").src="https://res.cloudinary.com/dx1s7kdgz/image/upload/v1496716199/OUTVENTURE-04_qzk92u.png";
        }else{
            $('.nav-wrapper-landing').removeClass("scrolled");
            document.getElementById("nav-landing-logo").src="https://res.cloudinary.com/dx1s7kdgz/image/upload/v1496716199/OUTVENTURE-04_qzk92u.png";
        }
    }

    if($('.nav-wrapper-landing').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }


  }); // end of document ready
})(jQuery); // end of jQuery name space
