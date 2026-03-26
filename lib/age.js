function tebakUmur(tahunLahir) {
  const tahunSekarang = new Date().getFullYear();
  
  if (!tahunLahir || tahunLahir > tahunSekarang) {
    return "Tahun lahir tidak valid!";
  }

  const umur = tahunSekarang - tahunLahir;

  if (umur < 17) return `Umur Anda ${umur} tahun, masih kinyis-kinyis!`;
  if (umur < 50) return `Umur Anda ${umur} tahun, sedang di masa produktif!`;
  return `Umur Anda ${umur} tahun, Anda adalah seorang Legenda!`;
}

module.exports = { tebakUmur };