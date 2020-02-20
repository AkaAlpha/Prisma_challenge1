console.log("Hello Jedi Master ");

var rellax = new Rellax('.rellax');


$(window).scroll(function(){
    if($(document).scrollTop()>700){
        $('nav').addClass('scrolling');
    }
    else{
        $('nav').removeClass('scrolling');
    }
});
