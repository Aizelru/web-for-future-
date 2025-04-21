document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const nowa = document.getElementById('nowa').value;
    const tinggi = document.getElementById('tinggi').value;
    const panjang = document.getElementById('panjang').value;
    const lebar = document.getElementById('lebar').value;
    const durasiAngka = document.getElementById('durasiAngka').value;
    const durasiSatuan = document.getElementById('durasiSatuan').value;
    const berat = document.getElementById('berat').value;
    const metode = document.querySelector('input[name="metode"]:checked').value;
    const alamat = document.getElementById('alamat').value;

    // Buat nomor order random
    const nomorOrder = 'JCS' + Date.now();

    // Simpan nomor order ke halaman
    document.getElementById('orderOutput').textContent = `Nomor Order Anda: ${nomorOrder}`;

    let pesan = `*PESANAN PENITIPAN BARU*\n`;
    pesan += `Nomor Order: ${nomorOrder}\n`;
    pesan += `Nama: ${nama}\n`;
    pesan += `No WA: ${nowa}\n`;
    pesan += `Ukuran (cm): ${tinggi} x ${panjang} x ${lebar}\n`;
    pesan += `Durasi: ${durasiAngka} ${durasiSatuan}\n`;
    pesan += `Berat: ${berat} kg\n`;
    pesan += `Metode: ${metode}\n`;
    if (metode === 'Jemput') {
        pesan += `Alamat Penjemputan: ${alamat}\n`;
    }

    // Ganti dengan nomor WhatsApp admin kamu (tanpa + atau 0)
    const nomorAdmin = '6285763138450';

    // Buat link WhatsApp dengan encodeURIComponent
    const link = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;

    // Arahkan ke WA
    window.open(link, '_blank');
});

  
    document.getElementById("orderForm").style.display = "none";
    document.getElementById("nomorOrder").style.display = "block";
  });
  
  function toggleAlamat() {
    const pengiriman = document.getElementById("pengiriman").value;
    const alamatField = document.getElementById("alamatField");
    alamatField.style.display = (pengiriman === "jemput") ? "block" : "none";
  }
