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
    } else if( !/\d/.test(elUsername.value ) ) {
      elH1.innerText = "Ooops, there was no number in your username... :'(";
    } else if( !/^([a-z][a-z0-9\.]*)@((?:[a-z0-9]+\.)+[a-z]{2,3})$/i.test( elEmail.value ) ) {
      elH1.innerText = "Your email looks off....";
    } else {
       elH1.innerText = `Welcome ${elUsername.value}!`;
    }
    // } else {
    // //} else if( /\d/.test(elUsername.value) )
    //   // password is okay.. let's check for a number
    //   // in the username
    //   let numberFound = false;
    //   for(let i=0; i<elUsername.value.length; i++){
    //     if( "0123456789".indexOf(elUsername.value[i]) > -1 ) {
    //       numberFound = true;
    //       break;
    //     }
    //   }
    //   // email test with regular expressions
    //   // must start with a letter
    //   // then there to be letters-numbers or a dot zero or more times
    //   // then an @ symbol
    //   // then more letters-numbers...  and then a dot
    //   // and then 2-3 letters.
      
    //   if( !/^([a-z][a-z0-9\.]*)@((?:[a-z0-9]+\.)+[a-z]{2,3})$/i.test( elEmail.value) ) {
    //     elH1.innerText = "Your email looks off....";
    //   }

    //   // * - zero or many
    //   // + - one or many
    //   // ? - zero or one

    //   // (?:)

    //   if( numberFound ) {
    //     // elH1.innerText = "Welcome " + elUsername.value + "!";
    //     elH1.innerText = `Welcome ${elUsername.value}!`;
    //   } else {
    //     elH1.innerText = "Ooops, there was no number in your username... :'(";
    //   }
    // }
    console.log("Form Submitted");
  });
  // handle counters for bonus example
  document.querySelectorAll(".counter button").forEach(function( el ) {
    el.addEventListener("click",function(event){
      console.log( event );
    });
  });
});
//document.querySelector("form").onsubmit(function(){});

//
//Array.prototype.forEach.call(document.getElementsByClassName("counter"),function(el){ console.log( el ); });
