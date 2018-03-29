$(document).ready(function(){


    // click show/hide menu
    $('#navbar .toggle').click(function(event) {
        $("#navbar .listmenu").slideToggle("400");
    });

    
    $(".tabcontent .tab:first").show();
    $(".tabcontrol .button").click(function() {
            $(".tabcontrol .button").removeClass('active');
            $(this).addClass('active');
            $(".tabcontent .tab").hide();
            var url=$(this).attr("data-tab");
            $("#"+url).fadeIn();
    
        })

     $(".tabcontent2 .tab:first").show();
    $(".tabcontrol2 .button").click(function() {
            $(".tabcontrol2 .button").removeClass('active');
            $(this).addClass('active');
            $(".tabcontent2 .tab").hide();
            var url=$(this).attr("data-tab");
            $("#"+url).fadeIn();
    
        })

    $(".tabcontent3 .tab:first").show();
    $(".tabcontrol3 .button").click(function(){
        $(".tabcontrol3 .button").removeClass('active');
        $(this).addClass('active');
        $(".tabcontent3 .tab").hide();
        var url=$(this).attr("data-tab");
        $("#"+url).fadeIn();
    })
    $(".tabcontent4 .tab:first").show();
    $(".tabcontrol4 .button").click(function(){
        $(".tabcontrol4 .button").removeClass('active');
        $(this).addClass('active');
        $(".tabcontent4 .tab").hide();
        var url=$(this).attr("data-tab");
        $("#"+url).fadeIn();
    });

})
