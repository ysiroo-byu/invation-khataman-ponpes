// ============ LOAD DATA ============
function loadData() {
  const saved = localStorage.getItem('undangan_data');
  return saved ? JSON.parse(saved) : getDefaultData();
}

function saveData(data) {
  localStorage.setItem('undangan_data', JSON.stringify(data));
  showAlert();
}

function getDefaultData() {
  return {
    nama_acara: "Haflah At Tasyakur Likhtitam Al Qur'an wal Kutub ke-XII",
    nama_tamu: "Bapak/Ibu/Saudara/i",
    tanggal_acara: "2023-05-08T18:00",
    tanggal_display: "Senin, 08 Mei 2023",
    waktu_acara: "Pukul 18:00 WIB Sampai Selesai",
    alamat_acara: "Halaman Pondok Pesantren Al Husna<br>Pembicara : KH. Thoifur Mawardi",
    link_maps: "https://goo.gl/maps/hovfxnkdwJH4WVDc9",
    embed_maps: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3956.318819741475!2d110.2257257147759!3d-7.42992749463963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjUnNDcuNyJTIDExMMKwMTMnNDAuNSJF!5e0!3m2!1sid!2sid!4v1680313757205!5m2!1sid!2sid",
    ucapan_pembuka: "<p>Dengan memohon ridho Allah SWT., kami keluarga besar Pondok Pesantren Al Husna bermaksud untuk menyelenggarakan Haflah At Tasyakur Likhtitam Al Qur'an wal Kutub ke-XII.</p>",
    deskripsi_acara: "<p class='arabic-small'>لجنة حفله التشكر لاختتام القران والكتب</p><p>Haflah attasyakur likhtitam AlQur'an wal kutub merupakan kegiatan akhiruddirosah pondok pesantren Al Husna payaman...</p>",
    ucapan_penutup: "Merupakan Suatu Kebahagiaan dan Kehormatan bagi Kami, Apabila Bapak/Ibu/Saudara/i, Berkenan Hadir di Acara kami",
    foto_sampul: "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/25426/1680314473foto_berdua.jpeg",
    foto_penutup: "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314192.jpeg",
    gallery: [
      "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314176.jpeg",
      "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314192.jpeg",
      "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314200.jpeg"
    ],
    hero_slides: [
      "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314176.jpeg",
      "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314192.jpeg",
      "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314200.jpeg"
    ],
    susunan_acara: [
      "Pembukaan",
      "Pembacaan Ayat Suci Al Qur'an",
      "Sambutan - Sambutan",
      "Prosesi Khotmil Putri",
      "Prosesi Khotmil Putra",
      "Mauidhoh Hasanah"
    ],
    rekening: [
      { bank: "BRI", logo: "https://indoinvite.com/nikah/bank/bri.svg", nomor: "3081-01-026892-53-7", atas_nama: "Sandi Prabowo" }
    ],
    ucapan_list: []
  };
}

let data = loadData();

// ============ SHOW ALERT ============
function showAlert() {
  const alert = document.getElementById('alert-success');
  alert.style.display = 'block';
  setTimeout(() => { alert.style.display = 'none'; }, 3000);
}

// ============ SHOW SECTION ============
function showSection(id) {
  document.querySelectorAll('.panel-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.sidebar-item').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + id).classList.add('active');
  event.currentTarget.classList.add('active');
  loadSectionData(id);
}

// ============ LOAD SECTION DATA ============
function loadSectionData(id) {
  switch(id) {
    case 'info-umum':
      document.getElementById('field-nama-acara').value = data.nama_acara;
      document.getElementById('field-nama-tamu').value = data.nama_tamu;
      break;
    case 'pembuka':
      document.getElementById('field-ucapan-pembuka').value = data.ucapan_pembuka;
      document.getElementById('field-deskripsi-acara').value = data.deskripsi_acara;
      document.getElementById('field-foto-sampul').value = data.foto_sampul;
      updatePreview('preview-foto-sampul', data.foto_sampul);
      break;
    case 'acara':
      document.getElementById('field-tanggal-acara').value = data.tanggal_acara;
      document.getElementById('field-tanggal-display').value = data.tanggal_display;
      document.getElementById('field-waktu-acara').value = data.waktu_acara;
      document.getElementById('field-alamat-acara').value = data.alamat_acara;
      document.getElementById('field-link-maps').value = data.link_maps;
      document.getElementById('field-embed-maps').value = data.embed_maps;
      break;
    case 'susunan':
      renderSusunanList();
      break;
    case 'gallery':
      renderGalleryList();
      break;
    case 'hero':
      renderHeroList();
      break;
    case 'hadiah':
      renderRekeningList();
      break;
    case 'ucapan':
      renderUcapanListAdmin();
      break;
    case 'penutup':
      document.getElementById('field-ucapan-penutup').value = data.ucapan_penutup;
      document.getElementById('field-foto-penutup').value = data.foto_penutup;
      updatePreview('preview-foto-penutup', data.foto_penutup);
      break;
  }
}

