import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './components/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="container mx-auto">
      <app-welcome />
    </main>
  `,
  styles: [],
  imports: [RouterOutlet, WelcomeComponent],
})
export class AppComponent {}
