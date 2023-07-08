import { useState } from 'react';
import { NCheck } from '@/components/NCheck';
import { NLink } from '@/components/NLink';
import { NText } from '@/components/NText';

const CheckExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="nyn-text mb-3 text-lg">Checkbox:</h1>
      <NCheck className="" isChecked={isChecked} onChange={(checked: any) => setIsChecked(checked)}>
        <NText className="inline">
          Sample label for checkbox. accept <NLink> terms</NLink>
        </NText>
      </NCheck>
    </div>
  );
};

export default CheckExample;
