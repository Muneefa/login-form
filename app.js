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
    window.location.href = "shop.html";
  }  

  
