import { useToast as useToaster, toast } from './ui/use-toast';

export const useToast = () => {
  const { toast: toaster } = useToaster();
  return (description: string, title: string = '') => {
    toaster(Object.assign({ description }, title && { title }));
  };
};

export function showToast(description: string, title: string = '') {
  toast(Object.assign({ description }, title && { title }));
}
