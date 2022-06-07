import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragonsComponent } from './dragons/dragons.component';
import { DragonDetailComponent } from './dragon-detail/dragon-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragonEditComponent } from './dragon-edit/dragon-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListViewComponent } from './list-view/list-view.component';
import { CardViewComponent } from './card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DragonsComponent,
    DragonDetailComponent,
    MessagesComponent,
    DashboardComponent,
    DragonEditComponent,
    ListViewComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
