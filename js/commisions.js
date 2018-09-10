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

        var carouselIndicators = document.querySelectorAll(".carousel-indicators li");
      


        for (var i = 0; i < carouselIndicators.length; i++) {
            carouselIndicators[i].style.width = "0px";
        }

        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal 
        var img = document.getElementById('myImg');
        var modalImg = document.getElementById("img01");
        

        modal.style.display = "block";
        modalImg.src = this.src;



        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
            x= "";
            for (var j = 0; j < carouselIndicators.length; j++) {
                carouselIndicators[j].style.width = "30px";
            }

            document.getElementById('outer').className="scroll-top-wrapper";
            document.getElementById('inner').className="scroll-top-inner";
    
        }

    });
});