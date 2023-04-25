import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    declarations: [
      MovieDetailsComponent
    ],
  }).compileComponents()
  );

  it('should be created', () => {
    const fixture = TestBed.createComponent(MovieDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
