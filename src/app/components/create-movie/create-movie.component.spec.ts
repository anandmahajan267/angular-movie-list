import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateMovieComponent } from './create-movie.component';

describe('CreateMovieComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    declarations: [
      CreateMovieComponent
    ],
  }).compileComponents()
  );

  it('should be created', () => {
    const fixture = TestBed.createComponent(CreateMovieComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
