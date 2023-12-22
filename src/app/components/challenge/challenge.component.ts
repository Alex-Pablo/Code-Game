import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../services/script.service';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [],
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.scss'
})
export class ChallengeComponent implements OnInit {
  challenge!: string ;
  challengeTrack!: string;

  constructor(private scriptService:ScriptService){}

  ngOnInit(){
    this.scriptService.getChallenge().subscribe()
    this.scriptService._getValue$()
      .subscribe((data)=>{
        this.challenge =data.challenge;
        this.challengeTrack = data.trackChallenge;
      })
  }
}
