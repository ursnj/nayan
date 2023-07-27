import { NAlert } from '@/components/NAlert';
import { AlertTypes } from '@/components/Types';

const AlertExample = () => {
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg text-left">Alert:</h1>
      <NAlert type={AlertTypes.DEFAULT} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.INFO} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.SUCCESS} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.WARNING} message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
      <NAlert type={AlertTypes.ERROR} title="Error!" message="New version available!" className="mb-3" onClose={() => console.log('Alert closed')} />
    </div>
  );
};

export default AlertExample;
