import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {

  let guard: AuthGuard;
  let authService: AuthService
  const routerMock = { navigate: jasmine.createSpy('navigate') }

  beforeEach(() => {
    const canActivateStub = () => ({ canActivate: () => true });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthService, { provide: Router, useValue: canActivateStub }],
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  xit('should redirect an authenticated user to the books component', () => {
    authService.isAuthenticated.next(true)
    expect(guard.canActivate()).toBe(true)
  });


});
