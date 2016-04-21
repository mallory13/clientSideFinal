/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    "use strict";

    //generate random numbers between 1 - 6
    $('#rollButton').click(function () {
        
        // set up variables
        $('#die1').val(Math.floor(Math.random() * 6) + 1);
        $('#die1Paragraph').val('#die1');
        $('#die2').val(Math.floor(Math.random() * 6) + 1);
        $('#die2Paragraph').val('#die2');

        //switch statement to show image matching number rolled on die1
        switch ($('#die1').val()) {
            case 1:
                //if number is 1 show the 1 die 
                $('#die1Image').attr('src', 'Content/images/dieOne.png');
                
                break;

            case 2:
                //if number is 2 show the 2 die 
                $('#die1Image').attr('src', 'Content/images/dieTwo.png');
                
                break;

            case 3:
                //if number is 3 show the 3 die 
                $('#die1Image').attr('src', 'Content/images/dieThree.png');
                
                break;

            case 4:
                //if number is 4 show the 4 die 
                $('#die1Image').attr('src', 'Content/images/dieFour.png');
                
                break;

            case 5:
                //if number is 5 show the 5 die
                $('#die1Image').attr('src', 'Content/images/dieFive.png');
                
                break;

            case 6:
                //if number is 6 show the 6 die
                $('#die1Image').attr('src', 'Content/images/dieSix.png');
                
                break;

            default:
                break;
        }

        

        //switch statement to show image matching number rolled on die2
        switch ($('#die2').val()) {
            case 1:
                //if number is 1 show the 1 die and change paragraph to 1
                $('#die2Image').attr('src', 'Content/images/dieOne.png');
                
                break;

            case 2:
                //if number is 2 show the 2 die and change paragraph to 2
                $('#die2Image').attr('src', 'Content/images/dieTwo.png');
                
                break;

            case 3:
                //if number is 3 show the 3 die and change paragraph to 3
                $('#die2Image').attr('src', 'Content/images/dieThree.png');
                
                break;

            case 4:
                //if number is 4 show the 4 die and change paragraph to 4
                $('#die2Image').attr('src', 'Content/images/dieFour.png');
                
                break;

            case 5:
                //if number is 5 show the 5 die and change paragraph to 5
                $('#die2Image').attr('src', 'Content/images/dieFive.png');
                
                break;

            case 6:
                //if number is 6 show the 6 die and change paragraph to 6
                $('#die2Image').attr('src', 'Content/images/dieSix.png');
                
                break;

            default:
                break;
        }



    });


    



});