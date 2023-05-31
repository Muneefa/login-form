var modal = document.getElementById('container');


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";  //closed
        
    }
    else
    {
      //open
    }
}
function loginclick()
{
  document.getElementById('container').style.display="block";
  document.getElementById('text1').style.margin = "5% 5% 5% 22%";
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

  
//to close the image
const s = document.getElementById("show-image-button");
const z = document.getElementById("my-image");

s.addEventListener("click", () => {
  z.style.display = "block";
});


var r = document.getElementsByClassName("close");
for (var i = 0; i < r.length; i++) {
  r[i].addEventListener("click", function() {
    z.style.display = "none";
  });
}



