import { CurrencyPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { TransactionComponent } from './components/transaction.component';

@Component({
  selector: 'app-banking',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, TransactionComponent],
  template: ` <p>Banking Stuff</p>
    <p>Your Current Balance Is {{ balance() | currency }}</p>

    <app-banking-transaction
      (transactionHappened)="doDeposit($event)"
      buttonLabel="Deposit"
    />
    <app-banking-transaction
      (transactionHappened)="doWithdrawal($event)"
      buttonLabel="WithDrawal"
    />`,
  styles: ``,
})
export class BankingComponent {
  balance = signal(0);

  doWithdrawal(amount: number) {
    this.balance.update((b) => b - amount);
  }

  doDeposit(amount: number) {
    this.balance.update((b) => b + amount);
  }
}
