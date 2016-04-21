/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    "use strict";

    //generate random numbers between 1 - 6
    $('#rollButton').click(function () {
        $('#die1') = $('#die1').val(Math.floor(Math.random() * 6) + 1);

        //switch statement to show image matching number rolled on die1
        switch ($('#die1')) {
            case 1:
                //if number is 1 show the 1 die and change paragraph to 1
                $('#die1Image').attr('src', 'Content/images/dieOne.png');
                //if number is 1 change paragraph to match number rolled
                $('#die1Paragraph').val('#die1');
                break;

            case 2:
                //if number is 2 show the 2 die and change paragraph to 2
                $('#die2Image').attr('src', 'Content/images/dieTwo.png');
                //if number is 2 change paragraph to match number rolled
                $('#die2Paragraph').val('#die2');
                break;

            case 3:
                //if number is 3 show the 3 die and change paragraph to 3
                $('#die3Image').attr('src', 'Content/images/dieThree.png');
                //if number is 3 change paragraph to match number rolled
                $('#die3Paragraph').val('#die3');
                break;

            case 4:
                //if number is 4 show the 4 die and change paragraph to 4
                $('#die4Image').attr('src', 'Content/images/dieFour.png');
                //if number is 4 change paragraph to match number rolled
                $('#die4Paragraph').val('#die4');
                break;

            case 5:
                //if number is 5 show the 5 die and change paragraph to 5
                $('#die5Image').attr('src', 'Content/images/dieFive.png');
                //if number is 5 change paragraph to match number rolled
                $('#die5Paragraph').val('#die5');
                break;

            case 6:
                //if number is 6 show the 6 die and change paragraph to 6
                $('#die6Image').attr('src', 'Content/images/dieSix.png');
                //if number is 6 change paragraph to match number rolled
                $('#die6Paragraph').val('#die6');
                break;

            default:
                break;
        }

        $('#die2') = $('#die2').val(Math.floor(Math.random() * 6) + 1);

        //switch statement to show image matching number rolled on die2
        switch ($('#die2')) {
            case 1:
                //if number is 1 show the 1 die and change paragraph to 1
                $('#die1Image').attr('src', 'Content/images/dieOne.png');
                //if number is 1 change paragraph to match number rolled
                $('#die1Paragraph').val('#die1');
                break;

            case 2:
                //if number is 2 show the 2 die and change paragraph to 2
                $('#die2Image').attr('src', 'Content/images/dieTwo.png');
                //if number is 2 change paragraph to match number rolled
                $('#die2Paragraph').val('#die2');
                break;

            case 3:
                //if number is 3 show the 3 die and change paragraph to 3
                $('#die3Image').attr('src', 'Content/images/dieThree.png');
                //if number is 3 change paragraph to match number rolled
                $('#die3Paragraph').val('#die3');
                break;

            case 4:
                //if number is 4 show the 4 die and change paragraph to 4
                $('#die4Image').attr('src', 'Content/images/dieFour.png');
                //if number is 4 change paragraph to match number rolled
                $('#die4Paragraph').val('#die4');
                break;

            case 5:
                //if number is 5 show the 5 die and change paragraph to 5
                $('#die5Image').attr('src', 'Content/images/dieFive.png');
                //if number is 5 change paragraph to match number rolled
                $('#die5Paragraph').val('#die5');
                break;

            case 6:
                //if number is 6 show the 6 die and change paragraph to 6
                $('#die6Image').attr('src', 'Content/images/dieSix.png');
                //if number is 6 change paragraph to match number rolled
                $('#die6Paragraph').val('#die6');
                break;

            default:
                break;
        }



    });


    



});