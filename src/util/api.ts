import { Transaction } from './types';

const TRANSACTIONS: Transaction[] = [
  {
    id: '72b0299a-280d-4bea-ba9c-3f44b2914ef5',
    createdAt: new Date('2020-12-04T12:42:00Z'),
    amount: 1000,
    title: 'Tesco',
    type: 'spend',
  },
  {
    id: 'bc3fc03c-4bd1-43db-8d91-68ec608cc844',
    createdAt: new Date('2020-12-01T08:14:56Z'),
    amount: 4567,
    title: 'B&Q',
    type: 'spend',
  },
  {
    id: '95de6b76-5645-4a7f-afe4-e2ee2262f801',
    createdAt: new Date('2020-11-01T14:52:24Z'),
    amount: 20000,
    title: 'Deposit',
    type: 'deposit',
  },
  {
    id: '577a9501-fdf1-4f70-8cb4-a5d0bb02fcc0',
    createdAt: new Date('2021-01-01T19:43:23Z'),
    amount: 2499,
    title: 'Argos',
    type: 'spend',
  },
  {
    id: '512f9e65-51ac-4799-842d-e86b386145d6',
    createdAt: new Date('2020-12-12T10:11:59Z'),
    amount: 5278,
    title: 'Tesco',
    type: 'spend',
  },
  {
    id: 'a7cdce76-82af-4d04-806c-4d9ff94fb79c',
    createdAt: new Date('2020-12-11T12:15:19Z'),
    amount: 499,
    title: 'Co-Op',
    type: 'spend',
  },
  {
    id: '2f2c6d21-dc4d-437d-be23-b20b6512855a',
    createdAt: new Date('2021-02-06T09:10:43Z'),
    amount: 780,
    title: 'Boots',
    type: 'spend',
  },
  {
    id: '0e1eeab7-e9ab-484b-800e-9e7595493307',
    createdAt: new Date('2020-12-27T17:54:10Z'),
    amount: 7500,
    title: 'Deposit',
    type: 'deposit',
  },
  {
    id: '1cb57991-9baf-4355-a921-230f82cfebe8',
    createdAt: new Date('2021-01-04T12:05:11Z'),
    amount: 5050,
    title: 'Deposit',
    type: 'deposit',
  },
  {
    id: 'e6060d67-dd4b-4e3f-be0d-7663805c04fd',
    createdAt: new Date('2021-01-30T14:15:16Z'),
    amount: 12500,
    title: 'John Lewis',
    type: 'spend',
  },
];

/** In a real app, this would make a call to the server. For this example app,
 *  it returns some hard-coded transactions. */
export const getTransactions = () => {
  return Promise.resolve(TRANSACTIONS);
};
