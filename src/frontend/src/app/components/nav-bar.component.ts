import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl" routerLink="/">Applied Angular</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a routerLink="demos">Demos</a></li>
          <li><a routerLink="golfing">Golfing</a></li>
        </ul>
      </div>
    </div>
  `,
  styles: ``,
})
export class NavBarComponent {}
