let pwtoggler = document.querySelector(".pwBtn");
let pwInput = document.querySelector(".passwordFiled input");
function passwordShow (){

    if ( pwInput.type == 'password') {
       pwInput.type = 'text'; 

       pwtoggler.innerHTML = '<i class="bi bi-eye-fill"></i>';
    }
     else {
        pwInput.type = 'password'; 
        pwtoggler.innerHTML = ' <i class="bi bi-eye-slash"></i>';
     }
}

pwtoggler.addEventListener("click", passwordShow);


let submitBtn = document.querySelector(".submitBtn");
   function submitation() {

   pwInput.value.length > 6 ? alert("Form Submitted") :
  
   (pwInput.value.length == 0 ? alert("Password is required") :
    alert("Password must be at least 8 characters"));

}

submitBtn.addEventListener("click",submitation)



