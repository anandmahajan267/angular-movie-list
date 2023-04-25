import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  filter_movie: string = '';

  constructor(private movieService: MovieService, private router: Router) {
    this.movies = [];
    this.filter_movie = '';
  }

  ngOnInit(): void {
    this.getMovies(this.filter_movie);
  }

  private getMovies(keyword: string) {
    this.movieService.getUsersList(keyword).subscribe(data => {
      this.movies = data;
      console.log(">>>>Movie List >>>>> ", this.movies);
    });
  }

  movieDetails(id: string) {
    this.router.navigate(['movie-details', id]);
  }

  updateMovie(id: string) {
    this.router.navigate(['update-movie', id]);
  }

  filterList() {
    this.getMovies(this.filter_movie);
  }

  deleteMovie(id: string) {
    var result = confirm("Are you sure you want to delete this item?");
    if (result) {
      this.movieService.deleteUser(id).subscribe(data => {
        this.getMovies(this.filter_movie);
      })
    }

  }


}
