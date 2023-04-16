import { NCheck } from '../components/NCheck';
import { useState } from 'react';
import { NLink } from '../components/NLink';
import { NText } from '../components/NText';
import { Size } from '../components/Types';

const CheckExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="break-inside mb-16">
      <h1 className="nyn-text mb-3 text-lg">Checkbox:</h1>
      <NCheck size={Size.XS} className="" isChecked={isChecked} onChange={(e: any) => setIsChecked(e.target.checked)}>
        <NText className="inline">
          Sample label for checkbox. accept <NLink> terms</NLink>
        </NText>
      </NCheck>
      <div className="mb-3" />
      <NCheck size={Size.SM} className="" isChecked={isChecked} onChange={(e: any) => setIsChecked(e.target.checked)}>
        <NText className="inline">
          Sample label for checkbox. accept <NLink> terms</NLink>
        </NText>
      </NCheck>
      <div className="mb-3" />
      <NCheck size={Size.MD} className="" isChecked={isChecked} onChange={(e: any) => setIsChecked(e.target.checked)}>
        <NText className="inline">
          Sample label for checkbox. accept <NLink> terms</NLink>
        </NText>
      </NCheck>
      <div className="mb-3" />
      <NCheck size={Size.LG} className="" isChecked={isChecked} onChange={(e: any) => setIsChecked(e.target.checked)}>
        <NText className="inline">
          Sample label for checkbox. accept <NLink> terms</NLink>
        </NText>
      </NCheck>
      <div className="mb-3" />
    </div>
  );
};

export default CheckExample;
