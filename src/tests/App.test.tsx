import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import AlertExample from '../examples/AlertExample';
import BadgeExample from '../examples/BadgeExample';
import ButtonExample from '../examples/ButtonExample';
import CardExample from '../examples/CardExample';
import CheckExample from '../examples/CheckExample';

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

  test('NCard', () => {
    const { container } = render(<CardExample />);
    const cards = container.getElementsByClassName('nyn-card');
    expect(cards.length).toBe(1);
  });

  test('NCheckbox', () => {
    const { container } = render(<CheckExample />);
    const checks = container.getElementsByClassName('nyn-check');
    expect(checks.length).toBe(4);
  });
});
