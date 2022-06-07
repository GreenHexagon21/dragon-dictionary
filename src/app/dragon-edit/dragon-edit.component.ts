import { Component, OnInit, Input } from '@angular/core';
import {Dragon} from '../dragon'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DragonService } from '../dragon.service';
import { DRAGONS } from '../mock-dragons';

@Component({
  selector: 'dd-dragon-edit',
  templateUrl: './dragon-edit.component.html',
  styleUrls: ['./dragon-edit.component.scss']
})
export class DragonEditComponent implements OnInit {

  @Input() dragon?: Dragon;
  newDragon:Dragon = {id:0, name:"",type:"",size:0,description:"",picurl:""}

  constructor( 
    private route: ActivatedRoute,
    private dragonService: DragonService,
    private location: Location) { 
    }

  ngOnInit(): void {
    this.getDragon();
  }
  onCreate(): void {
    this.dragonService.create(this.newDragon);
    this.goBack();
  }
  getDragon(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dragonService.getDragon(id).subscribe(dragon => this.dragon = dragon);
  }
  goBack(): void {
    this.location.back();
  }

}
