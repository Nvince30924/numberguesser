$(document).ready(function(){

var x = Math.floor((Math.random() * 10) + 1);
    $("#BADMON").click(function() {
        
        var y = parseInt($("#GUESSER").val());
        
var greeting ;        
        if ( y > x ) {
            greeting = "too high" ;
            
        }
    
        else if (y < x) {
            greeting = "too low" ;
            
        }
        
        else if (y === x) {
            greeting = "you got it" ;
            
        }
        else {
            gretting = "please enter a number";
        
        }
        
        
        
        
        
        $("p").append(greeting) ;



    });



});