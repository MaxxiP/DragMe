$(document).ready(function(){
    var redcount = 0;
    var bluecount = 0;
    
    $( ".draggable" ).draggable({
        containment: "window"
    });
    
    
    $( ".red-side" ).droppable({
        drop: function( event, ui ) {
            redcount = redcount+1;
            bluecount = bluecount-1;
            console.log("redcount: " + redcount);
            addredscore();
            removebluescore();
            
            $('#point-red').html(redcount);
        }
    });
    
    $( ".blue-side" ).droppable({
        drop: function( event, ui ) {
            bluecount = bluecount+1;
            redcount = redcount-1;
            console.log("bluecount: " + bluecount);
            addbluescore();
            removeredscore();
            
            $('#point-blue').html(bluecount);
        }
    });
    
    function addredscore(){
            $('.red-side').css('width', "+=1");
                   
    };
    
    function removeredscore(){
            $('.red-side').css('width', "-=1");
            
    };
    
    function removebluescore(){
            $('.blue-side').css('width', "-=1").css("left", "+=1");
    };    
    
    function addbluescore(){
            $('.blue-side').css('width', "+=1").css("left", "-=1");
    };        
});