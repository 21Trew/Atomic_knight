import { Component } from '@angular/core';

import { BoardComponent } from './board/board.component';
import { ControlsComponent } from './controls/controls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BoardComponent, ControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'atomic-knight';
}
