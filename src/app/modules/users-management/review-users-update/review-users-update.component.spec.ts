import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewUsersUpdateComponent } from './review-users-update.component';

describe('ReviewUsersUpdateComponent', () => {
  let component: ReviewUsersUpdateComponent;
  let fixture: ComponentFixture<ReviewUsersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewUsersUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewUsersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
