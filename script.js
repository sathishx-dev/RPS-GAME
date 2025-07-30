const gameTools = ["rock", "paper", "scissor"];

function playGame(player) {
  const index = Math.floor(Math.random() * 3);
  const computer = gameTools[index];

  const final = player === computer
    ? "It's a draw"
    : (player === "rock" && computer === "scissor") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissor" && computer === "paper")
    ? "Player wins"
    : "Computer wins";

  document.getElementById("player-choice").textContent = `You chose: ${player}`;
  document.getElementById("computer-choice").textContent = `Computer chose: ${computer}`;
  document.getElementById("result").textContent = `Result: ${final}`;
}
