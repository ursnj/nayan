import React from 'react';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { tableCode } from '../services/CodeBlocks';
import { NTable } from '@/components/NTable';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { tableAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';

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
    <Sidebar title="Table">
      <Meta title="Table" />
      <div className="mb-5">Displays a responsive table with header, content, and caption.</div>

      <SubHeader title="Demo">
        <NTable className="bg-card" caption="Invoice table" columnDef={columnDef} data={data} />
      </SubHeader>

      <Attributes data={tableAttributes} />

      <SubHeader title="Usage">
        <Code code={tableCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Table;
