import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { defer } from 'rxjs';

import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { IBook } from './../../interfaces/books';
import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let httpClientSpy: { get: jasmine.Spy };
  let bookService: BooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule, MatSnackBarModule, MatTooltipModule, FormsModule],
      declarations: [BookComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should emit when toggle book for adding it to wishlist', () => {
    const book: IBook = { title: 'test', isbn: 'test', isInWishList: false }

    component.toggleBookInWishList(book)
      .then(res => {
        expect(res).toBeTruthy()
      })
  })
});

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

