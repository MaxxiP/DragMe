$(document).ready(function(){
    var redcount = 0;
    var bluecount = 0;
    
    var redpoints = 0;
    var bluepoints = 0;
    
    var blueTimer;
    
    $( ".draggable" ).draggable({
        containment: "window"
    });
    
    
    $( ".red-side" ).droppable({
        drop: function( event, ui ) {

            console.log("redcount: " + redcount);

            setInterval(function () {
                addredscore();
                removebluescore();
                redpoints = redcount;
                $('#point-red').html(redpoints);
                console.log("redcount: " + redcount);
            }, 1000);
        },
        out: function(event, ui){
            --redcount;
        }
    });
    
    
    $( ".blue-side" ).droppable({
        drop: function( event, ui ) {
        
        blueTimer = setInterval(function () {
                addbluescore();
                removeredscore();
                bluepoints = bluecount;
                $('#point-blue').html(bluepoints);
                console.log("bluecount: " + bluecount);
            },1000);
        },
        out: function(event, ui){
            try{
                clearInterval(blueTimer[i]);
                console.log("bluecount interval stopped");
            }catch(err){
                console.log("bluecount failed to stop + " +  err);
        }
        }
    });
    
    function addredscore(){
            ++redcount;
            --bluecount;
            $('.red-side').css('width', "+=1");
                   
    };
    
    function removeredscore(){
            $('.red-side').css('width', "-=1");
            
    };
    
    function removebluescore(){
            $('.blue-side').css('width', "-=1").css("left", "+=1");
    };    
    
    function addbluescore(){
            ++bluecount;
            --redcount;
            $('.blue-side').css('width', "+=1").css("left", "-=1");
    };        
});