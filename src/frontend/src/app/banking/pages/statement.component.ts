import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BankingStore } from '../services/banking.store';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, CurrencyPipe, TitleCasePipe],
  template: `
    <p>Statement</p>
    <div class="overflow-x auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th>Date of Transaction</th>
            <th>Type</th>
            <th>Amount</th>
            <th>New Balance</th>
          </tr>
        </thead>
        <tbody>
          @for (record of store.entities(); track record.id) {
            <tr>
              <th>{{ record.date | date: 'short' }}</th>
              <th>{{ record.kind | titlecase }}</th>
              <th>{{ record.amount | currency }}</th>
              <th>{{ record.newBalance | currency }}</th>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: ``,
})
export class StatementComponent {
  //constructor(private bankingService: BankingService) {}
  store = inject(BankingStore);
}
