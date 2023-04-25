import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';

const routes: Routes = [
  {path: 'movies', component: MovieListComponent},
  {path: 'create-movie', component: CreateMovieComponent},
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'update-movie/:id', component: UpdateMovieComponent},
  {path: 'movie-details/:id', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
