export type Transaction = {
  /** UUID which uniquely identifies this transaction */
  id: string;
  /** The amount of the transaction in pence */
  amount: number;
  /** The time when this transaction took place */
  createdAt: Date;
  /** A title to describe the transaction, such as a merchant name */
  title: string;
  type: 'spend' | 'deposit';
};
