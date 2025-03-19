import { Pipe, PipeTransform } from '@angular/core';

// TDD Test Driven Development

/**
 * Requisitos:
 *   123.456  EUR   ->     123,46 €
 *   123.456  USD   ->     $ 123,46
 *   123.456  YEN   ->     123,46 YEN
 *
 *
 * true false null -> Si/No/N.s.c.  Yes/no
 * 12.3, 34,3  -> 34.3º N 12. E
 * +34 123 456 789
 */
@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currencyName?: string | undefined | null): string {
    switch ((currencyName || 'EUR').toUpperCase()) {
      case 'EUR':
        return `${value.toFixed(2)} €`.replace('.', ',');
      case 'USD':
        return `$ ${value.toFixed(2)}`;
      case 'YEN':
        return `${value.toFixed(2)} YEN`.replace('.', ',');
      default:
        return '(undefined)';
    }
  }
}
