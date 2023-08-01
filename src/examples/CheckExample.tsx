import { useState } from 'react';
import { NCheck } from '@/components/NCheck';
import { NLink } from '@/components/NLink';

const CheckExample = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg">Checkbox:</h1>
      <NCheck isChecked={isChecked} onChange={(checked: any) => setIsChecked(checked)}>
        Sample label for checkbox. accept <NLink> terms</NLink>
      </NCheck>
    </div>
  );
};

export default CheckExample;
