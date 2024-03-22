import { cn } from '@/lib/utils';
import './NStyles.css';

interface Props {
  className?: string;
}

export const NLoading = (props: Props) => {
  return (
    <div className="p-3">
      <div
        className={cn(
          `animation-loader relative text-slate-400 text-[5px] h-[1em] w-[1em] my-[20px] mx-auto -indent-[999em] rounded-full ${props.className}`
        )}>
        Loading...
      </div>
    </div>
  );
};
