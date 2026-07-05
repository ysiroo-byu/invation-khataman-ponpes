// ========================================
// UNDANGAN DIGITAL - MAIN JAVASCRIPT
// Versi Final - Musik & Footer Fix
// ========================================

// ===== DATA DEFAULT =====
const DEFAULT_DATA = {
  nama_acara: "Haflah At Tasyakur Likhtitam Al Qur'an wal Kutub ke-XII",
  subtitle: "We Invite You To",
  nama_tamu: "Bapak/Ibu/Saudara/i",
  desc_cover: "Tanpa Mengurangi Rasa Hormat, Kami Mengundang Bapak/Ibu/Saudara/i untuk Hadir di Acara Kami.",
  foto_sampul: "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314176.jpeg",
  foto_akhir: "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314192.jpeg",
  akhir_kata: "Merupakan Suatu Kebahagiaan dan Kehormatan bagi Kami, Apabila Bapak/Ibu/Saudara/i, Berkenan Hadir di Acara kami",
  ucapan_pembuka: "<p><strong>بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْ</strong></p><p>ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ</p><p>Dengan memohon ridho Allah SWT., kami keluarga besar Pondok Pesantren Al Husna bermaksud untuk menyelenggarakan Haflah At Tasyakur Likhtitam Al Qur'an wal Kutub ke-XII.</p>",
  doa: "لجنة حفله التشكر لاختتام القران والكتب",
  deskripsi_acara: "Haflah attasyakur likhtitam AlQur'an wal kutub merupakan kegiatan akhiruddirosah pondok pesantren Al Husna payaman yang dilaksanakan setiap dua tahun sekali sebagai wujud syukur kepada Allah swt.",
  hari_acara: "Senin, 08 Mei 2023",
  tanggal_acara: "2023-05-08",
  waktu_acara: "Pukul 18:00 WIB Sampai Selesai",
  lokasi_acara: "Halaman Pondok Pesantren Al Husna",
  pembicara: "KH. Thoifur Mawardi",
  ucapan_penutup: "Besar harapan kami apabila Bapak/Ibu/Saudara/i berkenan untuk menghadiri acara tersebut. Demikian pemberitahuan yang dapat kami sampaikan, atas perhatiannya kami ucapkan terimakasih.",
  link_maps: "https://goo.gl/maps/hovfxnkdwJH4WVDc9",
  embed_maps: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3956.318819741475!2d110.2257257147759!3d-7.42992749463963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjUnNDcuNyJTIDExMMKwMTMnNDAuNSJF!5e0!3m2!1sid!2sid!4v1680313757205!5m2!1sid!2sid",
  musik_url: "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/25426/suara_ucapan.mp3",
  musik_alt: "",
  autoplay: true,
  password_admin: "y2103",
  watermark: "@ysiroo",
  animasi_ucapan: true,
  countdown: true,
  gallery: [
    {url:"https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314176.jpeg", caption:"Foto 1"},
    {url:"https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314192.jpeg", caption:"Foto 2"},
    {url:"https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314200.jpeg", caption:"Foto 3"},
    {url:"https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314207.jpeg", caption:"Foto 4"},
    {url:"https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314217.jpeg", caption:"Foto 5"},
    {url:"https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314244.jpeg", caption:"Foto 6"}
  ],
  timeline: [
    {waktu:"08:00", acara:"Pembukaan"},
    {waktu:"08:30", acara:"Pembacaan Ayat Suci Al Qur'an"},
    {waktu:"09:00", acara:"Sambutan - Sambutan"},
    {waktu:"10:00", acara:"Prosesi Khotmil Putri"},
    {waktu:"11:00", acara:"Prosesi Khotmil Putra"},
    {waktu:"12:00", acara:"Mauidhoh Hasanah"}
  ],
  ucapan: []
};

// ===== FALLBACK MUSIC SOURCES =====
const MUSIC_FALLBACKS = [
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  "https://file-examples.com/storage/fe1c0c8f5b5b5b5b5b5b5b5b/2017/11/file_example_MP3_1MG.mp3"
];

