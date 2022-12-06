import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorInfoComponent } from './actor-info/actor-info.component';
import { ActorBiographyComponent } from './actor-biography/actor-biography.component';
import { ActorMovieComponent } from './actor-movie/actor-movie.component';
import { ActorRoleComponent } from './actor-role/actor-role.component';



@NgModule({
  declarations: [
    ActorInfoComponent,
    ActorBiographyComponent,
    ActorMovieComponent,
    ActorRoleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ActorDashboardModule { }
