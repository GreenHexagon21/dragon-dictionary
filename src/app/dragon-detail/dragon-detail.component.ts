import { Component, OnInit, Input } from '@angular/core';
import {Dragon} from '../dragon'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DragonService } from '../dragon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'dd-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.scss']
})
export class DragonDetailComponent implements OnInit {
  @Input() dragon?: Dragon;

  constructor( 
    private route: ActivatedRoute,
    private dragonService: DragonService,
    private location: Location,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getDragon();
  }
  getDragon(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dragonService.getDragon(id).subscribe(dragon => this.dragon = dragon);
  }
  goBack(): void {
    this.location.back();
  }

  deleteDragon(id:number){
    this.dragonService.delete(id);
    this.goBack();
  }
  openSm(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }


}
