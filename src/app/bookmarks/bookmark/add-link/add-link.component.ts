import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {

  link = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  getLinkErrorMessage() {
    return this.link.hasError('required') ? 'You must enter a vbalue' : '';
  }

  addLink() {}
}
