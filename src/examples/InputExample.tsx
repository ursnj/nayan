import { NJInput } from '../components/NJInput';

const InputExample = () => {
  return (
    <>
      <h1 className="text mb-3 text-lg text-left">Input:</h1>
      <NJInput type="email" label="Email" placeholder="Enter email" />
    </>
  );
};

export default InputExample;
