import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateBookComponent } from './add-update-book.component';

describe('AddUpdateBookComponent', () => {
  let component: AddUpdateBookComponent;
  let fixture: ComponentFixture<AddUpdateBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
