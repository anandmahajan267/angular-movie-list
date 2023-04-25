import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieListComponent } from './movie-list.component';

describe('MovieListComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    declarations: [
      MovieListComponent
    ],
  }).compileComponents()
  );

  it('should be created', () => {
    const fixture = TestBed.createComponent(MovieListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});

