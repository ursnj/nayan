import { NTooltip } from '@/components/NTooltip';

const TooltipExample = () => {
  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Tooltip:</h1>
      <NTooltip message="This is sample tool tip! This is sample tool tip This is sample tool tip This is sample tool tip ">
        <div className="text-sm font-medium text-orange-600">Open Tooltip</div>
      </NTooltip>
    </div>
  );
};

export default TooltipExample;
