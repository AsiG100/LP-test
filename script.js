var submit = document.querySelector('input[type=submit]');

submit.addEventListener('click', function(e){
    e.preventDefault();
    var fields = document.querySelectorAll('input');
    var filledFields = 0
    fields.forEach(function(field){
        var validation = document.querySelector("."+field.className+"-validation");
        if(validation){
            validation.textContent = "";
            validation.classList.remove('alert');
            validation.classList.remove('success');

            if(field.value === "" || (field.className === "check" && !field.checked)){
                validation.textContent = "This field is required!";
                validation.classList.add("alert");
            }else if(field.className === "email"){
                if(!ValidateEmail(field.value)){
                    validation.textContent = "Your email is invalid!";
                    validation.classList.add("alert");
                }else{
                    filledFields++;
                }
            }else{
                filledFields++;
            }
        }
    });

    if(filledFields === 4){
        var validation = document.querySelector(".name-validation");
        validation.textContent = "The form has been submitted successfully!";
        validation.classList.add("success");
    }

});

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true;
  }
    return false;
}
