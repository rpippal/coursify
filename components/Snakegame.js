"use client";
import React, { useEffect, useRef, useState } from "react";

const GRID_SIZE = 20;
const CANVAS_SIZE = 400;
const CELL = CANVAS_SIZE / GRID_SIZE;

export default function SnakeGame() {
  const canvasRef = useRef(null);

  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(() => randomPoint());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const snakeRef = useRef(snake);
  const dirRef = useRef({ x: 1, y: 0 });
  const foodRef = useRef(food);
  const intervalRef = useRef(null);

  useEffect(() => {
    snakeRef.current = snake;
  }, [snake]);
  useEffect(() => {
    foodRef.current = food;
  }, [food]);

  function randomPoint() {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  }

  function placeFood() {
    let pt;
    do {
      pt = randomPoint();
    } while (snakeRef.current.some((s) => s.x === pt.x && s.y === pt.y));
    setFood(pt);
    foodRef.current = pt;
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (gameOver) return;
      const { key } = e;
      const d = dirRef.current;
      if ((key === "ArrowUp" || key === "w") && d.y !== 1) dirRef.current = { x: 0, y: -1 };
      if ((key === "ArrowDown" || key === "s") && d.y !== -1) dirRef.current = { x: 0, y: 1 };
      if ((key === "ArrowLeft" || key === "a") && d.x !== 1) dirRef.current = { x: -1, y: 0 };
      if ((key === "ArrowRight" || key === "d") && d.x !== -1) dirRef.current = { x: 1, y: 0 };
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameOver]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    function tick() {
      if (gameOver) return;

      const current = snakeRef.current;
      const dir = dirRef.current;
      const head = { x: current[0].x + dir.x, y: current[0].y + dir.y };

      if (head.x < 0 || head.y < 0 || head.x >= GRID_SIZE || head.y >= GRID_SIZE) {
        setGameOver(true);
        return;
      }

      if (current.some((s) => s.x === head.x && s.y === head.y)) {
        setGameOver(true);
        return;
      }

      const newSnake = [head, ...current];

      if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
        setScore((s) => s + 1);

        let pt;
        do {
          pt = randomPoint();
        } while (newSnake.some((s) => s.x === pt.x && s.y === pt.y));
        setFood(pt);
        foodRef.current = pt;
      } else {
        newSnake.pop();
      }

      snakeRef.current = newSnake;
      setSnake(newSnake);
    }

    intervalRef.current = setInterval(tick, 120);
    return () => clearInterval(intervalRef.current);
  }, [gameOver]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#0b0b0b";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.fillStyle = "#ff3b3b";
    ctx.fillRect(food.x * CELL, food.y * CELL, CELL, CELL);

    snake.forEach((s, idx) => {
      ctx.fillStyle = idx === 0 ? "#9ef01a" : "#6ee52a";
      ctx.fillRect(s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2);
    });
  }, [snake, food]);

  function restart() {
    const start = [{ x: 10, y: 10 }];
    dirRef.current = { x: 1, y: 0 };
    snakeRef.current = start;
    setSnake(start);
    const pt = randomPoint();
    setFood(pt);
    foodRef.current = pt;
    setScore(0);
    setGameOver(false);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-white">🐍 Snake — Fun Zone</h2>
      <p className="text-gray-300">Use arrow keys (or WASD). Score: {score}</p>

      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        className="border-4 border-green-500 rounded-lg"
        style={{ touchAction: "none" }}
      />

      {gameOver ? (
        <div className="flex flex-col items-center gap-3">
          <div className="text-red-400 font-bold">Game Over — Final Score: {score}</div>
          <div className="flex gap-2">
            <button
              onClick={restart}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
            >
              Restart
            </button>
          </div>
        </div>
      ) : (
        <div className="text-sm text-gray-400">Press arrow keys to move the snake.</div>
      )}
    </div>
  );
}
