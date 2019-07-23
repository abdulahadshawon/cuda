$(document).ready(function(){
    //---waypoint for sticky menu---//
    
    $(".js-services-section").waypoint(function(direction){
        if(direction=="down"){
           $("nav").addClass("sticky");
           }
         else{
           $("nav").removeClass("sticky");
           }  
    })
    
    
    //---mixitup for portfolio--->
   var mixer=mixitup('.container'); 
});

function openNav(){
    document.getElementById("myNav").style.width="100%";
}
function closeNav(){
    document.getElementById("myNav").style.width="0%";
}