import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { Transaction } from '../util/types';

type SingleTransactionProps = {
  transaction: Transaction;
}

const SingleTransaction = ({ transaction }: SingleTransactionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headline}>
        <Text style={styles.title}>
          {transaction.title}
        </Text>
        <Text style={styles.amount}>
          {transaction.amount}
        </Text>
      </View>
      <Text style={styles.date}>
        {transaction.createdAt.toString()}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headline: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    flex: 1,
  },
  amount: {
    fontSize: 20,
  },
  date: {
    fontSize: 14,
    color: '#999',
  },
});

export default SingleTransaction;
