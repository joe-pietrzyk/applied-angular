import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BankingStore } from '../services/banking.store';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: ` <p>This is a Default Component</p>
    <div>
      <ul>
        <li>
          @if (service.withdrawalAvailable()) {
            <a routerLink="../withdraw" class="btn btn-primary">Withdraw</a>
          } @else {
            <p>Make a deposit to get started!</p>
          }
        </li>
        <li><a routerLink="../deposit" class="btn btn-primary">Deposit</a></li>
        <li>
          <a routerLink="../statement" class="btn btn-primary">Statement</a>
        </li>
      </ul>
    </div>`,
  styles: ``,
})
export class DefaultComponent {
  service = inject(BankingStore);

  withdrawAvailable = computed(() => this.service.balance() > 0);
}
