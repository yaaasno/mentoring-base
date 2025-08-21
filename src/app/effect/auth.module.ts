import { EffectsModule } from '@ngrx/effects';
import { Injectable, NgModule } from '@angular/core';
import { AuthEffects } from './auth.effect';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [
    EffectsModule.forRoot([AuthEffects])
  ]
})

export class AppModule {}
