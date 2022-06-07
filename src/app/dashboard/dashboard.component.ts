import { Component, OnInit } from '@angular/core';
import { Dragon } from '../dragon';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  dragons: Dragon[] = [];

  constructor(private dragonService: DragonService) { }

  ngOnInit(): void {
    this.getDragons();
  }

  getDragons(): void {
    this.dragonService.getDragons()
      .subscribe(dragons => this.dragons = this.dragons.slice(1, 5));
  }
}