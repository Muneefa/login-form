var modal = document.getElementById('container');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// login form validation
function validateform(){  
  var name=document.myform.uname.value;  
  var password=document.myform.psw.value;  
    
  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
  }  

  // shop now button with gif
  const c = document.getElementById("show-image-button");
      const a = document.getElementById("my-image"); 
      c.addEventListener("click", () => { 
         a.style.display = "block"; 
      });



      // to close the image
var r = document.getElementsByClassName("close");
var i;

for (i = 0; i < r.length; i++) {
  r[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

// var closeButton = document.getElementsByClassName("close")[0]; // Assuming there is only one close button
// var gifContainer = document.getElementById("my-image").parentNode;

// closeButton.addEventListener("click", function() {
//   gifContainer.style.display = 'none';
// });


