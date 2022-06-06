import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookmarksComponent } from './create-bookmarks/create-bookmarks.component';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  constructor(private readonly matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onFabClick() {
    this.matDialog.open(CreateBookmarksComponent)
  }
}
