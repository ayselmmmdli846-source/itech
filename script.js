document.addEventListener("DOMContentLoaded", function () {


    // ================= SEBET =================

    let count = 0;

    let cartCount = document.getElementById("cart-count");

    let buttons = document.querySelectorAll(".add-cart");


    buttons.forEach(function(button){

        button.addEventListener("click", function(){


            count++;


            if(cartCount){

                cartCount.innerText = count;

            }


        });


    });





    // ================= AXTARIS =================


    let searchInput = document.getElementById("search-input");

    let products = document.querySelectorAll(".shop-card");



    if(searchInput){


        searchInput.addEventListener("keyup", function(){


            let value = searchInput.value.toLowerCase();



            products.forEach(function(product){


                let title = product.querySelector("h3").innerText.toLowerCase();



                if(title.includes(value)){


                    product.style.display = "block";


                }

                else{


                    product.style.display = "none";


                }


            });



        });



    }



});