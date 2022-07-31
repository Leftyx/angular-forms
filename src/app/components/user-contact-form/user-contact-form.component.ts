import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserContactComponent } from '../user-contact/user-contact.component';

@Component({
  selector: 'app-user-contact-form',
  templateUrl: './user-contact-form.component.html',
  styleUrls: ['./user-contact-form.component.scss'],
})
export class UserContactFormComponent implements OnInit {
  public userContactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.generateUserContactForm();
  }

  public get forms(): FormArray {
    return this.userContactForm?.get('contacts') as FormArray;
  }

  private generateUserContactForm(): void {
    this.userContactForm = this.formBuilder.group({
      contacts: this.formBuilder.array([this.addContactForm()]),
    });
  }

  public addContactForm(): FormGroup {
    return UserContactComponent.buildContactForm();
    // return this.formBuilder.group({
    //   name: this.formBuilder.control('', Validators.required),
    //   email: this.formBuilder.control('test@test.com', [
    //     Validators.required,
    //     Validators.email,
    //   ]),
    // });
  }

  public submitForm(): void {
    console.log('CONTACT FORM: ', this.userContactForm?.value);
    this.forms.push(this.addContactForm());
  }
}
