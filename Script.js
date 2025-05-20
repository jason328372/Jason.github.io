<script>
        // Game switching
        function showGame(gameId) {
            document.querySelectorAll('.game').forEach(g => g.classList.remove('active'));
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.getElementById(gameId).classList.add('active');
            event.target.classList.add('active');
        }

        // Rock Paper Scissors game
        let rpsWins = 0, rpsLosses = 0, rpsTies = 0;

        function playRPS(player) {
            const choices = ['✊', '✋', '✌️'];
            const computer = choices[Math.floor(Math.random() * 3)];
            let result;

            if (player === computer) {
                result = "Tie! 🤝";
                rpsTies++;
            } else if (
                (player === '✊' && computer === '✌️') ||
                (player === '✋' && computer === '✊') ||
                (player === '✌️' && computer === '✋')
            ) {
                result = "You win! 🎉";
                rpsWins++;
            } else {
                result = "Computer wins! 💻";
                rpsLosses++;
            }

            document.getElementById("rpsResult").innerHTML = `You: ${player} vs Computer: ${computer}<br>${result}`;
            updateRPSScore();
        }

        function updateRPSScore() {
            document.getElementById("rpsWins").textContent = rpsWins;
            document.getElementById("rpsLosses").textContent = rpsLosses;
            document.getElementById("rpsTies").textContent = rpsTies;
        }

        // Number guessing game
        let secretNumber = Math.floor(Math.random() * 1000) + 1;
        let correctGuesses = 0;
        let totalGuesses = 0;

        function checkGuess() {
            const guess = parseInt(document.getElementById("guess").value);
            const result = document.getElementById("guessResult");
            totalGuesses++;

            if (guess === secretNumber) {
                result.textContent = "🎉 Correct! My number was " + secretNumber;
                correctGuesses++;
                secretNumber = Math.floor(Math.random() * 1000) + 1; // New number
            } else if (guess < secretNumber) {
                result.textContent = "Too low! Try again!";
            } else {
                result.textContent = "Too high! Try again!";
            }

            document.getElementById("guess").value = "";
            updateGuessScore();
        }

        function updateGuessScore() {
            document.getElementById("correctGuesses").textContent = correctGuesses;
            document.getElementById("totalGuesses").textContent = totalGuesses;
        }
    </script>
</body>
