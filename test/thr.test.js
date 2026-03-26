const {hitungTHR} = require('../lib/thr-ied.js')

test ('Hitung THR', function(){
    const gaji = 15000000
    const masaKerjaBulan = 12
    const result = hitungTHR(gaji, masaKerjaBulan)
    expect(result).toBe(result)
    console.log(result)
})

test('Skenario Intern Baru', () => {
    const result = hitungTHR(2000000, 4, 'INTERN');
    expect(result).toBe(result);
    console.log(result)
  });