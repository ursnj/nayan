import { useToast as useToaster } from '@/components/ui/use-toast';

export const useToast = () => {
  const { toast: toaster } = useToaster();
  return (description: string, title: string = '') => {
    toaster(Object.assign({ description }, title && { title }));
  };
};
