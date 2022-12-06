import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorRoleComponent } from './actor-role.component';

describe('ActorRoleComponent', () => {
  let component: ActorRoleComponent;
  let fixture: ComponentFixture<ActorRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
