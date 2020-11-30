$(document).ready(function () {

    var dropDown = $(".dropdown");
    
    $(".has-dropdown").mouseover(function() {
        if($(".dropdown").hide()){
        $(".dropdown",this).show();
        }else if($(".dropdown").show()){
        $(".dropdown",this).hide();
        }
    });
    $(document).mousedown(function() {
        $(".dropdown").hide();
    });
});