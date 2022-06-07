import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DragonsComponent } from './dragons/dragons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragonDetailComponent } from './dragon-detail/dragon-detail.component';
import { DragonEditComponent } from './dragon-edit/dragon-edit.component';

const routes: Routes = [
  { path: 'dragons', component: DragonsComponent },
  { path: 'detail/:id', component: DragonDetailComponent },
  { path: 'edit/:id', component: DragonEditComponent },
  { path: 'create/:id', component: DragonEditComponent },
  { path: '', redirectTo: '/dragons', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
