import { Injectable } from '@angular/core';
import { Dragon } from './dragon';
import { DRAGONS } from './mock-dragons';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DragonService {
  idCounter:number = 0;
  constructor(private messageService: MessageService) { }
  getDragons(): Observable<Dragon[]> {
    const dragons = of(DRAGONS);
    this.messageService.add('DragonService: fetched dragons');
    return dragons;
  }
  getDragon(id: number): Observable<Dragon> {
    const dragon = DRAGONS.find(h => h.id === id)!;
    this.messageService.add(`DragonService: fetched dragon id=${id}`);
    return of(dragon);
  }
 
  delete(id:number){
    const dragonIndex = DRAGONS.findIndex(h => h.id === id)!;
    DRAGONS.splice(dragonIndex,1);
  }
  create(dragon:Dragon) {
    dragon.id = this.idCounter;
    this.idCounter++;
    DRAGONS.push(dragon);
  }
}