// ===== UTILITY: Safe Element Getter =====
function safeGet(id) {
  return document.getElementById(id);
}

function safeAddListener(element, event, handler) {
  if (element && typeof element.addEventListener === 'function') {
    element.addEventListener(event, handler);
    return true;
  }
  return false;
}

// ===== LOAD DATA =====
let DATA = {};
function loadData() {
  const saved = localStorage.getItem('undangan_data');
  if (saved) {
    try {
      DATA = JSON.parse(saved);
      DATA = {...DEFAULT_DATA, ...DATA};
    } catch(e) {
      console.warn('Gagal parse data, menggunakan default');
      DATA = {...DEFAULT_DATA};
    }
  } else {
    DATA = {...DEFAULT_DATA};
  }
}

// ===== RENDER DATA KE HALAMAN =====
function renderData() {
  // Cover - Nama Acara
  const elNamaAcaraCover = safeGet('display-nama-acara-cover');
  if (elNamaAcaraCover) elNamaAcaraCover.textContent = DATA.nama_acara || '';

  // Cover - Nama Tamu
  const elNamaTamu = safeGet('display-nama-tamu');
  if (elNamaTamu) {
    const urlParams = new URLSearchParams(window.location.search);
    const kpd = urlParams.get('kpd');
    if (kpd) {
      const namaDecoded = decodeURIComponent(kpd);
      elNamaTamu.textContent = namaDecoded;
      try { localStorage.setItem('nama_tamu', namaDecoded); } catch(e) {}
    } else {
      let savedNama = '';
      try { savedNama = localStorage.getItem('nama_tamu') || ''; } catch(e) {}
      elNamaTamu.textContent = savedNama || DATA.nama_tamu || '';
    }
  }

  // Header - Nama Acara
  const elNamaAcaraHeader = safeGet('display-nama-acara-header');
  if (elNamaAcaraHeader) elNamaAcaraHeader.textContent = DATA.nama_acara || '';

  // Ucapan Pembuka
  const elUcapanPembuka = safeGet('display-ucapan-pembuka');
  if (elUcapanPembuka) elUcapanPembuka.innerHTML = DATA.ucapan_pembuka || '';

  // Foto Sampul
  const fotoSampul = document.querySelector('.foto-sampul');
  if (fotoSampul && DATA.foto_sampul) {
    fotoSampul.style.backgroundImage = `url('${DATA.foto_sampul}')`;
  }

  // Doa
  const elDoa = safeGet('display-doa');
  if (elDoa) elDoa.textContent = DATA.doa || '';

  // Deskripsi Acara
  const elDeskripsi = safeGet('display-deskripsi-acara');
  if (elDeskripsi) elDeskripsi.textContent = DATA.deskripsi_acara || '';

  // Acara - Badge
  const elNamaAcaraBadge = safeGet('display-nama-acara-badge');
  if (elNamaAcaraBadge) elNamaAcaraBadge.textContent = DATA.nama_acara || '';

  // Acara - Hari
  const elHariAcara = safeGet('display-tanggal-acara');
  if (elHariAcara) elHariAcara.textContent = DATA.hari_acara || '';

  // Acara - Waktu
  const elWaktuAcara = safeGet('display-waktu-acara');
  if (elWaktuAcara) elWaktuAcara.textContent = DATA.waktu_acara || '';

  // Acara - Lokasi
  const elLokasi = safeGet('display-lokasi-acara');
  if (elLokasi) {
    elLokasi.innerHTML = `${DATA.lokasi_acara || ''}<br>Pembicara : <span id="display-pembicara">${DATA.pembicara || ''}</span>`;
  }

  // Maps
  const elLinkMaps = safeGet('link-maps');
  if (elLinkMaps) elLinkMaps.href = DATA.link_maps || '#';

  const elEmbedMaps = safeGet('embed-maps');
  if (elEmbedMaps && DATA.embed_maps) elEmbedMaps.src = DATA.embed_maps;

  // Ucapan Penutup
  const elUcapanPenutup = safeGet('display-ucapan-penutup');
  if (elUcapanPenutup) elUcapanPenutup.textContent = DATA.ucapan_penutup || '';

  // Thank Section - Foto Akhir
  const fotoAkhir = document.querySelector('.foto-sampul-akhir');
  if (fotoAkhir && DATA.foto_akhir) {
    fotoAkhir.style.backgroundImage = `url('${DATA.foto_akhir}')`;
  }

  // Thank Section - Nama Acara
  const elNamaAcaraAkhir = safeGet('display-nama-acara-akhir');
  if (elNamaAcaraAkhir) elNamaAcaraAkhir.textContent = DATA.nama_acara || '';

  // Thank Section - Akhir Kata
  const elAkhirKata = safeGet('display-akhir-kata');
  if (elAkhirKata) elAkhirKata.textContent = DATA.akhir_kata || '';

  // Watermark
  const elWatermark = document.querySelector('.watermark');
  if (elWatermark) {
    elWatermark.innerHTML = `<span id="icon-at" class="icon-at">@</span>ysiroo`;
    attachIconAtListener();
  }

  // ✅ FIX: Setup Audio dengan Fallback
  setupAudio();

  // Render Gallery, Timeline, Ucapan
  renderGallery();
  renderTimeline();
  renderUcapanList();
}

