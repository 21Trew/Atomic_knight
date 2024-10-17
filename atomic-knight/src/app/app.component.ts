import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { ControlsComponent } from './controls/controls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent, ControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'atomic-knight';
}
