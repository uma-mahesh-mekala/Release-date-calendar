$(document).ready(function(){
    $('form').submit(function(e){

        e.preventDefault();
        $("#submit").fadeOut(0);
        $(".loader").addClass("loader-visible");
        
        setTimeout(() => { $(".loader").removeClass("loader-visible"); }, 500);
        
        setTimeout(() => { $("p").addClass("visible"); }, 500);
        
        setTimeout(() => { this.reset(); }, 1000);


    });
    $("#image").change(function (e) {
        var file = this.files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
            $("#imagePreview").attr("src", reader.result).show();
            
        }

        if (file) {
            reader.readAsDataURL(file);
        }
        else {
            $("i#magePreview").attr('src', '').hide();
        }
    });
  });                                                                                                                                                                             