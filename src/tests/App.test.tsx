import { NAccordion } from '@/components/NAccordion';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  test('NAccordion', () => {
    render(<NAccordion items={[]} />)
    screen.debug();
  });
});
