// Tests for utils.js
import { formatCurrency, calculateDaysWorked } from './js/utils.js';

describe('formatCurrency', () => {
  test('formats amount with Rs.', () => {
    expect(formatCurrency(1500)).toBe('Rs. 1500');
  });
});

describe('calculateDaysWorked', () => {
  test('calculates days present in month', () => {
    const logs = {
      '2023-12-01': { '1': true },
      '2023-12-02': { '1': true },
      '2023-12-03': { '2': true }
    };
    expect(calculateDaysWorked(logs, '1', '2023-12')).toBe(2);
  });
});