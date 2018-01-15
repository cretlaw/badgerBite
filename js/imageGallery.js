// $(document).ready(function () {
//     $(".gallery-img").click(function(){
//       var t = $(this).attr("src");
//       $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
//       $("#myModal").modal();
//     });
//   });


$(function () {
    $('img').on('click', function () {
        var imagePath = $("img").attr("src");
        // z=document.querySelectorAll('img');
        var x = document.querySelector(".fakeClass").innerHTML = '<img id="myImg" src="imagePath" alt="">' +
            '<div id="myModal" class="modal">' +
            '<span class="close">&times;</span>' +
            '<img class="modal-content" id="img01">' +
            '<div id="caption"></div>' +
            '</div>'


        

        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById('myImg');
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;


        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
            x="";
    
        }

    });
});