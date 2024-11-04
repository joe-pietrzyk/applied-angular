import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './components/welcome.component';
import { NavBarComponent } from "./components/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="container mx-auto">
      <app-nav-bar />
    </main>
  `,
  styles: [],
  imports: [RouterOutlet, WelcomeComponent, NavBarComponent],
})
export class AppComponent {}
