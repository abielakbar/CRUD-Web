$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var typed = new Typed(".type", {
        strings: ["Designer",
                  "Programmer",
                  "YouTuber",
                  "Blogger"
                 ],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });
    var typed = new Typed(".type-2", {
        strings: ["Designer",
                  "Programmer",
                  "YouTuber",
                  "Blogger"
                 ],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });
        
});