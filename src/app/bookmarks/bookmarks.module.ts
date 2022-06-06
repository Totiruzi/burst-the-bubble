import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';
import { CreateBookmarksModule } from './create-bookmarks/create-bookmarks.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    CreateBookmarksModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    BookmarksComponent
  ]
})
export class BookmarksModule { }
