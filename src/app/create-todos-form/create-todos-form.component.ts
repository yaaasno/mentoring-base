import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component ({
  selector: 'app-create-todos-form',
  templateUrl: './create-todos-form.component.html',
  styleUrl: './create-todos-form.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatButtonModule]
})

export class createTodosFormComponent {
  @Output()
  createTodos = new EventEmitter();

  public form = new FormGroup ({
    userId: new FormControl('', [Validators.required, Validators.minLength(1)]),
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    completed: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })

  public submitForm(): void {
    this.createTodos.emit(this.form.value)
    this.form.reset();
  }

  constructor() {
    this.form.valueChanges.subscribe()
  }
}