// ============ UPDATE PREVIEW ============
function updatePreview(id, url) {
  const el = document.getElementById(id);
  if (url) {
    el.innerHTML = `<img src="${url}" onerror="this.style.display='none'">`;
  } else {
    el.innerHTML = '<small style="color: #999;">Belum ada gambar</small>';
  }
}

// ============ SAVE FUNCTIONS ============
function saveInfoUmum() {
  data.nama_acara = document.getElementById('field-nama-acara').value;
  data.nama_tamu = document.getElementById('field-nama-tamu').value;
  saveData(data);
}

function saveCover() {
  // Cover menggunakan template default
  saveData(data);
}

function savePembuka() {
  data.ucapan_pembuka = document.getElementById('field-ucapan-pembuka').value;
  data.deskripsi_acara = document.getElementById('field-deskripsi-acara').value;
  data.foto_sampul = document.getElementById('field-foto-sampul').value;
  saveData(data);
}

function saveAcara() {
  data.tanggal_acara = document.getElementById('field-tanggal-acara').value;
  data.tanggal_display = document.getElementById('field-tanggal-display').value;
  data.waktu_acara = document.getElementById('field-waktu-acara').value;
  data.alamat_acara = document.getElementById('field-alamat-acara').value;
  data.link_maps = document.getElementById('field-link-maps').value;
  data.embed_maps = document.getElementById('field-embed-maps').value;
  saveData(data);
}

function savePenutup() {
  data.ucapan_penutup = document.getElementById('field-ucapan-penutup').value;
  data.foto_penutup = document.getElementById('field-foto-penutup').value;
  saveData(data);
}

// ============ HERO SLIDES ============
function renderHeroList() {
  const list = document.getElementById('hero-list');
  list.innerHTML = data.hero_slides.map((url, i) => `
    <div class="list-item">
      <div class="list-item-actions">
        <button class="btn-delete" onclick="removeHeroSlide(${i})"><i class="fas fa-trash"></i></button>
      </div>
      <div class="form-group">
        <label>Slide ${i+1} URL</label>
        <input type="text" value="${url}" onchange="updateHeroSlide(${i}, this.value)">
      </div>
      <div class="preview-box"><img src="${url}" onerror="this.style.display='none'"></div>
    </div>
  `).join('');
}

function addHeroSlide() {
  data.hero_slides.push('');
  renderHeroList();
}

function updateHeroSlide(i, val) {
  data.hero_slides[i] = val;
}

function removeHeroSlide(i) {
  if (confirm('Hapus slide ini?')) {
    data.hero_slides.splice(i, 1);
    renderHeroList();
  }
}

function saveHero() {
  saveData(data);
}

// ============ SUSUNAN ACARA ============
function renderSusunanList() {
  const list = document.getElementById('susunan-list');
  list.innerHTML = data.susunan_acara.map((item, i) => `
    <div class="list-item">
      <div class="list-item-actions">
        <button class="btn-delete" onclick="removeSusunan(${i})"><i class="fas fa-trash"></i></button>
      </div>
      <div class="form-group">
        <label>Item ${i+1}</label>
        <input type="text" value="${item}" onchange="updateSusunan(${i}, this.value)">
      </div>
    </div>
  `).join('');
}

function addSusunan() {
  data.susunan_acara.push('');
  renderSusunanList();
}

function updateSusunan(i, val) {
  data.susunan_acara[i] = val;
}

function removeSusunan(i) {
  if (confirm('Hapus item ini?')) {
    data.susunan_acara.splice(i, 1);
    renderSusunanList();
  }
}

function saveSusunan() {
  saveData(data);
}

// ============ GALLERY ============
function renderGalleryList() {
  const list = document.getElementById('gallery-list');
  list.innerHTML = data.gallery.map((url, i) => `
    <div class="list-item">
      <div class="list-item-actions">
        <button class="btn-delete" onclick="removeGallery(${i})"><i class="fas fa-trash"></i></button>
      </div>
      <div class="form-group">
        <label>Foto ${i+1} URL</label>
        <input type="text" value="${url}" onchange="updateGallery(${i}, this.value)">
      </div>
      <div class="preview-box"><img src="${url}" onerror="this.style.display='none'"></div>
    </div>
  `).join('');
}

function addGallery() {
  data.gallery.push('');
  renderGalleryList();
}

function updateGallery(i, val) {
  data.gallery[i] = val;
}

function removeGallery(i) {
  if (confirm('Hapus foto ini?')) {
    data.gallery.splice(i, 1);
    renderGalleryList();
  }
}

