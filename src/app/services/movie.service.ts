import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseURL = "http://localhost:3000/api";

  constructor(private httpClient: HttpClient) { }

  getUsersList(keyword: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.baseURL}/movies?keyword=${keyword}`)
  }

  getUserById(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.baseURL}/movie/${id}`);
  }

  createUser(movie: Movie): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/movie`, movie);
  }

  updateUser(id: string, movie: Movie): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/movie/${id}`, movie);
  }

  deleteUser(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/movie/${id}`);
  }
}
