import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { type BankTransaction, type BankStatementApiResponse } from './types';
import { map } from 'rxjs';

@Injectable()
export class BankingService {
  #http = inject(HttpClient);

  loadCurrentStatement() {
    return this.#http
      .get<BankStatementApiResponse>(
        'http://fake-api.bankohypertheory.com/user/statements/2024/11',
      )
      .pipe(
        map((r) => r.transactions),
        map((txns) =>
          txns.map((t) => {
            const thingy: BankTransaction = {
              id: t.ibTxLsn,
              amount: t.amount,
              date: new Date(t.postedOn).getTime(),
              kind: t.type,
              newBalance: 99,
            };
            return thingy;
          }),
        ),
      );
  }
}
