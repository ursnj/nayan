import { useState } from 'react';
import { NLink } from '../components/NLink';
import { NText } from '../components/NText';
import { Size } from '../components/Types';
import { NRadio } from '../components/NRadio';

const RadioExample = () => {
  const [selectedValue, setSelectedValue] = useState('LG');

  return (
    <div className="break-inside mb-16">
      <h1 className="nyn-text mb-3 text-lg">Radio:</h1>
      <NRadio size={Size.XS} name="radio" value="XS" selectedValue={selectedValue} onChange={(e: any) => setSelectedValue(e.target.value)}>
        <NText className="inline">
          Sample label for radio. accept <NLink> terms</NLink>
        </NText>
      </NRadio>
      <div className="mb-3" />
      <NRadio size={Size.SM} name="radio" value="SM" selectedValue={selectedValue} onChange={(e: any) => setSelectedValue(e.target.value)}>
        <NText className="inline">
          Sample label for radio. accept <NLink> terms</NLink>
        </NText>
      </NRadio>
      <div className="mb-3" />
      <NRadio size={Size.MD} name="radio" value="MD" selectedValue={selectedValue} onChange={(e: any) => setSelectedValue(e.target.value)}>
        <NText className="inline">
          Sample label for radio. accept <NLink> terms</NLink>
        </NText>
      </NRadio>
      <div className="mb-3" />
      <NRadio size={Size.LG} name="radio" value="LG" selectedValue={selectedValue} onChange={(e: any) => setSelectedValue(e.target.value)}>
        <NText className="inline">
          Sample label for radio. accept <NLink> terms</NLink>
        </NText>
      </NRadio>
      <div className="mb-3" />
    </div>
  );
};

export default RadioExample;
