/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    
    //generate random numbers between 1 - 6
    $('#rollButton').click(function() {
        $('#die1') = $('#die1').val(Math.floor(Math.random() * 6) + 1);
        
        //switch statement to show image matching number rolled on die1
        
        $('#die2') = $('#die2').val(Math.floor(Math.random() * 6) + 1);
        
        //switch statement to show image matching number rolled on die2
        
        
        
    });
    
    
    
    
});