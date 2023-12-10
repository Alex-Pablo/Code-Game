import { Component } from '@angular/core';
import { Player } from '../../models/player';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  players: Player[] =[
    {
      name:'Alex Anibal Pablo',
      score:2
    },
    {
      name:'Alex Anibal Pablo',
      score:1
    },
    {
      name:'Anibal Anibal Pablo Mendez',
      score:3
    },
    {
      name:'Anibal',
      score:0
    },
    {
      name:'Alex Anibal Pablo',
      score:1
    },
    {
      name:'Anibal Anibal Pablo Mendez',
      score:3
    },
    {
      name:'Anibal',
      score:0
    },
    {
      name:'Alex Anibal Pablo',
      score:1
    },
    {
      name:'Anibal Anibal Pablo Mendez',
      score:3
    },
    {
      name:'Anibal',
      score:0
    },
    {
      name:'Alex Anibal Pablo',
      score:1
    },
    {
      name:'Anibal Anibal Pablo Mendez',
      score:3
    },
    {
      name:'Anibal',
      score:0
    }
  ]

}
