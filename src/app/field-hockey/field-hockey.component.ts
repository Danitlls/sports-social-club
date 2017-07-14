import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-field-hockey',
  templateUrl: './field-hockey.component.html',
  styleUrls: ['./field-hockey.component.sass'],
  providers: [PlayerService]
})

export class FieldHockeyComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
    console.log(this.router.url);
  }

  goToDetailPage(clickedPlayer) {
   this.router.navigate(['players', clickedPlayer.$key]);
 };

}
