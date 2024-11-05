import {
  Component,
  ChangeDetectionStrategy,
  inject,
  effect,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BankingStore } from '../services/banking.store';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CurrencyPipe, RouterLink],
  template: ` <p>Making a Withdrawal</p>
    <p>Your Balance is {{ bankingStore.balance() | currency }}</p>

    <form [formGroup]="form" (ngSubmit)="doWithdraw(foci)">
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Amount of Withdrawal</span>
        </div>
        <input
          #foci
          formControlName="amount"
          type="number"
          placeholder=""
          class="input input-bordered w-full max-w-xs"
        />
        @let amountControl = form.controls.amount;
        @if (
          amountControl.invalid &&
          (amountControl.dirty || amountControl.touched)
        ) {
          <div class="alert alert-error">
            @if (amountControl.hasError('required')) {
              <p>This is required</p>
            }
            @if (amountControl.hasError('min')) {
              <p>You need to withdraw at least a penny</p>
            }
            @if (amountControl.hasError('max')) {
              <p>
                Your withdrawal cannot exceed
                {{ this.bankingStore.balance() | currency }}
              </p>
            }
          </div>
        }
      </label>
      <button type="submit" class="btn btn-primary">Make Withdrawal</button>
      <a routerLink=".." class="btn btn-warning">Cancel</a>
    </form>`,
  styles: ``,
})
export class WithdrawComponent {
  bankingStore = inject(BankingStore);

  constructor() {
    effect(() => {
      this.form.controls.amount.setValidators([
        Validators.required,
        Validators.min(0.01),
        Validators.max(this.bankingStore.balance()),
      ]);
    });
  }

  form = new FormGroup({
    amount: new FormControl<number | null>(null, {
      validators: [Validators.required, Validators.min(0.01)],
    }),
  });

  doWithdraw(focusme: HTMLInputElement) {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const amount = this.form.controls.amount.value!;
      this.bankingStore.withdraw(amount);
      this.form.reset();
      focusme.focus(); // be carefule, A11y, etc. just for a demonstration if you need it.
    } else {
      Object.keys(this.form.controls).forEach((ctrl) => {
        (ctrl as unknown as FormControl).markAsTouched({ onlySelf: true });
      });
    }
  }
}
