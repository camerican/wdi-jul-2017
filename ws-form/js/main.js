let elUsername, elEmail, elPassword, elH1;
document.addEventListener("DOMContentLoaded",function(){
  elH1 = document.querySelector("h1");
//  elH1 = document.getElementsByTagName("h1")[0];
  elUsername = document.querySelector("input[name=username]");
  elEmail = document.querySelector("input[name=email]");
  elPassword = document.querySelector("input[name=password]");
  document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault(); //stop form submission (default behavior for a form)
    // password check
    if( elPassword.value != "12345678" ) {
      elH1.innerText = "Oh no, bad password!!";
    } else {
      // password is okay.. let's check for a number
      // in the username
      let numberFound = false;
      for(let i=0; i<elUsername.value.length; i++){
        if( "0123456789".indexOf(elUsername.value[i]) > -1 ) {
          numberFound = true;
          break;
        }
      }
      if( numberFound ) {
        // elH1.innerText = "Welcome " + elUsername.value + "!";
        elH1.innerText = `Welcome ${elUsername.value}!`;
      } else {
        elH1.innerText = "Ooops, there was no number in your username... :'(";
      }
    }
    console.log("Form Submitted");
  });
});
//document.querySelector("form").onsubmit(function(){});

