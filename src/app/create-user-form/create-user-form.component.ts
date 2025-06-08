import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component ({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
  standalone: true,
  imports: [ ReactiveFormsModule, NgIf ]
})

export class createUserFormComponent {
 @Output()
 createUser = new EventEmitter();

  public form = new FormGroup ({
    name: new FormControl('hello world', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('тестовый эмейл', [Validators.required, Validators.email]),
    website: new FormControl('', [Validators.required, Validators.minLength(3)]),
    companyName: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  public submitForm(): void {
    this.createUser.emit(this.form.value)
    this.form.reset();
  }

  constructor() {
    this.form.valueChanges.subscribe()
  }
}
