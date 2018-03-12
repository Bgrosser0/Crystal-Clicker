

$(document).ready(function () {

    // VARIABLES

    // ---------------------------------------------------

    // WINS + LOSSES

    var wins = 0;
    console.log("wins = " + wins)

    var losses = 0;
    console.log("losses = " + losses)

    // ---------------------------------------------------

    // CRYSTAL BUTTONS 1-4

    var crystalButton1 = [Math.floor(Math.random() * ((12 - 1) + 1) + 1)];
    console.log("crystal 1 Value = " + crystalButton1)

    var crystalButton2 = [Math.floor(Math.random() * ((12 - 1) + 1) + 1)];
    console.log("crystal 2 Value = " + crystalButton2)

    var crystalButton3 = [Math.floor(Math.random() * ((12 - 1) + 1) + 1)];
    console.log("crystal 3 Value = " + crystalButton3)

    var crystalButton4 = [Math.floor(Math.random() * ((12 - 1) + 1) + 1)];
    console.log("crystal 4 Value = " + crystalButton4)

    // --------------------------------------------------

    // YOUR TOTAL SCORE (GOAL NUMBER)

    var yourTotalScore = 0;
    console.log("Your Total Score = " + yourTotalScore)

    // -------------------------------------------------

    // TARGET NUMBER

    var targetNumber = [Math.floor(Math.random() * ((120 - 19) + 1) + 19)];
    console.log("Target Number = " + targetNumber)
    document.getElementById("targetNumber").innerHTML = targetNumber

    // ------------------------------------------------
    // ------------------------------------------------


    // BUTTON 1

    $("#crystalButton1").on("click",
        function () {


            if (yourTotalScore == targetNumber) {
                wins++;
                reset();
                console.log("YOU WON")
                $("#wins").text(wins)
            }

            else if (yourTotalScore > targetNumber) {
                losses++;
                reset();
                console.log("YOU LOST")
                $("#losses").html(losses)
            }

            else {
                $("#yourTotalScore").text()
                yourTotalScore = parseInt(yourTotalScore) + parseInt(crystalButton1);
                console.log(yourTotalScore);
                document.getElementById("yourTotalScore").innerHTML = yourTotalScore;

            }


        }

    );

    // BUTTON 2

    $("#crystalButton2").on("click",
        function () {


            if (yourTotalScore == targetNumber) {
                wins++;
                reset();
                console.log("YOU WON")
                $("#wins").text(wins)
            }

            else if (yourTotalScore > targetNumber) {
                losses++;
                reset();
                console.log("YOU LOST")
                $("#losses").html(losses)
            }

            else {
                $("#yourTotalScore").text()
                yourTotalScore = parseInt(yourTotalScore) + parseInt(crystalButton2);
                console.log(yourTotalScore);
                document.getElementById("yourTotalScore").innerHTML = yourTotalScore;

            }



        }

    );

    // BUTTON 3

    $("#crystalButton3").on("click",
        function () {


            if (yourTotalScore == targetNumber) {
                wins++;
                reset();
                console.log("YOU WON")
                $("#wins").text(wins)
            }

            else if (yourTotalScore > targetNumber) {
                losses++;
                reset();
                console.log("YOU LOST")
                $("#losses").html(losses)
            }

            else {
                $("#yourTotalScore").text()
                yourTotalScore = parseInt(yourTotalScore) + parseInt(crystalButton3);
                console.log(yourTotalScore);
                document.getElementById("yourTotalScore").innerHTML = yourTotalScore;

            }


        }

    );

    // BUTTON 4

    $("#crystalButton4").on("click",
        function () {

            if (yourTotalScore == targetNumber) {
                wins++;
                reset();
                console.log("YOU WON")
                $("#wins").text(wins)
            }

            else if (yourTotalScore > targetNumber) {
                losses++;
                reset();
                console.log("YOU LOST")
                $("#losses").html(losses)
            }

            else {
                $("#yourTotalScore").text()
                yourTotalScore = parseInt(yourTotalScore) + parseInt(crystalButton4);
                console.log(yourTotalScore);
                document.getElementById("yourTotalScore").innerHTML = yourTotalScore;

            }

        }

    );


    // -----------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------

    yourTotalScore = parseInt(yourTotalScore);
    targetNumber = parseInt(targetNumber);

    // -----------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------

    // WIN/LOSS CONDITIONS


    // -----------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------


    function reset() {

        yourTotalScore = 0;
        targetNumber = [Math.ceil(Math.random() * 120)];
        $("#targetNumber").html(targetNumber)

        crystalButton1 = [Math.floor(Math.random() * ((12 - 1) + 1) + 1)];


        crystalButton2 = [Math.floor(Math.random() * ((12 - 1) + 1) + 1)];


        crystalButton3 = [Math.floor(Math.random() * ((12 - 1) + 1) + 1)];


        crystalButton4 = [Math.floor(Math.random() * ((12 - 1) + 1) + 1)];



    }

});


// ------------------------------------------------
// ------------------------------------------------

// DO NOT MOVE ON UNTIL YOU GET YOUR VALUES ON THE WEBPAGE