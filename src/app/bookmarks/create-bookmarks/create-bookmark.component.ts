import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookmarksDocument, CreateBookmarkGQL } from '../../../generated-types';
@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark.component.html',
  styleUrls: ['./create-bookmark.component.scss']
})
export class CreateBookmarkComponent implements OnInit {

  bookmarkName = new FormControl('', [Validators.required]);

  constructor(
    private readonly createBooksmarkGql: CreateBookmarkGQL,
    private readonly dialogRef: MatDialogRef<CreateBookmarkComponent>
    ) { }
  ngOnInit(): void {}

  getBookmarkNameErrorMessage() {
    return this.bookmarkName.hasError('required') ? 'You must enter a value' : '';
  }
  
  onCreateBookmark() {
    this.createBooksmarkGql.mutate(
      {
        createBookmarkData:{name: this.bookmarkName.value}
      },
      {
        refetchQueries: [
          {
          query: BookmarksDocument
          },
        ],
      })
      .subscribe(() => {
        this.dialogRef.close();
      }
    )
  }

}
