import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';
import { CreateBookmarkModule } from './create-bookmarks/create-bookmark.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    CreateBookmarkModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    BookmarksComponent
  ]
})
export class BookmarksModule { }
