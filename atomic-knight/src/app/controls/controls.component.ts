// src/app/controls/controls.component.ts
import { Component } from '@angular/core';
import { GameService } from '../game.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
  constructor(public gameService: GameService) { }

  resetGame(): void {
    this.gameService.resetGame();
  }
}
