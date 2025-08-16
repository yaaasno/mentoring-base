import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeadComponent } from "./header/header.component";
import { UsersService } from './admin.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, RouterLink, AsyncPipe, HeadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public readonly userService = inject(UsersService);
}
