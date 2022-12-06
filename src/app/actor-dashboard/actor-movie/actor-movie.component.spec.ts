import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorMovieComponent } from './actor-movie.component';

describe('ActorMovieComponent', () => {
  let component: ActorMovieComponent;
  let fixture: ComponentFixture<ActorMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
