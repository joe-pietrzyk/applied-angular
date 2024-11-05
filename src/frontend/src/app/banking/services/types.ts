export type TimeStamp = number;

// export type Deposit = {
//   id: string;
//   kind: 'deposit';
//   date: TimeStamp;
//   amount: number;
//   newBalance: number;
// };

// export type Withdrawal = {
//   id: string;
//   kind: 'withdrawal';
//   date: TimeStamp;
//   amount: number;
//   newBalance: number;
// };

export type BankTransaction = {
  id: string;
  kind: string;
  date: TimeStamp;
  amount: number;
  newBalance: number;
};

export type BankStatementApiResponse = {
  openingBalance: number;
  transactions: BankStateApiTransactionResponse[];
};

export type BankStateApiTransactionResponse = {
  ibTxLsn: string;
  amount: number;
  type: 'deposit' | 'withdrawal';
  postedOn: string;
};
