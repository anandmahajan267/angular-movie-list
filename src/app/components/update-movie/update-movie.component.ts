import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  id: string;
  movie: Movie = new Movie();
  errorMessage:string = '';

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.movieService.getUserById(this.id).subscribe(data => {
      this.movie = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.errorMessage = ''
    this.movieService.updateUser(this.id, this.movie).subscribe({
      next: () => this.goToMovieList(),
      error: (e) =>  this.errorMessage = e.error.message,
    });
  }

  goToMovieList(){
    this.router.navigate(['/movies']);
  }

}
