import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookmarkComponent } from './create-bookmarks/create-bookmark.component';
import { Bookmark, BookmarksGQL } from 'src/generated-types';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  bookmarks$: Observable<Bookmark[]>

  constructor(
    private readonly bookmarksGql: BookmarksGQL,
    private readonly matDialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.bookmarks$ = this.bookmarksGql.watch().valueChanges.pipe(
      map(result => result.data.bookmarks)
    )
  }

  onFabClick() {
    this.matDialog.open(CreateBookmarkComponent)
  }

  onBookmarkClick(bookmarkId: string) {
    this.router.navigate(['/bookmarks', bookmarkId])
  }
}
