import { Component, Input, OnInit } from '@angular/core';
import { Dragon } from '../dragon';
import { DRAGONS } from '../mock-dragons';
import { DragonService } from '../dragon.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'dd-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent implements OnInit {
  checked: boolean = false;
  isCard: boolean = false;

  dragons: Dragon[] = [];

  constructor(private dragonService: DragonService) { 
  }
  getDragons(): void {
    this.dragonService.getDragons()
    .subscribe(dragons => this.dragons = dragons);
  }

  ngOnInit(): void {
    this.getDragons();
  }
  toggleView(): void {
    this.isCard = !this.isCard;

  }
}

