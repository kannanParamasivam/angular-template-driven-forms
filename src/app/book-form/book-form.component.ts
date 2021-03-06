import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  submitted = false;
  authors = ['Sidney Sheldon', 'Robin Cook', 'Seuss', 'Leo Tolstoy', 'Jeffery Archer', 'Dan Brown'];

  model = new Book(1, 'Blood Line', this.authors[1]);

  constructor() { }

  ngOnInit() {
    this.submitted=false;
  }

  onSubmit() {
    this.submitted = true;
  }


  get diagnostic(): string {
    return JSON.stringify(this.model);
  }

  newBook() {
    this.model = new Book(3, '', '');
    this.submitted = false;
  }


}
