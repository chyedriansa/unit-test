function hitungTHR(gaji, masaKerjaBulan) {
    const status = 'string'
  if (masaKerjaBulan <= 0) return 0;

  if (status.toUpperCase() === "INTERN") {
    return masaKerjaBulan >= 3 ? 500000 : 0;
  }
  
  if (masaKerjaBulan <= 0) {
    return 0;
  }

  if (masaKerjaBulan < 12) {
    return gaji / masaKerjaBulan;
  }

  if (masaKerjaBulan >= 12) {
    return (masaKerjaBulan / 12) * gaji;
  }
}

module.exports = { hitungTHR };
