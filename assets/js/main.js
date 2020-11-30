$(document).ready(function () {    
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