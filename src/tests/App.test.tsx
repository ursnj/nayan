import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import AlertExample from '../examples/AlertExample';
import BadgeExample from '../examples/BadgeExample';
import ButtonExample from '../examples/ButtonExample';

describe('App', () => {
  test('NAlert', () => {
    const { container } = render(<AlertExample />);
    const alerts = container.getElementsByClassName('nyn-alert');
    expect(alerts.length).toBe(5);
  });

  test('NBadge', () => {
    const { container } = render(<BadgeExample />);
    const badges = container.getElementsByClassName('nyn-badge');
    expect(badges.length).toBe(5);
  });

  test('NButton', () => {
    const { container } = render(<ButtonExample />);
    const buttons = container.getElementsByClassName('nyn-button');
    fireEvent.click(buttons[0]);
    expect(buttons.length).toBe(7);
  });
});
