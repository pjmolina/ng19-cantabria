import { CurrencyPipe } from './currency.pipe';

/**
 * Requisitos:
 *   123.456  EUR   ->     123,46 €
 *   123.456  USD   ->     $ 123.46
 *   123.456  YEN   ->     123,46 YEN
 *
 *
 *  SUT = System Under Test
 *   AAA
 *
 * Ley de Postel
 */
describe('CurrencyPipe', () => {
  it('should create an instance', () => {
    const pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 123,46 € when passing 123.456  EUR', () => {
    // Arrange
    const sut = new CurrencyPipe();

    // Act
    const res = sut.transform(123.456, 'EUR');

    // Assert
    expect(res).toBe('123,46 €');
  });
  it('should return $ 123.46 when passing 123.456  USD', () => {
    const sut = new CurrencyPipe();
    const res = sut.transform(123.456, 'USD');
    expect(res).toBe('$ 123.46');
  });
  it('should return 123,46 YEN when passing 123.456  YEN', () => {
    const sut = new CurrencyPipe();
    const res = sut.transform(123.456, 'YEN');
    expect(res).toBe('123,46 YEN');
  });
  it('should work with currenclyName in lowecase', () => {
    const sut = new CurrencyPipe();
    const res = sut.transform(123.456, 'eur');
    expect(res).toBe('123,46 €');
  });
  it('should work with no currency', () => {
    const sut = new CurrencyPipe();
    const res = sut.transform(123.456, null);
    expect(res).toBe('123,46 €');
  });
  it('should retrun undefined with a non implemented currency', () => {
    const sut = new CurrencyPipe();
    const res = sut.transform(123.456, 'LBR');
    expect(res).toBe('(undefined)');
  });

  // negativos ??
  // null undefined -> 0  - EUR
});
