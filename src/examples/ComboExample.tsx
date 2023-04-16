import { NCombo } from '../components/NCombo';
import { useState } from 'react';

const items = [
  { id: '1', label: 'Wade Cooper' },
  { id: '2', label: 'Arlene Mccoy' },
  { id: '3', label: 'Devon Webb' },
  { id: '4', label: 'Tom Cook' },
  { id: '5', label: 'Tanya Fox' },
  { id: '6', label: 'Hellen Schmidt', disable: true }
];

const SelectExample = () => {
  const [selected, setSelected] = useState(items[0]);
  const [selected1, setSelected1] = useState([items[0]]);

  return (
    <div className="break-inside mb-16">
      <h1 className="nyn-text mb-3 text-lg">Combo Single:</h1>
      <NCombo items={items} selected={selected} onSelected={setSelected} />
      <div className="mt-3" />
      <h1 className="nyn-text mb-3 text-lg">Combo Multi:</h1>
      <NCombo items={items} selected={selected1} onSelected={setSelected1} />
    </div>
  );
};

export default SelectExample;
