import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component ({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
  standalone: true,
  imports: [ ReactiveFormsModule, NgIf, MatButtonModule, MatFormFieldModule, MatInputModule ]
})

export class createUserFormComponent {
 @Output()
 createUser = new EventEmitter();

  public form = new FormGroup ({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', [Validators.required, Validators.minLength(3)]),
    company: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)])
    })
  })

  public submitForm(): void {
    this.createUser.emit(this.form.value)
    this.form.reset();
  }

  constructor() {
    this.form.valueChanges.subscribe()
  }
}
