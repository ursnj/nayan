import React from 'react';
import { useForm } from 'react-hook-form';
import { NFormInput } from '@/components/NFormInput';
import { NButton } from '@/components/NButton';
import ComponentWrapper from '../helpers/ComponentWrapper';

const FormInput = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: 'niranjan.devasani@gmail.com'
    }
  });

  const onSubmit = (data: any) => {
    // @ts-ignore
    alert(JSON.stringify(data));
  };

  return (
    <ComponentWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NFormInput control={control} errors={errors} name="email" id="in1" type="email" label="Email" placeholder="Enter email" className="mb-3" />
        <NButton type="submit">Submit</NButton>
      </form>
    </ComponentWrapper>
  );
};

export default FormInput;
