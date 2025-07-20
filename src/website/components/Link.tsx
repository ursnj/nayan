import React from 'react';
import { NLink } from '@/components/NLink';
import ComponentWrapper from '../helpers/ComponentWrapper';

const handleClick = () => alert('Span clicked!');
const doSomething = (e: React.MouseEvent) => alert('Custom action!');

const Link = () => {
  return (
    <ComponentWrapper>
      <div className="mb-4">
        <h3 className="font-semibold">1. Basic Anchor (external link by default)</h3>
        <NLink href="https://example.com">External Link</NLink>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">2. Anchor with custom target, rel, and className</h3>
        <NLink href="https://example.com" target="_self" rel="nofollow" className="text-blue-700 underline">
          Custom Anchor
        </NLink>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">3. Span as a button (with onClick)</h3>
        <NLink onClick={handleClick}>Clickable Span</NLink>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">4. Styled Span</h3>
        <NLink className="font-bold text-green-700" onClick={handleClick}>
          Styled Span
        </NLink>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">5. Advanced: All props supported</h3>
        <NLink href="/about" className="underline text-purple-700">
          About (Internal Link)
        </NLink>
        <br />
        <NLink className="cursor-pointer text-orange-700" onClick={doSomething}>
          Do Something
        </NLink>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">6. Accessibility: Keyboard activation</h3>
        <p>
          <NLink onClick={handleClick}>Focus me and press Enter or Space</NLink>
        </p>
      </div>
    </ComponentWrapper>
  );
};

export default Link;
