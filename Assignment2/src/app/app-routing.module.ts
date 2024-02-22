import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {FirstPageComponent} from "./first-page/first-page.component";
import { ThirdPageComponent } from './third-page/third-page.component';
import {SecondPageComponent} from "./second-page/second-page.component";


const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'first-page', component: FirstPageComponent},
  {path: 'second-page', component:SecondPageComponent},
  {path: 'third-page', component:ThirdPageComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
