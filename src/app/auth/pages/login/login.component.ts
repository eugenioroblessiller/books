import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { IUser } from 'src/app/users/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("loginLoader", { static: true }) loader!: LoaderComponent;

  user!: IUser;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.user = {
      id: 0,
      name: '',
      email: '',
      password: ''
    }
  }



  loginUser() {
    console.log(this.loader)
    this.loader.show()
    console.log('login', this.user)
  }
}
