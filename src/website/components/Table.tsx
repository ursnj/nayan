import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { tableCode } from '../services/CodeBlocks';
import { NTable } from '@/components/NTable';
import { ColumnDef } from '@/components/Types';

const CustomComponent = ({ row, col, ...remaining }: any) => {
  return <div className="text-primary">Oops</div>;
};

const Table = () => {
  const columnDef = [
    { name: 'invoice', title: 'Invoice', className: 'w-[100px]' },
    { name: 'status', title: 'Status' },
    { name: 'method', title: 'Method' },
    { name: 'amount', title: 'Amount', className: 'text-right' },
    { name: 'custom', title: 'Custom', className: 'text-right', component: CustomComponent }
  ] as unknown as ColumnDef;

  const data = [
    { invoice: '10001', status: 'Completed', method: 'Credit Card', amount: '$1000' },
    { invoice: '10002', status: 'In progress', method: 'Net Banking', amount: '$500' }
  ];

  return (
    <Sidebar title="Table">
      <div className="mb-5">Displays a responsive table with header, content, and caption.</div>

      <div className="text-xl mb-5"># Demo</div>
      <NTable className="bg-card" caption="Invoice table" columnDef={columnDef} data={data} />

      <div className="text-xl mb-5 mt-5"># Usage</div>
      <Code code={tableCode} />
    </Sidebar>
  );
};

export default Table;
