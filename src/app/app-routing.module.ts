import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components 
import { LandingComponent } from "./landing/landing.component";
import { MainComponent } from "./main/main.component";
import { StreamsComponent } from './streams/streams.component';
import { GoliveComponent } from './golive/golive.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadComponent:() => import('./landing/landing.component').then((c) => LandingComponent),},
  { path: 'streams', loadComponent:() => import('./streams/streams.component').then((c) => StreamsComponent),},
  { path: 'main', loadComponent:() => import('./main/main.component').then((c) => MainComponent),},
  { path: 'live', loadComponent:() => import('./golive/golive.component').then((c) => GoliveComponent),},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
