import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BankingStore } from './services/banking.store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-banking',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, CurrencyPipe],
  template: ` <div class="card bg-base-100 w-96 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Your Account</h2>
        <p>
          You Currently have a Balance of
          {{ bankingStore.balance() | currency }}
        </p>
      </div>
    </div>
    <router-outlet />`,
  styles: ``,
})
export class BankingComponent {
  bankingStore = inject(BankingStore);
}
