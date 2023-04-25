import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [MovieService]
  }));

   it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
   });

   it('should have getUsersList function', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service.getUsersList).toBeTruthy();
   });

   it('should have createUser function', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service.createUser).toBeTruthy();
   });
   
   it('should have updateUser function', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service.updateUser).toBeTruthy();
   });

   it('should have deleteUser function', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service.deleteUser).toBeTruthy();
   });


});
