import { Component, OnInit } from '@angular/core';
import { CreateUserGQL } from 'src/generated-types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private readonly createUserGql: CreateUserGQL) { }

  ngOnInit(): void {
  }
  signup({email, password}: any) {
    this.createUserGql.mutate({createUserData: {email, password}}).subscribe(() => {})
  }

}
