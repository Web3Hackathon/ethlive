import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadComponent:() => import('./landing/landing.component').then((c) => LandingComponent),},
  { path: 'main', loadComponent:() => import('./main/main.component').then((c) => MainComponent),},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
