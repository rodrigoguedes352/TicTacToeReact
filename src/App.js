import "./App.css";
import { useState } from "react";
import Cell from "./components/Cell/Cell";
import "./components/Cell/Cell.css";

function App() {
  const playerX = "X";
  const playerO = "O";
  let [turn, setTurn] = useState(playerX);
  const [cells, setCells] = useState(Array(9).fill(""));
  const winCondition = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["2", "4", "6"],
    ["0", "4", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
  ];
  let [winning, setWinning] = useState();
  function winner(player) {
    for (let i = 0; i < winCondition.length; i++) {
      if (player === "X") {
        if (cells[winCondition[i][0]] === "X" && cells[winCondition[i][1]] === "X" && cells[winCondition[i][2]] === "X") {
          return "Player X";
        }
      }
      if (player === "O") {
        if (cells[winCondition[i][0]] === "O" && cells[winCondition[i][1]] === "O" && cells[winCondition[i][2]] === "O") {
          return "Player O";
        }
      }
    }
  }
  function handleClick(event) {
    let index = event.target.id; 
    let winnerX = winner("X")
    let winnerO = winner("O")
    if (winnerX === "Player X") {
      setWinning(winnerX)
      return;
    }
    if (winnerO === "Player O") {
      setWinning(winnerO)
      return;
    }
    if (cells[index].includes("X") || cells[index].includes("O"))
      return;
    if (turn === playerO) {
      let newCells = [...cells];
      newCells[index] = "O";
      setCells(newCells);
      setTurn(playerX)
    }
    if (turn === playerX) {
      let newCells = [...cells];
      newCells[index] = "X";
      setCells(newCells);
      setTurn(playerO)
    }
  }
  return (
    <div className="App">
      <h1 className="title">TicTacToe game v2</h1>
      <div id="turn">It is player { turn } turn</div>
      <div id="board">
        {cells.map((cell, index) => {
          return <Cell i={index} celula={cell} callbackClick={handleClick} />;
        })}
      </div>
      <div id="win">{winning} has won the game!</div>
    </div>
  );
}
export default App;
