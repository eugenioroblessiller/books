import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/users/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: IUser;

  constructor() { }

  ngOnInit(): void {
    this.user = {
      id: 0,
      name: '',
      email: '',
      password: ''
    }
  }



  loginUser() {
    console.log('login', this.user)
  }
}
