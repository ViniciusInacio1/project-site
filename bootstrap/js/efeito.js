$(document).ready(function(){
    $("#logo").on("mouseover",function()
        {
        $("#banner h1").addClass("efeito");
        }).on("mouseout",function()
            {
            $("#banner h1").removeClass("efeito");
            });

        $(".thumbnails").owlCarousel({
                loop:true,
                nav:true,
                margin: 10,
                Response:
                {
                    0:{
                    items:1
                    },
                    480:{
                        items:2
                        },
                    760:{
                        items:3
                        },
                    1200:{
                        items:4
                        }
                }
            });

});
