$(document).ready(function(){
    $('form').submit(function(e){

        e.preventDefault();
        $("#submit").fadeOut(0);
        $(".loader").addClass("loader-visible");
        
        setTimeout(() => { $(".loader").removeClass("loader-visible"); }, 500);
        
        setTimeout(() => { $("p").addClass("visible"); }, 500);
        
        setTimeout(() => { this.reset(); }, 1000);


    });
  });