$(document).ready(function(){
    var redcount = 0;
    var bluecount = 0;
    
    $( ".draggable" ).draggable({
        containment: "window"
    });
    
    
    $( ".red-side" ).droppable({
        drop: function( event, ui ) {
            //$( this )
            //  .addClass( "highlight" );
            redcount = redcount+1;
            bluecount = bluecount-1;
            console.log("redcount: " + redcount);
            $('.red-side').css('width', "+=1");
            $('.blue-side').css('width', "-=1");
            
            $('#point-red').html(redcount);
        }//,
        //out: function( event, ui ) {
            //$( this )
            //  .removeClass( "highlight" );
            //   redcount = redcount-1;
            //   console.log("redcount: " + redcount);
        //}
    });
    
    $( ".blue-side" ).droppable({
        drop: function( event, ui ) {
            //$( this )
            //  .addClass( "highlight" );
            bluecount = bluecount+1;
            redcount = redcount-1;
            console.log("bluecount: " + bluecount);
            $('.red-side').css('width', "-=1");
            $('.blue-side').css('width', "+=1").css("left", "-=1");
            
            $('#point-blue').html(bluecount);
        }//,
        //out: function( event, ui ) {
            //$( this )
            //  .removeClass( "highlight" );
            //   redcount = redcount-1;
            //   console.log("redcount: " + redcount);
        //}
    });
    
    
});