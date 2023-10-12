import { NTable } from '@/components/NTable';
import SubHeader from './SubHeader';

interface Props {
  data: any[];
}

const Attributes = (props: Props) => {
  const columnDef = [
    { name: 'name', title: 'Name', className: 'min-w-[100px] max-w-[200px]' },
    { name: 'type', title: 'Type', className: 'min-w-[100px] max-w-[200px]' },
    { name: 'default', title: 'Default', className: 'min-w-[100px] w-[200px]' },
    { name: 'details', title: 'Details', className: 'min-w-[150px] w-[300px]' }
  ];

  return (
    <SubHeader title="Attributes">
      <NTable columnDef={columnDef} data={props.data} />
    </SubHeader>
  );
};

export default Attributes;
