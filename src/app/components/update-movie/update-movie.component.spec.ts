import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UpdateMovieComponent } from './update-movie.component';

describe('UpdateMovieComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    declarations: [
      UpdateMovieComponent
    ],
  }).compileComponents()
  );

  it('should be created', () => {
    const fixture = TestBed.createComponent(UpdateMovieComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});


