import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorBiographyComponent } from './actor-biography.component';

describe('ActorBiographyComponent', () => {
  let component: ActorBiographyComponent;
  let fixture: ComponentFixture<ActorBiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorBiographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
