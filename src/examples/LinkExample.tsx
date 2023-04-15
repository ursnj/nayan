import { NLink } from '../components/NLink';

const LinkExample = () => {
  return (
    <div className="my-10">
      <h1 className="nyn-text mb-3 text-lg">Links:</h1>
      <div className="nyn-text">
        This is a sample paragraph with some <NLink>Link</NLink>.
      </div>
      <div className="nyn-text">
        This is a sample paragraph with some custom styled <NLink className="text-red-700">Link</NLink>.
      </div>
    </div>
  );
};

export default LinkExample;
