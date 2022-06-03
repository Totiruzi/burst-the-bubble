import { CreateUserInput } from './../../../generated-types';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserGQL } from 'src/generated-types';
import { LoginService } from '../login/login.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private readonly createUserGql: CreateUserGQL,
    private readonly loginService: LoginService,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
  }
  signup(createUserData: CreateUserInput) {
    this.createUserGql
    .mutate({createUserData})
    .pipe(
      concatMap(() => this.loginService.login(createUserData))
    )
    .subscribe(() => {
      this.router.navigate(['/']);
    })
  }

}
