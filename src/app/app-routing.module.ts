import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootModule } from './ui/pages/root/root.module';

const routes: Routes = [
  {path:'',loadChildren: ()=>RootModule, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
