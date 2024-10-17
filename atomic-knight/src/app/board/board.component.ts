// src/app/board/board.component.ts
import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  constructor(public gameService: GameService) { }

  ngOnInit(): void { }

  onCellClick(x: number, y: number): void {
    if (!this.gameService.isGameStarted || this.gameService.isMoveValid(x, y)) {
      this.gameService.setKnightPosition(x, y);
    }
  }

    isPossibleMove(x: number, y: number): boolean {
    return this.gameService.getPossibleMoves().some(move => move.x === x && move.y === y);
  }
}
