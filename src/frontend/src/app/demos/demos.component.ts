import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blah',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `<p>Demos Go Here</p>
    <div>
      <a class="link link-primary" routerLink="change-detection"
        >Change Detection</a
      >
    </div>
    <div>
      <router-outlet />
    </div>`,
  styles: ``,
})
export class DemosComponent {}
