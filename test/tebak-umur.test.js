const { tebakUmur } = require('../lib/age.js');

describe('Skenario Tebak Umur 2026', () => {

  test('Skenario Gen Z/Alpha: Kelahiran 2010', () => {
    const result = tebakUmur(2010);
    expect(result).toContain('16 tahun');
    expect(result).toContain('kinyis-kinyis');
    console.log(result)
  });

  test('Skenario Millennial: Kelahiran 1995', () => {
    const result = tebakUmur(1995);
    expect(result).toContain('31 tahun');
    expect(result).toContain('masa produktif');
    console.log(result)
  });

  test('Skenario Boomers: Kelahiran 1960', () => {
    const result = tebakUmur(1960);
    expect(result).toContain('66 tahun');
    expect(result).toContain('Legend');
    console.log(result)

  });

  test('Skenario Masa Depan: Input tahun 2030', () => {
    const result = tebakUmur(2030);
    expect(result).toBe('Tahun lahir tidak valid!');
    console.log(result)
  });

  test('Skenario Input Kosong: null atau undefined', () => {
    expect(tebakUmur(null)).toBe('Tahun lahir tidak valid!');
  });


});