// Kalp ekleme fonksiyonu
function kalpEkle() {
  const kalp = document.createElement('div');
  kalp.textContent = '💖';
  kalp.classList.add('kalp');

  // Ekranda sabit bir pozisyondan başlasın
  const ekranGenislik = window.innerWidth;
  const rastgeleX = Math.random() * ekranGenislik; // X koordinatını rastgele belirle

  // Kalp stilini ayarlayalım
  kalp.style.left = `${rastgeleX}px`;  // X koordinatına yerleştir
  kalp.style.bottom = `-50px`;  // Y koordinatını alttan başlat

  document.body.appendChild(kalp);

  // Kalbin animasyonu bitince silinmesi
  setTimeout(() => {
    kalp.remove();
  }, 5000); // 5 saniye sonra kalp kaybolacak
}

// Kalp animasyonunu sürekli eklemek için
setInterval(kalpEkle, 500);  // 0.5 saniyede bir kalp ekler
