// @ts-ignore
import Linkify from 'react-linkify';

interface Props {
  children: any;
}

export const NLinkify = (props: Props) => {
  return (
    <Linkify
      componentDecorator={(decoratedHref: string, decoratedText: string, key: string) => (
        <a className="text-primary" target="blank" href={decoratedHref} key={key}>
          {decoratedText}
        </a>
      )}>
      {props.children}
    </Linkify>
  );
};
