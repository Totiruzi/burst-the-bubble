import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateUserInput, User } from "src/generated-types";

@Injectable({providedIn: 'root'})
export class LoginService {

  constructor(private readonly http: HttpClient) {}

  login(loginRequest: CreateUserInput) {
    return this.http.post<User>('/api/auth/login', loginRequest);
  }
}