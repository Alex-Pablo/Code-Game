import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent  implements  OnDestroy {
  name: string = '';
  private subscription?: Subscription;
  constructor(private serviceUser: UserService, 
              private router: Router) { }

  saveName() {
    const completeName = this.name.trim();
    if (completeName != '') {
      this.subscription = this.serviceUser.postPlayer(completeName).subscribe(() => {
        this.router.navigate(['/game']);
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
