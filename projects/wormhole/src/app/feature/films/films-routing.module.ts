import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { FilmsComponent } from './films/films.component'

const routes: Routes = [
  { path: '', component: FilmsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
