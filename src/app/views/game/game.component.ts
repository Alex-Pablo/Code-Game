import { Component } from '@angular/core';
import { ChallengeComponent } from '../../components/challenge/challenge.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    ChallengeComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

}
