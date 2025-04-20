document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nama = document.getElementById("nama").value;
    const wa = document.getElementById("wa").value;
    const tinggi = document.getElementById("tinggi").value;
    const panjang = document.getElementById("panjang").value;
    const lebar = document.getElementById("lebar").value;
    const durasiTipe = document.getElementById("durasiTipe").value;
    const durasi = document.getElementById("durasi").value;
    const berat = document.getElementById("berat").value;
    const pengiriman = document.getElementById("pengiriman").value;
    const alamat = document.getElementById("alamat").value;
  
    const orderId = 'JCS-${new Date().getTime()}';
    document.getElementById("kodeOrder").textContent = orderId;
  
    let pesan = 'Halo Admin, saya ingin titip barang dengan detail berikut:%0A' +
                'Nama: ${nama}%0A' +
                'No. WA: ${wa}%0A' +
                'Ukuran: ${tinggi} x ${panjang} x ${lebar} cm%0A' +
                'Durasi: ${durasi} ${durasiTipe}%0A' +
                'Berat: ${berat} kg%0A' +
                'Pengiriman: ${pengiriman}%0A';
  
    if (pengiriman === "jemput") {
      pesan += 'Alamat Jemput: ${alamat}%0A';
    }
  
    pesan += 'Nomor Order: ${orderId}';
  
    const nomorAdmin = "6285763138450"; // ganti dengan nomor WhatsApp Admin (format internasional)
    const link = 'https://wa.me/${nomorAdmin}?text=${pesan}';
    document.getElementById("linkWA").href = link;
  
    document.getElementById("orderForm").style.display = "none";
    document.getElementById("nomorOrder").style.display = "block";
  });
  
  function toggleAlamat() {
    const pengiriman = document.getElementById("pengiriman").value;
    const alamatField = document.getElementById("alamatField");
    alamatField.style.display = (pengiriman === "jemput") ? "block" : "none";
  }