// window.onload = function () {
//     // Get the modal
//     var modal = document.getElementById('myModal');

//     // Get the button that opens the modal
//     var btn = document.getElementById("myBtn");

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks the button, open the modal 
//     btn.onclick = function () {
//         modal.style.display = "block";
//     }

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function () {
//         modal.style.display = "none";
//     }

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function (event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
// }

jQuery(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
   console.log("document is ready");
     
     
     jQuery('.btn[href^=#]').click(function(e){
       e.preventDefault();
       var href = jQuery(this).attr('href');
       jQuery(href).modal('toggle');
     });
   
     
   
   });  
     