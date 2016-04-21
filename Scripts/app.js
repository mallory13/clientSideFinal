/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    alert("it works");
    //test button
//     $( "button" ).click(function() {
//   alert( "Handler for .click() called." );
// });

    //generate random numbers between 1 - 6
    $('#rollButton').click(function() {
        //console.log("works");
        
        var dieNum = (Math.floor(Math.random() * 6) + 1);
        $('#die1Image').attr('src', ('Content/images/die' + dieNum + '.png'));
        $('#die1Paragraph').text(dieNum);
        
        
        var dieNum2 = (Math.floor(Math.random() * 6) + 1);
        $('#die2Image').attr('src', ('Content/images/die' + dieNum + '.png'));
        $('#die2Paragraph').text(dieNum2);
        

    });



})();