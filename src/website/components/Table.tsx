import React from 'react';
import { NTable } from '@/components/NTable';
import ComponentWrapper from '../helpers/ComponentWrapper';

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
  ];

  const data = [
    { invoice: '10001', status: 'Completed', method: 'Credit Card', amount: '$1000' },
    { invoice: '10002', status: 'In progress', method: 'Net Banking', amount: '$500' }
  ];

  return (
    <ComponentWrapper>
      <NTable className="bg-card" caption="Invoice table" columnDef={columnDef} data={data} />
    </ComponentWrapper>
  );
};

export default Table;
