import React from 'react';
import { cn } from '../lib/utils';
// @ts-ignore
import Linkify from 'react-linkify';

export interface NLinkifyProps {
  children: any;
  className?: string;
}

export const NLinkify = React.memo((props: NLinkifyProps) => {
  return (
    <Linkify
      componentDecorator={(decoratedHref: string, decoratedText: string, key: string) => (
        <a className={cn(`text-primary ${props.className}`)} target="_blank" href={decoratedHref} key={key}>
          {decoratedText}
        </a>
      )}>
      {props.children}
    </Linkify>
  );
});

NLinkify.displayName = 'NLinkify';
