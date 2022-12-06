import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { MovieNavbarComponent } from './movie-navbar/movie-navbar.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { MovieCastComponent } from './movie-cast/movie-cast.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { MovieMediaComponent } from './movie-media/movie-media.component';
import { MovieRecommendationComponent } from './movie-recommendation/movie-recommendation.component';



@NgModule({
  declarations: [
    MovieDashboardComponent,
    MovieNavbarComponent,
    MovieOverviewComponent,
    MovieCastComponent,
    MovieReviewComponent,
    MovieMediaComponent,
    MovieRecommendationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieDashboardComponent
  ]
})
export class MovieDashboardModule { }
