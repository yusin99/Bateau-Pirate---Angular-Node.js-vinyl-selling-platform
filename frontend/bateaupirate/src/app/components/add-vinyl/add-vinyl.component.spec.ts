import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVinylComponent } from './add-vinyl.component';

describe('AddVinylComponent', () => {
  let component: AddVinylComponent;
  let fixture: ComponentFixture<AddVinylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVinylComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVinylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
