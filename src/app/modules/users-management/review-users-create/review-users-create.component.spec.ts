import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewUsersCreateComponent } from './review-users-create.component';

describe('ReviewUsersCreateComponent', () => {
  let component: ReviewUsersCreateComponent;
  let fixture: ComponentFixture<ReviewUsersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewUsersCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewUsersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
