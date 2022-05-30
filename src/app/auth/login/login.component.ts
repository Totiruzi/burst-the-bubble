import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserInput } from 'src/generated-types';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router  
  ) {}

  ngOnInit(): void {
  }

  login(createUserInput: CreateUserInput) {
    this.loginService.login(createUserInput).subscribe(() => {})
  }
}
