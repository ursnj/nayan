import React, { ReactNode, AnchorHTMLAttributes, useCallback } from 'react';
// @ts-ignore
import Linkify from 'react-linkify';
import { cn } from '../lib/utils';

export interface NLinkifyProps {
  children: ReactNode;
  className?: string;
  anchorProps?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel' | 'className' | 'children'>;
  linkComponent?: React.ComponentType<any>; // for custom link, e.g., NLink
}

export const NLinkify = React.memo((props: NLinkifyProps) => {
  const { children, className, anchorProps = {}, linkComponent: LinkComponent } = props;

  // Stable decorator
  const componentDecorator = useCallback(
    (decoratedHref: string, decoratedText: string, key: number) => {
      const linkProps = {
        className: cn('text-primary', className),
        href: decoratedHref,
        target: '_blank',
        rel: 'noopener noreferrer',
        key,
        ...anchorProps
      };
      if (LinkComponent) {
        return <LinkComponent {...linkProps}>{decoratedText}</LinkComponent>;
      }
      return <a {...linkProps}>{decoratedText}</a>;
    },
    [className, anchorProps, LinkComponent]
  );

  return <Linkify componentDecorator={componentDecorator}>{children}</Linkify>;
});

NLinkify.displayName = 'NLinkify';
