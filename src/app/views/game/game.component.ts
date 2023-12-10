import { Component } from '@angular/core';
import { ChallengeComponent } from '../../components/challenge/challenge.component';
import { PlayerComponent } from '../../components/player/player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    ChallengeComponent,
    PlayerComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

}
