import React from 'react';
import { View } from 'react-native';

import { Transaction } from '../util/types';
import SingleTransaction from './SingleTransaction';

type TransactionListProps = {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <View>
      {transactions.map((transaction) => (
        <SingleTransaction transaction={transaction} key={transaction.id} />
      ))}
    </View>
  )
};

export default TransactionList;
