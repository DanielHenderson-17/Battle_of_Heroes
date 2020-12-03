$(document).ready(function () {

    window.onload = function () {
        document.getElementById("mainsong").play();
        document.getElementById("fight!").play();
    }
    var punch = new Audio();
    punch.src = "sounds/punch.mp3";

    var startAmt1 = 500;

    var currentAmt1 = startAmt1;
    
    function battleLog(displaytext) {
        const initialValue = document.getElementById("consolebox1").innerHTML;
        const newValue = initialValue + displaytext;
        document.getElementById("consolebox1").innerHTML = newValue;
    }
    function attack1(event) {
        $('.attack1').on('click', function () {
            const RNG = Math.round(Math.random() * 25 + 10);
            currentAmt1 = currentAmt1 - RNG;
            battleLog("\n" + " Spider-Man attacks for " + RNG + " damage!");
            consolebox1.scrollTop = consolebox1.scrollHeight;
            $('.enemy-health-bar').css('width', (currentAmt1 * 100 / startAmt1) + '%');
        });
    }

    attack1();

    function fullHealth1(event) {
        $('.reset1').on('click', function () {
            currentAmt1 = startAmt1;
            $('.healthBarValue1').css('width', '100%');
        })
        console.log("fullhealth1");
    }

    fullHealth1();


    var startAmt2 = 25000;

    var currentAmt2 = startAmt2;

    function attack2(event) {
        $('.hit2').on('click', function () {
            currentAmt2 = currentAmt2 - 1200;
            $('.healthBarValue2').css('width', (currentAmt2 * 100 / startAmt2) + '%');
        });
        console.log("attack2");
    }

    attack2();

    function fullHealth2(event) {
        $('.reset2').on('click', function () {
            currentAmt2 = startAmt2;
            $('.healthBarValue2').css('width', '100%');
        })
        console.log("fullhealth2");
    }

    fullHealth2();

});