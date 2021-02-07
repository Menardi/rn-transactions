import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import TransactionList from './src/components/TransactionList';
import { Transaction } from './src/util/types';
import { getTransactions } from './src/util/api';

const App = () => {
  const [transactions, setTransactions] = useState([] as Transaction[]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TransactionList transactions={transactions} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
