import React from 'react';
import ComponentWrapper from '../helpers/ComponentWrapper';
import { NTable } from 'nayan';

const CustomComponent = (row: any, col: any, rowIndex: number, colIndex: number) => {
  return <div className="text-primary">Oops</div>;
};

const Table = () => {
  const columns = [
    { name: 'invoice', title: 'Invoice', className: 'w-[100px]' },
    { name: 'status', title: 'Status' },
    { name: 'method', title: 'Method' },
    { name: 'amount', title: 'Amount', className: 'text-right' },
    { name: 'custom', title: 'Custom', className: 'text-right', renderCell: CustomComponent }
  ];

  const data = [
    { invoice: '10001', status: 'Completed', method: 'Credit Card', amount: '$1000' },
    { invoice: '10002', status: 'In progress', method: 'Net Banking', amount: '$500' }
  ];

  return (
    <ComponentWrapper>
      <NTable className="bg-card" caption="Invoice table" columns={columns} data={data} />
    </ComponentWrapper>
  );
};

export default Table;
