import { NButton } from '@/components/NButton';
import { Size } from '@/components/Types';

const ButtonExample = () => {
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg text-left">Buttons:</h1>
      <NButton size={Size.XS} isDisabled className="text-text bg-card border border-border mr-2">
        Button
      </NButton>
      <NButton
        type="submit"
        size={Size.XS}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-blue-500 hover:bg-blue-600 border border-blue-600 mr-2">
        Button
      </NButton>
      <NButton
        type="reset"
        size={Size.SM}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-green-500 hover:bg-green-600 border border-green-600 mr-2">
        Button
      </NButton>
      <NButton
        size={Size.MD}
        isLoading={true}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-yellow-500 hover:bg-yellow-600 border border-yellow-600 mr-2">
        Button
      </NButton>
      <NButton size={Size.LG} onClick={() => console.log('Button clicked')} className="mr-2">
        Button
      </NButton>
      <NButton size={Size.LG} isOutline={true} onClick={() => console.log('Button clicked')} className="mr-2">
        Button
      </NButton>
      <NButton
        size={Size.LG}
        onClick={() => console.log('Button clicked')}
        className="text-white bg-purple-500 hover:bg-purple-600 border border-purple-600 rounded-full mr-2">
        Button
      </NButton>
    </div>
  );
};

export default ButtonExample;
