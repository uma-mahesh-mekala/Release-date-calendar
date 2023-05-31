function formSubmit()
{
    var afterSubmit = document.getElementById("submit");
    afterSubmit.css.animate.fadeout(100);

    document.getElementById("form").reset();
}
var submitButton = document.getElementById("form");
submitButton.addEventListener('submit', formSubmit);