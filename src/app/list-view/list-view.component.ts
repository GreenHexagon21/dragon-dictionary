import { Component, Input, OnInit } from '@angular/core';
import { Dragon } from '../dragon';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'dd-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  @Input() dragons: Array<Dragon> = [];
  constructor(private dragonService: DragonService) { }

  ngOnInit(): void {
   
  }
  

}
