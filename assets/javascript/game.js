$(document).ready(function() {

            let winsCount = 0;
            let lossesCount = 0;
            let userGuess = "";
            const allChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

            document.onkeyup = function(event) {

                const userGuess = event.key;
               
                const computerGuess = allChoices[Math.floor(Math.random() * 26)];

                if (userGuess === computerGuess) {
                    winsCount++;
                } else {
                    lossesCount++;
                }

			$("#userGuess").append(userGuess);
			$("#computerGuess").text(computerGuess);
			$("#userWins").text(winsCount);
			$("#userLosses").text(lossesCount);
   }
        });