// ===== SETUP AUDIO DENGAN FALLBACK =====
function setupAudio() {
  const audio = safeGet('audio-bg');
  if (!audio) {
    console.warn('Audio element tidak ditemukan');
    return;
  }

  // Set volume
  audio.volume = 0.5;

  // Cek apakah URL musik valid
  const musicUrl = DATA.musik_url;
  if (musicUrl && isValidMusicUrl(musicUrl)) {
    // ✅ FIX: Gunakan source element untuk fallback yang lebih baik
    audio.innerHTML = '';
    const source = document.createElement('source');
    source.src = musicUrl;
    source.type = 'audio/mpeg';
    audio.appendChild(source);
    
    // Tambahkan fallback sources
    MUSIC_FALLBACKS.forEach(url => {
      const fallbackSource = document.createElement('source');
      fallbackSource.src = url;
      fallbackSource.type = 'audio/mpeg';
      audio.appendChild(fallbackSource);
    });
    
    // ✅ FIX: Load ulang audio setelah src berubah
    audio.load();
    
    console.log('✓ Music loaded:', musicUrl);
  } else {
    console.warn('URL musik tidak valid, menggunakan fallback');
    loadFallbackMusic(audio);
  }

  // Error handler untuk fallback otomatis
  audio.addEventListener('error', function(e) {
    console.warn('Music load error, trying fallback...');
    loadFallbackMusic(audio);
  }, true);
}

function isValidMusicUrl(url) {
  if (!url) return false;
  // Cek apakah URL berformat audio yang valid
  const validExtensions = ['.mp3', '.wav', '.ogg', '.m4a', '.aac'];
  const lowerUrl = url.toLowerCase();
  return validExtensions.some(ext => lowerUrl.includes(ext)) || 
         lowerUrl.includes('audio/') || 
         lowerUrl.includes('music');
}

function loadFallbackMusic(audio) {
  if (!audio) return;
  
  // Coba fallback sources satu per satu
  for (let i = 0; i < MUSIC_FALLBACKS.length; i++) {
    const source = document.createElement('source');
    source.src = MUSIC_FALLBACKS[i];
    source.type = 'audio/mpeg';
    audio.appendChild(source);
  }
  
  audio.load();
  console.log('✓ Fallback music loaded');
}

// ===== RENDER GALLERY =====
function renderGallery() {
  const container = safeGet('gallery-container');
  if (!container) return;

  if (!DATA.gallery || DATA.gallery.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#fff; grid-column:1/-1;">Belum ada foto</p>';
    return;
  }

  container.innerHTML = DATA.gallery.map((item, i) => {
    if (!item || !item.url) return '';
    return `
      <div class="gallery-item" data-aos="fade-up" data-aos-delay="${i * 100}">
        <img src="${item.url}" alt="${item.caption || 'Foto'}" loading="lazy" onerror="this.style.display='none'">
        ${item.caption ? `<div class="caption">${item.caption}</div>` : ''}
      </div>
    `;
  }).join('');
}

