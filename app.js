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

// end

// add to cart
function addToCart() {
  debugger;
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








// Get all the view buttons
var viewButtons = document.querySelectorAll("#viewButton");

// Add event listeners to each view button
viewButtons.forEach(function(viewButton) {
  viewButton.addEventListener("click", function() {
    // Get the parent container of the clicked button
    var productContainer = viewButton.closest(".pro");

    // Get the product details within the container
    var productImage = productContainer.querySelector("img").getAttribute("src");
    var productName = productContainer.querySelector(".des h5").textContent;
    var productPrice = productContainer.querySelector(".des h4").textContent;

    // Encode the product name for URL parameter
    var encodedProductName = encodeURIComponent(productName);

    // Redirect to the product details page with URL parameters
    window.location.href = "product-details.html?name=" + encodedProductName + "&price=" + productPrice + "&image=" + productImage;
  });
});
