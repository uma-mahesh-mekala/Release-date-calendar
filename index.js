$(document).ready(function(){
    $('form').submit(function(e){

        e.preventDefault();
        $("#submit").fadeOut(0);
        $(".loader").addClass("loader-visible");
        
        setInterval(() => { $(".loader").removeClass("loader-visible"); }, 1000);
        
        setInterval(() => { $("p").addClass("visible"); }, 1000);
        
        setTimeout(() => { this.reset(); }, 500);


    });
  });