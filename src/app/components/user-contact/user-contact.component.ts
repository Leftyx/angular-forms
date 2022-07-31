import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss'],
})
export class UserContactComponent implements OnInit {
  @Input()
  public form!: FormGroup;

  constructor() {}

  public ngOnInit(): void {
    console.log('MY FORM: ', this.form);
  }

  public static buildContactForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('name', Validators.required),
      email: new FormControl('test@test.com', [
        Validators.required,
        Validators.email,
      ]),
    });
  }
}
