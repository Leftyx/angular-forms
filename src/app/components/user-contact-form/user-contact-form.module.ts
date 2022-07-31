import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContactFormComponent } from './user-contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserContactComponent } from '../user-contact/user-contact.component';

@NgModule({
  declarations: [UserContactFormComponent, UserContactComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [UserContactFormComponent],
})
export class UserContactFormModule {}
