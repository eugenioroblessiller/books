import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';

import { IBook } from '../../interfaces/books';
import { BooksService } from '../../services/books.service';
import { WishListComponent } from './wish-list.component';

describe('WishListComponent', () => {
  let component: WishListComponent;
  let fixture: ComponentFixture<WishListComponent>;
  let bookService: BooksService


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishListComponent, LoaderComponent],
      imports: [HttpClientTestingModule, MatDialogModule, MatSnackBarModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WishListComponent);
    component = fixture.componentInstance;
    bookService = TestBed.inject(BooksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return books - wishlist', (done) => {
    const expectedBooks: IBook[] = [
      {
        id: 'string',
        isbn: 'string',
        title: 'string',
        isInWishList: false,
        subtitle: 'string',
        author: 'string',
        published: new Date,
        publisher: 'string',
        pages: 0,
        description: 'string',
        website: 'string',
      },
      {
        id: 'string',
        isbn: 'string',
        title: 'string',
        isInWishList: false,
        subtitle: 'string',
        author: 'string',
        published: new Date,
        publisher: 'string',
        pages: 0,
        description: 'string',
        website: 'string',
      }
    ]
    spyOn(bookService, 'getBooks').and.returnValue(Promise.resolve(expectedBooks));

    bookService.getBooks()
      .then((books) => {
        expect(books).toEqual(expectedBooks)
        expect(books.length).toBeGreaterThan(0)
        done()
      })
  })

  it('should return books length > 0 - wishlist', (done) => {
    const expectedBooks: IBook[] = [
      {
        id: 'string',
        isbn: 'string',
        title: 'string',
        isInWishList: false,
        subtitle: 'string',
        author: 'string',
        published: new Date,
        publisher: 'string',
        pages: 0,
        description: 'string',
        website: 'string',
      },
      {
        id: 'string',
        isbn: 'string',
        title: 'string',
        isInWishList: false,
        subtitle: 'string',
        author: 'string',
        published: new Date,
        publisher: 'string',
        pages: 0,
        description: 'string',
        website: 'string',
      }
    ]
    spyOn(bookService, 'getBooks').and.returnValue(Promise.resolve(expectedBooks));

    bookService.getBooks()
      .then((books) => {
        expect(books.length).toBeGreaterThan(0)
        done()
      })
  })
});
