import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';

import { IBook } from '../../interfaces/books';
import { BooksService } from '../../services/books.service';
import { IndexComponent } from './index.component';
import { MatIconModule } from '@angular/material/icon';
import { IModalResult } from '../../interfaces/modalResult';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let httpClientSpy: { get: jasmine.Spy };
  let bookService: BooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexComponent, LoaderComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    bookService = TestBed.inject(BooksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return books - books', (done) => {
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
        done()
      })
  })

  it('should return books length > 0 - books', (done) => {
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

  it('should  add new book to books array', (done) => {
    const expectedBook: IBook = {
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

    spyOn(bookService, 'createBook').and.returnValue(Promise.resolve(expectedBook))
    bookService.createBook(expectedBook)
      .then(book => {
        component.books.push(book)
        expect(component.books.length).toBeGreaterThanOrEqual(0)
        done()
      })

  })

});