function saveGallery() {
  saveData(data);
}

// ============ REKENING ============
function renderRekeningList() {
  const list = document.getElementById('rekening-list');
  list.innerHTML = data.rekening.map((r, i) => `
    <div class="list-item">
      <div class="list-item-actions">
        <button class="btn-delete" onclick="removeRekening(${i})"><i class="fas fa-trash"></i></button>
      </div>
      <div class="form-group">
        <label>Nama Bank</label>
        <input type="text" value="${r.bank}" onchange="updateRekening(${i}, 'bank', this.value)">
      </div>
      <div class="form-group">
        <label>Logo Bank (URL)</label>
        <input type="text" value="${r.logo}" onchange="updateRekening(${i}, 'logo', this.value)">
      </div>
      <div class="form-group">
        <label>Nomor Rekening</label>
        <input type="text" value="${r.nomor}" onchange="updateRekening(${i}, 'nomor', this.value)">
      </div>
      <div class="form-group">
        <label>Atas Nama</label>
        <input type="text" value="${r.atas_nama}" onchange="updateRekening(${i}, 'atas_nama', this.value)">
      </div>
    </div>
  `).join('');
}

function addRekening() {
  data.rekening.push({ bank: '', logo: '', nomor: '', atas_nama: '' });
  renderRekeningList();
}

function updateRekening(i, field, val) {
  data.rekening[i][field] = val;
}

function removeRekening(i) {
  if (confirm('Hapus rekening ini?')) {
    data.rekening.splice(i, 1);
    renderRekeningList();
  }
}

function saveHadiah() {
  saveData(data);
}

// ============ UCAPAN LIST ============
function renderUcapanListAdmin() {
  const list = document.getElementById('ucapan-list-admin');
  if (data.ucapan_list.length === 0) {
    list.innerHTML = '<p style="color: #999; text-align: center; padding: 20px;">Belum ada ucapan</p>';
    return;
  }
  list.innerHTML = data.ucapan_list.map((u, i) => `
    <div class="list-item">
      <div class="list-item-actions">
        <button class="btn-delete" onclick="removeUcapan(${i})"><i class="fas fa-trash"></i></button>
      </div>
      <div class="form-group">
        <label>Nama</label>
        <input type="text" value="${u.nama}" onchange="updateUcapan(${i}, 'nama', this.value)">
      </div>
      <div class="form-group">
        <label>Pesan</label>
        <textarea onchange="updateUcapan(${i}, 'pesan', this.value)">${u.pesan}</textarea>
      </div>
      <div class="form-group">
        <label>Status Kehadiran</label>
        <select onchange="updateUcapan(${i}, 'hadir', this.value === 'true')">
          <option value="true" ${u.hadir ? 'selected' : ''}>Hadir</option>
          <option value="false" ${!u.hadir ? 'selected' : ''}>Tidak Hadir</option>
        </select>
      </div>
    </div>
  `).join('');
}

function addUcapan() {
  data.ucapan_list.unshift({
    nama: '',
    pesan: '',
    waktu: new Date().toLocaleDateString('id-ID'),
    hadir: true
  });
  renderUcapanListAdmin();
}

function updateUcapan(i, field, val) {
  data.ucapan_list[i][field] = val;
}

function removeUcapan(i) {
  if (confirm('Hapus ucapan ini?')) {
    data.ucapan_list.splice(i, 1);
    renderUcapanListAdmin();
  }
}

function saveUcapanList() {
  saveData(data);
}

// ============ EXPORT / IMPORT ============
function exportData() {
  const dataStr = JSON.stringify(data, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'undangan-data-' + Date.now() + '.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (confirm('Import akan mengganti semua data saat ini. Lanjutkan?')) {
        data = imported;
        saveData(data);
        alert('Data berhasil diimport!');
        location.reload();
      }
    } catch (err) {
      alert('File tidak valid!');
    }
  };
  reader.readAsText(file);
}

function resetData() {
  if (confirm('Reset semua data ke default? Tindakan ini tidak bisa dibatalkan!')) {
    localStorage.removeItem('undangan_data');
    location.reload();
  }
}

// ============ PREVIEW ON CHANGE ============
document.addEventListener('DOMContentLoaded', () => {
  const fotoSampul = document.getElementById('field-foto-sampul');
  const fotoPenutup = document.getElementById('field-foto-penutup');
  
  if (fotoSampul) {
    fotoSampul.addEventListener('input', () => {
      updatePreview('preview-foto-sampul', fotoSampul.value);
    });
  }
  
  if (fotoPenutup) {
    fotoPenutup.addEventListener('input', () => {
      updatePreview('preview-foto-penutup', fotoPenutup.value);
    });
  }
});
