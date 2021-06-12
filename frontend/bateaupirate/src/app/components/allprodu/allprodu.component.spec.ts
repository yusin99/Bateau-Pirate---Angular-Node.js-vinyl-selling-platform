import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproduComponent } from './allprodu.component';

describe('AllproduComponent', () => {
  let component: AllproduComponent;
  let fixture: ComponentFixture<AllproduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllproduComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllproduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
