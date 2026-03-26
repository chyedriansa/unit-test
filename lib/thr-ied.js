function hitungTHR(gaji, masaKerjaBulan) {
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