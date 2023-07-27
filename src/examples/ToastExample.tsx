import { useToast } from '@/components/NToast';

const ToastExample = () => {
  const toast = useToast();
  return (
    <div className="mb-16 ">
      <div className="break-inside-avoid mb-5 flex flex-row justify-between">
        <h1 className="text-text mb-3 text-lg text-left">Toast:</h1>
        <div className="text-sm font-medium text-cyan-600" onClick={() => toast('Simple Toaster!')}>
          Show Toast
        </div>
      </div>
      <div className="break-inside-avoid flex flex-row justify-between">
        <h1 className="text-text mb-3 text-lg text-left">Toast with Title:</h1>
        <div className="text-sm font-medium text-yellow-600" onClick={() => toast('Toaster Description!', 'Toaster Title')}>
          Show Toast
        </div>
      </div>
    </div>
  );
};

export default ToastExample;
