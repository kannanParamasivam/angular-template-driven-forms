import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { BookFormComponent } from './book-form/book-form.component';
import { ForbiddenValueValidatorDirective } from './shared/forbidden-value-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    ForbiddenValueValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
