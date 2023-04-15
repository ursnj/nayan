import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NTextarea } from '../components/NTextarea';

const TextareaExample = () => {
  const { register, handleSubmit } = useForm();
  const [address, setAddress] = useState('Bangalore, India');

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg text-left">Custom Textarea:</h1>
      <NTextarea label="Address" placeholder="Enter address" className="mb-3" rows={3} value={address} onChange={e => setAddress(e.target.value)} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="nyn-text mb-3 mt-3 text-lg text-left">React Hook Form Textarea:</h1>
        <NTextarea rows={3} label="Address" placeholder="Enter address" className="mb-3" defaultValue="Bangalore, India" {...register('address')} />
      </form>
    </div>
  );
};

export default TextareaExample;
