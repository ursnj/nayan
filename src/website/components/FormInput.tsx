import React from 'react';
import { useForm } from 'react-hook-form';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import { inputHookCode } from '../services/CodeBlocks';
import SubHeader from '@/website/helpers/SubHeader';
import Attributes from '@/website/helpers/Attributes';
import { inputHookAttributes } from '@/website/services/Attributes';
import Meta from '@/website/helpers/Meta';
import { NFormInput } from '@/components/NFormInput';
import { NButton } from '@/components/NButton';

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

  const onSubmit = (data: any) => alert(JSON.stringify(data));

  return (
    <Sidebar title="Input Hook Form">
      <Meta title="Input Hook Form" />
      <div className="mb-5">Displays a form input field or a component that looks like an input field uses react-hook-form.</div>

      <SubHeader title="Demo">
        <form onSubmit={handleSubmit(onSubmit)}>
          <NFormInput control={control} errors={errors} name="email" id="in1" type="email" label="Email" placeholder="Enter email" className="mb-3" />
          <NButton type="submit">Submit</NButton>
        </form>
      </SubHeader>

      <Attributes data={inputHookAttributes} />

      <div className="text-primary mb-5">Note: Along with these params you can also pass all default input params.</div>

      <SubHeader title="Usage">
        <Code code={inputHookCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default FormInput;
