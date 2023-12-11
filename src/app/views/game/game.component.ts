import { Component } from '@angular/core';
import { ChallengeComponent } from '../../components/challenge/challenge.component';
import { PlayerComponent } from '../../components/player/player.component';
import { CodeIDEComponent } from '../../components/code-ide/code-ide.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    ChallengeComponent,
    PlayerComponent,
    CodeIDEComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

}
