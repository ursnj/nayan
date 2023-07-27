import { NInput } from '@/components/NInput';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const InputExample = () => {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState('niranjan.devasani@gmail.com');

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg text-left">Input:</h1>
      <NInput id="in1" type="email" label="Email" placeholder="Enter email" className="mb-3" value={email} onChange={e => setEmail(e.target.value)} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-text mb-3 mt-3 text-lg text-left">Input with React Hook Form:</h1>
        <NInput
          id="in2"
          type="email"
          label="Email"
          placeholder="Enter email"
          className="mb-3"
          defaultValue="niranjan.devasani@gmail.com"
          {...register('email')}
        />
      </form>
    </div>
  );
};

export default InputExample;
