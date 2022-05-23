import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './auth/login/login.module';
import { SignupModule } from './auth/signup/signup.module';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink, InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
// import { TopHeaderComponent } from './top-header/top-header.component';
// import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    // TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderModule,
    LoginModule,
    SignupModule
    // LayoutModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'api/graphql'
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
