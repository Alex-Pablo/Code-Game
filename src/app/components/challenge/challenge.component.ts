import { Component, OnInit } from '@angular/core';

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


  ngOnInit(){
    this.challenge = 'Realice una consulta a la tabla Clientes';
    this.challengeTrack = 'Clientes';
  }
}
