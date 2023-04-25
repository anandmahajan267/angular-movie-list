import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  movie: Movie = new Movie();
  errorMessage:string = '';

  constructor(private movieService: MovieService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMovie() {
    this.errorMessage = ''
    this.movieService.createUser(this.movie).subscribe({
      next: () => this.goToMovieList(),
      error: (e) =>  this.errorMessage = e.error.message,
    });
  }

  goToMovieList() {
    this.router.navigate(['/movies']);
  }

  onSubmit() {
    console.log(this.movie);
    this.saveMovie();
  }

}
