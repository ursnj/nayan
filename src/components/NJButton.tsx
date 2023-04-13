interface Props {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  isLoading?: boolean;
  loadingText?: string;
  onClick?: () => void;
}

export const NJButton = (props: Props) => {
  const { text, type = 'button', className = '', isLoading = false, loadingText = 'Loading...', onClick = () => undefined } = props;
  return (
    <button type={type} className={`njn-button rounded px-3 py-2 ${className} transition duration-150 ease-in-out`} onClick={onClick}>
      {!isLoading ? text : loadingText}
    </button>
  );
};
