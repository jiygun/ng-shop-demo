import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './ui/pages/root/root.component';

const routes: Routes = [
  {path:'',component:RootComponent,pathMatch: 'full',children:[
    {path:'',loadChildren: './ui/pages/home/home.module#HomeModule', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
