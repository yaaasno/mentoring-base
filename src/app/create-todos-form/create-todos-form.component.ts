import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component ({
  selector: 'app-create-todos-form',
  templateUrl: './create-todos-form.component.html',
  styleUrl: './create-todos-form.component.scss',
  standalone: true,
  imports: [ ReactiveFormsModule, NgIf, MatButtonModule,  MatFormFieldModule, MatInputModule ]
})

export class createTodosFormComponent {
  @Output()
  createTodos = new EventEmitter();

  public form = new FormGroup ({
    userId: new FormControl('', [Validators.required, Validators.minLength(1)]),
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    completed: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)])
  })

  public submitForm(): void {
    this.createTodos.emit(this.form.value)
    this.form.reset();
  }

  constructor() {
    this.form.valueChanges.subscribe()
  }
}
