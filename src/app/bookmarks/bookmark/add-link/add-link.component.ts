import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bookmark, UpdateBookmarkGQL, BookmarkDocument } from './../../../../generated-types';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {

  link = new FormControl('', [Validators.required]);

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    private readonly data: {bookmark: Bookmark},
    private readonly dialogRef: MatDialogRef<AddLinkComponent>,
    private readonly updateBookmarkGql: UpdateBookmarkGQL
    ) { }

  ngOnInit(): void {
  }

  getLinkErrorMessage() {
    return this.link.hasError('required') ? 'You must enter a vbalue' : '';
  }

  addLink() {
    this.updateBookmarkGql.mutate({
      updateBookmarkData: {
        _id: this.data.bookmark._id,
        links: [...this.data.bookmark.links, this.link.value],
      },
    }, {
      refetchQueries: [{
        query: BookmarkDocument,
        variables: {_id: this.data.bookmark._id}
      }],
    })
    .subscribe(() => {
      this.dialogRef.close();
    })
  }
}