// ===== RENDER TIMELINE =====
function renderTimeline() {
  const container = safeGet('timeline-container');
  if (!container) return;

  if (!DATA.timeline || DATA.timeline.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#fff;">Belum ada susunan acara</p>';
    return;
  }

  container.innerHTML = DATA.timeline.map((item, i) => {
    if (!item) return '';
    return `
      <div class="timeline-item" data-aos="fade-up" data-aos-delay="${i * 100}">
        <div class="timeline-content">
          <div class="timeline-waktu">${item.waktu || ''}</div>
          <div class="timeline-acara">${item.acara || ''}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ===== RENDER UCAPAN LIST =====
function renderUcapanList() {
  const container = safeGet('box-ucapan');
  if (!container) return;

  const ucapanList = DATA.ucapan || [];
  if (ucapanList.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#999; padding:20px;">Belum ada ucapan. Jadilah yang pertama!</p>';
    return;
  }

  container.innerHTML = ucapanList.map((u, i) => {
    if (!u) return '';
    return `
      <div class="ucapan-item" data-aos="fade-up" data-aos-delay="${i * 50}">
        <div class="nama">
          ${u.nama || 'Anonim'}
          <span class="badge-hadir ${u.ket_hadir == '1' ? 'hadir' : 'tidak-hadir'}">
            ${u.ket_hadir == '1' ? '✓ Hadir' : '✗ Tidak Hadir'}
          </span>
          ${u.jumlah ? `<small style="color:#999; margin-left:5px;">(${u.jumlah} orang)</small>` : ''}
        </div>
        <div class="tanggal">${u.tanggal || ''}</div>
        <div class="isi">${u.ucapan || ''}</div>
      </div>
    `;
  }).join('');
}

// ===== COUNTDOWN =====
function startCountdown() {
  if (DATA.countdown === false) {
    const countdownEl = safeGet('countdown');
    if (countdownEl) countdownEl.style.display = 'none';
    return;
  }

  let targetDate;
  if (DATA.tanggal_acara) {
    const parts = DATA.tanggal_acara.split('-');
    if (parts.length === 3) {
      let hours = 18, minutes = 0;
      if (DATA.waktu_acara) {
        const timeMatch = DATA.waktu_acara.match(/(\d{1,2}):(\d{2})/);
        if (timeMatch) {
          hours = parseInt(timeMatch[1]);
          minutes = parseInt(timeMatch[2]);
        }
      }
      targetDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]), hours, minutes, 0);
    }
  }

  if (!targetDate || isNaN(targetDate.getTime())) {
    targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
  }

  function updateCountdown() {
    const daysEl = safeGet('days');
    const hoursEl = safeGet('hours');
    const minutesEl = safeGet('minutes');
    const secondsEl = safeGet('seconds');
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      daysEl.textContent = '0';
      hoursEl.textContent = '0';
      minutesEl.textContent = '0';
      secondsEl.textContent = '0';
      return;
    }

    daysEl.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
    hoursEl.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesEl.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    secondsEl.textContent = Math.floor((distance % (1000 * 60)) / 1000);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ===== FORM UCAPAN =====
function initFormUcapan() {
  const form = safeGet('form-ucapan');
  if (!form) {
    console.log('Form ucapan tidak ditemukan, skip init');
    return;
  }

  const kehadiranSelect = safeGet('input-kehadiran');
  const jumlahGroup = safeGet('jumlah-group');

  if (kehadiranSelect) {
    kehadiranSelect.addEventListener('change', function() {
      if (jumlahGroup) {
        jumlahGroup.style.display = (this.value === '1') ? 'block' : 'none';
      }
    });
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNama = safeGet('input-nama');
    const inputUcapan = safeGet('input-ucapan');
    const inputKehadiran = safeGet('input-kehadiran');
    const inputJumlah = safeGet('input-jumlah');

    if (!inputNama || !inputUcapan || !inputKehadiran) {
      alert('Form tidak lengkap!');
      return;
    }

    const nama = inputNama.value.trim();
    const ucapan = inputUcapan.value.trim();
    const ket_hadir = inputKehadiran.value;
    const jumlah = inputJumlah ? inputJumlah.value : '1';

    if (!nama || !ucapan || !ket_hadir) {
      alert('Mohon lengkapi semua field!');
      return;
    }

    const newUcapan = {
      nama: nama,
      ucapan: ucapan,
      ket_hadir: ket_hadir,
      jumlah: ket_hadir === '1' ? jumlah : '0',
      tanggal: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    };

    if (!DATA.ucapan) DATA.ucapan = [];
    DATA.ucapan.unshift(newUcapan);
    try {
      localStorage.setItem('undangan_data', JSON.stringify(DATA));
    } catch(e) {
      console.warn('Gagal simpan ke localStorage:', e);
    }

    renderUcapanList();
    if (typeof AOS !== 'undefined' && AOS.refresh) AOS.refresh();

    form.reset();
    if (jumlahGroup) jumlahGroup.style.display = 'none';

    showAnimasiUcapan(newUcapan);

    const btn = form.querySelector('.btn-kirim');
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = '✓ Terkirim!';
      btn.style.background = '#27ae60';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 2000);
    }
  });
}

// ===== ANIMASI UCAPAN FLOATING =====
function showAnimasiUcapan(ucapanData) {
  if (!ucapanData || DATA.animasi_ucapan === false) return;

  const animasi = safeGet('animasi-ucapan');
  const animNama = safeGet('anim-nama');
  const animUcapan = safeGet('anim-ucapan');

  if (!animasi || !animNama || !animUcapan) return;

  animNama.textContent = ucapanData.nama || '';
  animUcapan.textContent = ucapanData.ucapan || '';

  animasi.classList.add('show');

  setTimeout(() => {
    animasi.classList.remove('show');
  }, 5000);
}

function startAutoAnimasiUcapan() {
  if (DATA.animasi_ucapan === false) return;
  if (!DATA.ucapan || DATA.ucapan.length === 0) return;

  setInterval(() => {
    if (DATA.ucapan && DATA.ucapan.length > 0) {
      const randomIndex = Math.floor(Math.random() * DATA.ucapan.length);
      showAnimasiUcapan(DATA.ucapan[randomIndex]);
    }
  }, 8000);
}

// ===== AUDIO CONTROL - IMPROVED =====
let isMusicPlaying = false;
let musicLoadAttempts = 0;
const MAX_LOAD_ATTEMPTS = 3;

function toggleMusic() {
  const audio = safeGet('audio-bg');
  const btn = safeGet('btn-music');
  if (!audio) {
    console.warn('Audio element tidak ditemukan');
    return;
  }

  if (audio.paused) {
    // ✅ FIX: Play dengan error handling yang lebih baik
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isMusicPlaying = true;
        if (btn) {
          btn.innerHTML = '<i class="fa fa-pause"></i>';
          btn.classList.add('active');
        }
        console.log('✓ Musik berhasil diputar');
      }).catch(err => {
        console.error('Gagal memutar musik:', err);
        // Coba fallback jika gagal
        if (musicLoadAttempts < MAX_LOAD_ATTEMPTS) {
          musicLoadAttempts++;
          console.log(`Mencoba fallback ke-${musicLoadAttempts}...`);
          loadFallbackMusic(audio);
          setTimeout(() => toggleMusic(), 500);
        } else {
          showMusicErrorNotification();
        }
      });
    }
  } else {
    audio.pause();
    isMusicPlaying = false;
    if (btn) {
      btn.innerHTML = '<i class="fa fa-music"></i>';
      btn.classList.remove('active');
    }
  }
}

function showMusicErrorNotification() {
  const notif = document.createElement('div');
  notif.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #ff6b6b;
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    z-index: 99999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    font-size: 14px;
    max-width: 90%;
    text-align: center;
  `;
  notif.innerHTML = `
    <strong>⚠️ Musik Tidak Tersedia</strong><br>
    <small>Silakan cek koneksi internet atau update URL musik di admin panel.</small>
  `;
  document.body.appendChild(notif);
  
  setTimeout(() => {
    notif.style.opacity = '0';
    notif.style.transition = 'opacity 0.5s';
    setTimeout(() => notif.remove(), 500);
  }, 5000);
}

function initAudio() {
  const audio = safeGet('audio-bg');
  if (!audio) return;

  // ✅ FIX: Setup audio sudah dipindah ke setupAudio()
  // Di sini hanya setup event listener untuk tombol buka undangan
  
  if (DATA.autoplay !== false) {
    const btnBuka = safeGet('btn-buka-undangan');
    if (btnBuka) {
      btnBuka.addEventListener('click', function() {
        // ✅ FIX: Delay sedikit untuk memastikan audio sudah di-load
        setTimeout(() => {
          const playPromise = audio.play();
          
          if (playPromise !== undefined) {
            playPromise.then(() => {
              isMusicPlaying = true;
              const btn = safeGet('btn-music');
              if (btn) {
                btn.innerHTML = '<i class="fa fa-pause"></i>';
                btn.classList.add('active');
              }
              console.log('✓ Musik autoplay berhasil');
            }).catch(err => {
              console.warn('Autoplay diblokir oleh browser:', err.message);
              console.log('💡 User perlu klik tombol musik untuk memulai');
              
              // Tampilkan notifikasi halus
              showAutoplayHint();
            });
          }
        }, 800);
      });
    }
  }
}

function showAutoplayHint() {
  const hint = document.createElement('div');
  hint.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(10, 135, 142, 0.95);
    color: white;
    padding: 12px 20px;
    border-radius: 25px;
    z-index: 9999;
    font-size: 13px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    animation: fadeInUp 0.5s ease;
  `;
  hint.innerHTML = '🎵 Klik icon musik untuk mengaktifkan suara';
  document.body.appendChild(hint);
  
  setTimeout(() => {
    hint.style.opacity = '0';
    hint.style.transition = 'opacity 0.5s';
    setTimeout(() => hint.remove(), 500);
  }, 4000);
}

// ===== COVER / BUKA UNDANGAN =====
function initCover() {
  const btnBuka = safeGet('btn-buka-undangan');
  const cover = safeGet('cover');
  const fixMenu = safeGet('fix-menu');

  if (!btnBuka || !cover) {
    console.log('Cover atau tombol buka tidak ditemukan');
    return;
  }

  btnBuka.addEventListener('click', function() {
    cover.classList.add('cover-opened');
    if (fixMenu) fixMenu.style.display = 'flex';

    const loading = safeGet('loading-screen');
    if (loading) {
      loading.classList.add('hidden');
      setTimeout(() => {
        if (loading.parentNode) loading.remove();
      }, 1000);
    }

    setTimeout(() => {
      if (typeof AOS !== 'undefined' && AOS.init) {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 50
        });
      }
    }, 1000);

    setTimeout(startAutoAnimasiUcapan, 3000);
  });
}

// ===== LOADING SCREEN =====
function initLoadingScreen() {
  setTimeout(() => {
    const loading = safeGet('loading-screen');
    if (loading) {
      loading.classList.add('hidden');
      setTimeout(() => {
        if (loading.parentNode) loading.remove();
      }, 1000);
    }
  }, 2500);
}

// ===== SCROLL FUNCTIONS =====
function scrollToHome() {
  const el = document.querySelector('.header-section');
  if (el) el.scrollIntoView({behavior: 'smooth'});
}
function scrollToUcapan() {
  const el = document.querySelector('.rsvp-section');
  if (el) el.scrollIntoView({behavior: 'smooth'});
}
function scrollToGallery() {
  const el = document.querySelector('.story-section');
  if (el) el.scrollIntoView({behavior: 'smooth'});
}
function scrollToMap() {
  const el = document.querySelector('.acara-section');
  if (el) el.scrollIntoView({behavior: 'smooth'});
}
function scrollToBox2() {
  const el = document.querySelector('.couple-section');
  if (el) el.scrollIntoView({behavior: 'smooth'});
}

// ===== ICON @ 5X KLIK =====
let clickCount = 0;
let clickTimer = null;

function attachIconAtListener() {
  const iconAt = safeGet('icon-at');
  if (!iconAt) return;

  iconAt.addEventListener('click', function() {
    clickCount++;
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 300);

    if (clickCount === 1) {
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 2000);
    }

    if (clickCount >= 5) {
      clearTimeout(clickTimer);
      clickCount = 0;
      openModalLogin();
    }
  });
}

// ===== MODAL LOGIN ADMIN =====
function openModalLogin() {
  const modal = safeGet('modal-login');
  if (modal) {
    modal.classList.add('active');
    const input = safeGet('input-password');
    if (input) input.focus();
  }
}

function closeModalLogin() {
  const modal = safeGet('modal-login');
  if (modal) {
    modal.classList.remove('active');
    const input = safeGet('input-password');
    if (input) input.value = '';
    const error = safeGet('login-error');
    if (error) error.textContent = '';
  }
}

function submitLogin() {
  const input = safeGet('input-password');
  const error = safeGet('login-error');
  if (!input) return;

  const password = input.value;

  if (!password) {
    if (error) error.textContent = 'Masukkan password!';
    return;
  }

  const correctPassword = DATA.password_admin || 'y2103';

  if (password === correctPassword) {
    if (error) error.textContent = '';
    closeModalLogin();
    window.location.href = 'admin.html';
  } else {
    if (error) error.textContent = 'Password salah!';
    input.value = '';
    input.focus();
  }
}

// ===== ACTIVE MENU ON SCROLL =====
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const menuItems = document.querySelectorAll('.menu-item');
  if (sections.length === 0 || menuItems.length === 0) return;

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    menuItems.forEach(item => item.classList.remove('active'));

    if (current === 'cover' || current === 'header') {
      if (menuItems[0]) menuItems[0].classList.add('active');
    } else if (current === 'rsvp') {
      if (menuItems[1]) menuItems[1].classList.add('active');
    } else if (current === 'story') {
      if (menuItems[2]) menuItems[2].classList.add('active');
    } else if (current === 'acara') {
      if (menuItems[3]) menuItems[3].classList.add('active');
    }
  });
}

// ===== EXPOSE FUNCTIONS TO GLOBAL =====
window.scrollToHome = scrollToHome;
window.scrollToUcapan = scrollToUcapan;
window.scrollToGallery = scrollToGallery;
window.scrollToMap = scrollToMap;
window.scrollToBox2 = scrollToBox2;
window.toggleMusic = toggleMusic;
window.closeModalLogin = closeModalLogin;
window.submitLogin = submitLogin;

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Load data
    loadData();

    // Render data ke halaman
    renderData();

    // Init countdown
    startCountdown();

    // Init form ucapan
    initFormUcapan();

    // Init audio
    initAudio();

    // Init cover
    initCover();

    // Init loading screen
    initLoadingScreen();

    // Init scroll spy
    initScrollSpy();

    // Init AOS
    if (typeof AOS !== 'undefined' && AOS.init) {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 50
      });
    }

    // Enter key untuk submit login
    const inputPassword = safeGet('input-password');
    if (inputPassword) {
      inputPassword.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          submitLogin();
        }
      });
    }

    console.log('%c🎉 Undangan Digital Loaded Successfully!', 'color: #0A878E; font-size: 16px; font-weight: bold;');
    console.log('%c💡 Klik icon @ 5x di footer untuk akses admin', 'color: #666; font-size: 12px;');
  } catch(err) {
    console.error('Error saat init:', err);
  }
});
