import { Component } from '@angular/core';
import { ChallengeComponent } from '../../components/challenge/challenge.component';
import { PlayerComponent } from '../../components/player/player.component';
import { CodeIDEComponent } from '../../components/code-ide/code-ide.component';
import { UserService} from '../../services/user.service';
import { Router } from '@angular/router';
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
  constructor(private userService: UserService,private router: Router){}

  ngOnInit(){
    if (this.userService.getData() === null) {
      this.router.navigate(['/signUp'])
    }
    console.log(this.userService.getData());
  }
}
