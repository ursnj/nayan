import { NText } from '@/components/NText';

const TextExample = () => {
  return (
    <div className="break-inside-avoid mb-16">
      <h1 className="text-text mb-3 text-lg">Text:</h1>
      <NText>This is a sample text.</NText>
      <NText className="text-base text-green-600">This is a sample text with custom styles.</NText>
    </div>
  );
};

export default TextExample;
