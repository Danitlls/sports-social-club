import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [PlayerService]
})

export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, age: number, sex: string, team: string, sport: string) {
   var newPlayer: Player = new Player(name, age,sex, team, sport);
   this.playerService.addPlayer(newPlayer);
 }

}
