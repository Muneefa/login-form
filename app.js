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



// add to cart

var a = 0;
var cartItems = [];
    function addToCart() {
      a++;
      cartItems.push("western top"); 
      document.getElementById("cartadd").textContent = a;
    }
    // function addToCart() {
    //   cartCount++;
      // Replace "Item Name" with the actual item name
  
      // Update the cart count displayed on the page
      // document.getElementById("cartCount").textContent = cartCount;
    // }

    function goToCart() {
      window.location.href = "cart.html";
    }
    

    // displaying cart
    // var cart=[];
    // function displaycart(a){
    //   let j=0;
    //   if(cart.length==0){
    //     document.getElementById('cartitem').innerHTML=cartItems;
    //   }
    //   else{
    //     document.getElementById("cartitem").innerHTML=cart.map(items)=>
    //     {
    //       var 
    //     }
    //   }
    // }

    // function viewCart() {
    //   var cartItemsContainer = document.getElementById("cartItemsContainer");
    
    //   // Clear previous contents
    //   cartItemsContainer.innerHTML = "";
    
    //   // Check if cart is empty
    //   if (cartItems.length === 0) {
    //     cartItemsContainer.textContent = "Your cart is empty.";
    //     return;
    //   }
    
    //   // Create a list to display the cart items
    //   var itemList = document.createElement("ul");
    
    //   // Iterate over the cartItems array and create list items for each item
    //   cartItems.forEach(function (item) {
    //     var listItem = document.createElement("li");
    //     listItem.textContent = item;
    //     itemList.appendChild(listItem);
    //   });
    
    //   // Append the list to the cartItemsContainer element
    //   cartItemsContainer.appendChild(itemList);
    // }
    // alert(nj)
    