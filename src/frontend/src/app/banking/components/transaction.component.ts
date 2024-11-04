import {
  Component,
  ChangeDetectionStrategy,
  input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-banking-transaction',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <input #amount type="text" class="input input-bodered" />
      <button (click)="doTransaction(amount)" class="btn btn-primary">
        {{ buttonLabel() }}
      </button>
    </div>
  `,
  styles: ``,
})
export class TransactionComponent {
  buttonLabel = input.required<string>();
  @Output() transactionHappened = new EventEmitter<number>();

  doTransaction(amount: HTMLInputElement) {
    this.transactionHappened.emit(amount.valueAsNumber);
  }
}
