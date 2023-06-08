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

// end

// add to cart
function addToCart() {
  
  var cartCountElement = document.getElementById("cartCount");
  var currentCount = parseInt(cartCountElement.innerHTML);
  cartCountElement.innerHTML = currentCount + 1;
}
// when clicked on cart icon it will go to cart,htnml
// Get the cart icon element
var cartIcon = document.getElementById("cartIcon");

// Attach a click event listener to the cart icon
cartIcon.addEventListener("click", function() {
    // Redirect to the cart.html page
    window.location.href = "cart.html";
});




