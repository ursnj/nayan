import { AlertTypes, NAlert } from '../components/NAlert';

const AlertExample = () => {
  return (
    <div className="break-inside mb-16">
      <h1 className="nyn-text mb-3 text-lg text-left">Alert:</h1>
      <NAlert type={AlertTypes.DEFAULT} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
      <NAlert type={AlertTypes.INFO} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
      <NAlert type={AlertTypes.SUCCESS} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
      <NAlert type={AlertTypes.WARNING} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
      <NAlert type={AlertTypes.ERROR} message="New version of application available!" onClose={() => console.log('Alert closed')} />
      <div className="mb-3" />
    </div>
  );
};

export default AlertExample;
