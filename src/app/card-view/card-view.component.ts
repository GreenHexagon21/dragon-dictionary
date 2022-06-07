import { Component, Input, OnInit } from '@angular/core';
import { Dragon } from '../dragon';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'dd-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  @Input() dragons:Array<Dragon> = [];
  constructor(private dragonService: DragonService) { }

  ngOnInit(): void {
  }
  getDragons(): void {

  }

}
