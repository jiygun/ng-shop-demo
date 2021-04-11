import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { RootComponent } from './root.component';

const routes: Routes = [
  { path: '', component: RootComponent ,children:[
    {path:'', loadChildren:()=>HomeModule},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
