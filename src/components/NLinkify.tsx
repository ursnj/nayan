// @ts-ignore
import Linkify from 'react-linkify';
import { cn } from '@/lib/utils';

interface Props {
  children: any;
  className?: string;
}

export const NLinkify = (props: Props) => {
  return (
    <Linkify
      componentDecorator={(decoratedHref: string, decoratedText: string, key: string) => (
        <a className={cn(`text-primary ${props.className}`)} target="blank" href={decoratedHref} key={key}>
          {decoratedText}
        </a>
      )}>
      {props.children}
    </Linkify>
  );
};
