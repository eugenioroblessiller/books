import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { IUser } from 'src/app/users/interfaces/user';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, FormsModule, MatDialogModule, MatSnackBarModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form values', () => {
    const user: IUser = { id: 0, name: 'test', email: 'test', password: 'test' }

    expect(user.email).toBeTruthy()
    expect(user.password).toBeTruthy()
  })

  it('Email must be required',  () => {
    const user: IUser = { id: 0, name: 'test', email: '', password: 'test' }
    expect(user.email).toBeFalsy()
  })

  it('Password must be required', () => {
    const user: IUser = { id: 0, name: 'test', email: 'test', password: '' }
    expect(user.password).toBeFalsy()
  })
});
