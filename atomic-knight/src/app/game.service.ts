// src/app/game.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  board: (number | null)[][] = [];
  knightPosition: { x: number, y: number } | null = null;
  moveCount: number = 0;

  constructor() {
    this.resetGame();
  }

  isGameStarted: boolean = false;

  resetGame(): void {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.knightPosition = null;
    this.moveCount = 0;
    this.isGameStarted = false;
  }

  setKnightPosition(x: number, y: number): boolean {
    if (!this.isGameStarted || this.isMoveValid(x, y)) {
      if (this.knightPosition) {
        this.board[this.knightPosition.x][this.knightPosition.y] = this.moveCount;
      }
      this.knightPosition = { x, y };
      this.moveCount++;
      this.isGameStarted = true;
      return true;
    }
    return false;
  }


  isMoveValid(x: number, y: number): boolean {
    const moves = this.getPossibleMoves();
    return moves.some(move => move.x === x && move.y === y);
  }

  getPossibleMoves(): { x: number, y: number }[] {
    if (!this.knightPosition) return [];
    const { x, y } = this.knightPosition;
    const moves = [
      { x: x + 2, y: y + 1 }, { x: x + 2, y: y - 1 },
      { x: x - 2, y: y + 1 }, { x: x - 2, y: y - 1 },
      { x: x + 1, y: y + 2 }, { x: x + 1, y: y - 2 },
      { x: x - 1, y: y + 2 }, { x: x - 1, y: y - 2 }
    ];
    return moves.filter(move => this.isInBounds(move.x, move.y) && this.board[move.x][move.y] === null);
  }

  isInBounds(x: number, y: number): boolean {
    return x >= 0 && x < 10 && y >= 0 && y < 10;
  }

  isGameOver(): boolean {
    return this.isGameStarted && (this.getPossibleMoves().length === 0 || this.isGameWon());
  }

  isGameWon(): boolean {
    return this.moveCount === 100; // 10x10 клеток
  }

}
