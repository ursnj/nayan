import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { cardCode } from '../services/CodeBlocks';
import { NTable } from '@/components/NTable';

const CustomComponent = (params: any) => {
  return <div className="text-red-800">Oops</div>;
};

const Table = () => {
  const columnDef = [
    { name: 'invoice', title: 'Invoice', className: 'w-[100px]' },
    { name: 'status', title: 'Status' },
    { name: 'method', title: 'Method' },
    { name: 'amount', title: 'Amount', className: 'text-right' },
    { name: 'more', title: 'More', className: 'text-right', component: CustomComponent }
  ];

  const data = [
    { invoice: '10001', status: 'Completed', method: 'Credit Card', amount: '$1000' },
    { invoice: '10002', status: 'In progress', method: 'Net Banking', amount: '$500' }
  ];

  return (
    <Sidebar title="Card">
      <div className="mb-5">Displays a card with header, content, and footer.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NTable className="bg-card" caption="Invoice table" columnDef={columnDef} data={data} />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={cardCode} />
    </Sidebar>
  );
};

export default Table;
