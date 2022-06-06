import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateBookmarkGQL } from 'src/generated-types';

@Component({
  selector: 'app-create-bookmarks',
  templateUrl: './create-bookmarks.component.html',
  styleUrls: ['./create-bookmarks.component.scss']
})
export class CreateBookmarksComponent implements OnInit {

  bookmarkName = new FormControl('', [Validators.required]);

  constructor(
    private readonly createBookmarkGql: CreateBookmarkGQL,
    private readonly dialogRef: MatDialogRef<CreateBookmarksComponent>
    ) { }
  ngOnInit(): void {
  }

  getBookmarkNameErrorMessage() {
    return this.bookmarkName.hasError('required') ? 'You must enter a value' : '';
  }
  
  onCreateBookmark() {
    this.createBookmarkGql.mutate(
      {createBookmarkData:{name: this.bookmarkName.value}}
      ).subscribe(result => {
        this.dialogRef.close();
      })
  }

}
