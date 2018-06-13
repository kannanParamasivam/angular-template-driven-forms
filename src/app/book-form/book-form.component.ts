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

  model = new Book(1, 'Suspense', this.authors[0]);

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

}
