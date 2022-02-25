import { Component, OnInit } from '@angular/core';
import { APIService  } from '../services/apiService';
import { Router } from '@angular/router';
import { LoginData, LoginResponse }from "../types";
import { LOGIN_ERROR } from "../static";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public isSubmitted: boolean = false;

  public error: string = "";

  constructor(private _APIService: APIService, private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(data: LoginData): void {
    this.isSubmitted = true;
    if (data.email && data.password) {
      this._APIService.login(data.email, data.password).subscribe(() => {
        this.error = "";
        this.router.navigate(['/dashboard']);
      }, () => {
        this.error = LOGIN_ERROR;
      })
    }
  }
}
