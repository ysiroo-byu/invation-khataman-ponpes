// ========================================
// UNDANGAN DIGITAL - MAIN JAVASCRIPT
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
  musik_url: "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/theme/music/1662430019.txt",
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

// ===== LOAD DATA =====
let DATA = {};
function loadData() {
  const saved = localStorage.getItem('undangan_data');
  if (saved) {
    try {
      DATA = JSON.parse(saved);
      DATA = {...DEFAULT_DATA, ...DATA};
    } catch(e) {
      DATA = {...DEFAULT_DATA};
    }
  } else {
    DATA = {...DEFAULT_DATA};
  }
}

// ===== RENDER DATA KE HALAMAN =====
function renderData() {
  // Cover
  const elNamaAcaraCover = document.getElementById('display-nama-acara-cover');
  if (elNamaAcaraCover) elNamaAcaraCover.textContent = DATA.nama_acara;

  const elNamaTamu = document.getElementById('display-nama-tamu');
  if (elNamaTamu) {
    // Cek URL parameter ?kpd=NamaTamu
    const urlParams = new URLSearchParams(window.location.search);
    const kpd = urlParams.get('kpd');
    if (kpd) {
      elNamaTamu.textContent = decodeURIComponent(kpd);
      localStorage.setItem('nama_tamu', decodeURIComponent(kpd));
    } else {
      const savedNama = localStorage.getItem('nama_tamu');
      elNamaTamu.textContent = savedNama || DATA.nama_tamu;
    }
  }

  // Header
  const elNamaAcaraHeader = document.getElementById('display-nama-acara-header');
  if (elNamaAcaraHeader) elNamaAcaraHeader.textContent = DATA.nama_acara;

  // Ucapan Pembuka
  const elUcapanPembuka = document.getElementById('display-ucapan-pembuka');
  if (elUcapanPembuka) elUcapanPembuka.innerHTML = DATA.ucapan_pembuka;

  // Foto Sampul
  const fotoSampul = document.querySelector('.foto-sampul');
  if (fotoSampul && DATA.foto_sampul) {
    fotoSampul.style.backgroundImage = `url('${DATA.foto_sampul}')`;
  }

  // Doa
  const elDoa = document.getElementById('display-doa');
  if (elDoa) elDoa.textContent = DATA.doa;

  // Deskripsi Acara
  const elDeskripsi = document.getElementById('display-deskripsi-acara');
  if (elDeskripsi) elDeskripsi.textContent = DATA.deskripsi_acara;

  // Acara
  const elNamaAcaraBadge = document.getElementById('display-nama-acara-badge');
  if (elNamaAcaraBadge) elNamaAcaraBadge.textContent = DATA.nama_acara;

  const elHariAcara = document.getElementById('display-tanggal-acara');
  if (elHariAcara) elHariAcara.textContent = DATA.hari_acara;

  const elWaktuAcara = document.getElementById('display-waktu-acara');
  if (elWaktuAcara) elWaktuAcara.textContent = DATA.waktu_acara;

  const elLokasi = document.getElementById('display-lokasi-acara');
  if (elLokasi) {
    elLokasi.innerHTML = `${DATA.lokasi_acara}<br>Pembicara : <span id="display-pembicara">${DATA.pembicara}</span>`;
  }

  const elPembicara = document.getElementById('display-pembicara');
  if (elPembicara) elPembicara.textContent = DATA.pembicara;

  // Maps
  const elLinkMaps = document.getElementById('link-maps');
  if (elLinkMaps) elLinkMaps.href = DATA.link_maps;

  const elEmbedMaps = document.getElementById('embed-maps');
  if (elEmbedMaps) elEmbedMaps.src = DATA.embed_maps;

  // Ucapan Penutup
  const elUcapanPenutup = document.getElementById('display-ucapan-penutup');
  if (elUcapanPenutup) elUcapanPenutup.textContent = DATA.ucapan_penutup;

  // Thank Section
  const fotoAkhir = document.querySelector('.foto-sampul-akhir');
  if (fotoAkhir && DATA.foto_akhir) {
    fotoAkhir.style.backgroundImage = `url('${DATA.foto_akhir}')`;
  }

  const elNamaAcaraAkhir = document.getElementById('display-nama-acara-akhir');
  if (elNamaAcaraAkhir) elNamaAcaraAkhir.textContent = DATA.nama_acara;

  const elAkhirKata = document.getElementById('display-akhir-kata');
  if (elAkhirKata) elAkhirKata.textContent = DATA.akhir_kata;

  // Watermark
  const elWatermark = document.querySelector('.watermark');
  if (elWatermark) {
    elWatermark.innerHTML = `<span id="icon-at" class="icon-at">@</span>ysiroo`;
    attachIconAtListener();
  }

  // Musik
  const audio = document.getElementById('audio-bg');
  if (audio && DATA.musik_url) {
    audio.src = DATA.musik_url;
  }

  // Render Gallery
  renderGallery();

  // Render Timeline
  renderTimeline();

  // Render Ucapan
  renderUcapanList();
}

// ===== RENDER GALLERY =====
function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  if (!DATA.gallery || DATA.gallery.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#fff; grid-column:1/-1;">Belum ada foto</p>';
    return;
  }

  container.innerHTML = DATA.gallery.map((item, i) => `
    <div class="gallery-item" data-aos="fade-up" data-aos-delay="${i * 100}">
      <img src="${item.url}" alt="${item.caption || 'Foto'}" loading="lazy" onerror="this.style.display='none'">
      ${item.caption ? `<div class="caption">${item.caption}</div>` : ''}
    </div>
  `).join('');
}

// ===== RENDER TIMELINE =====
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  if (!DATA.timeline || DATA.timeline.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#fff;">Belum ada susunan acara</p>';
    return;
  }

  container.innerHTML = DATA.timeline.map((item, i) => `
    <div class="timeline-item" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="timeline-content">
        <div class="timeline-waktu">${item.waktu}</div>
        <div class="timeline-acara">${item.acara}</div>
      </div>
    </div>
  `).join('');
}

// ===== RENDER UCAPAN LIST =====
function renderUcapanList() {
  const container = document.getElementById('box-ucapan');
  if (!container) return;

  const ucapanList = DATA.ucapan || [];
  if (ucapanList.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#999; padding:20px;">Belum ada ucapan. Jadilah yang pertama!</p>';
    return;
  }

  container.innerHTML = ucapanList.map((u, i) => `
    <div class="ucapan-item" data-aos="fade-up" data-aos-delay="${i * 50}">
      <div class="nama">
        ${u.nama}
        <span class="badge-hadir ${u.ket_hadir == '1' ? 'hadir' : 'tidak-hadir'}">
          ${u.ket_hadir == '1' ? '✓ Hadir' : '✗ Tidak Hadir'}
        </span>
        ${u.jumlah ? `<small style="color:#999; margin-left:5px;">(${u.jumlah} orang)</small>` : ''}
      </div>
      <div class="tanggal">${u.tanggal || ''}</div>
      <div class="isi">${u.ucapan}</div>
    </div>
  `).join('');
}

// ===== COUNTDOWN =====
function startCountdown() {
  if (DATA.countdown === false) {
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) countdownEl.style.display = 'none';
    return;
  }

  // Parse tanggal acara
  let targetDate;
  if (DATA.tanggal_acara) {
    const parts = DATA.tanggal_acara.split('-');
    if (parts.length === 3) {
      // Format waktu dari waktu_acara (contoh: "Pukul 18:00 WIB")
      let hours = 18, minutes = 0;
      if (DATA.waktu_acara) {
        const timeMatch = DATA.waktu_acara.match(/(\d{1,2}):(\d{2})/);
        if (timeMatch) {
          hours = parseInt(timeMatch[1]);
          minutes = parseInt(timeMatch[2]);
        }
      }
      targetDate = new Date(parts[0], parts[1] - 1, parts[2], hours, minutes, 0);
    }
  }

  if (!targetDate || isNaN(targetDate.getTime())) {
    // Default: 30 hari dari sekarang
    targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      document.getElementById('days').textContent = '0';
      document.getElementById('hours').textContent = '0';
      document.getElementById('minutes').textContent = '0';
      document.getElementById('seconds').textContent = '0';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ===== FORM UCAPAN =====
function initFormUcapan() {
  const form = document.getElementById('form-ucapan');
  if (!form) return;

  const kehadiranSelect = document.getElementById('input-kehadiran');
  const jumlahGroup = document.getElementById('jumlah-group');

  kehadiranSelect.addEventListener('change', function() {
    if (this.value === '1') {
      jumlahGroup.style.display = 'block';
    } else {
      jumlahGroup.style.display = 'none';
    }
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('input-nama').value.trim();
    const ucapan = document.getElementById('input-ucapan').value.trim();
    const ket_hadir = document.getElementById('input-kehadiran').value;
    const jumlah = document.getElementById('input-jumlah').value;

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
    localStorage.setItem('undangan_data', JSON.stringify(DATA));

    renderUcapanList();
    AOS.refresh();

    form.reset();
    jumlahGroup.style.display = 'none';

    // Tampilkan animasi ucapan
    showAnimasiUcapan(newUcapan);

    // Notifikasi sukses
    const btn = form.querySelector('.btn-kirim');
    const originalText = btn.textContent;
    btn.textContent = '✓ Terkirim!';
    btn.style.background = '#27ae60';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 2000);
  });
}

// ===== ANIMASI UCAPAN FLOATING =====
function showAnimasiUcapan(ucapanData) {
  if (DATA.animasi_ucapan === false) return;

  const animasi = document.getElementById('animasi-ucapan');
  const animNama = document.getElementById('anim-nama');
  const animUcapan = document.getElementById('anim-ucapan');

  if (!animasi) return;

  animNama.textContent = ucapanData.nama;
  animUcapan.textContent = ucapanData.ucapan;

  animasi.classList.add('show');

  setTimeout(() => {
    animasi.classList.remove('show');
  }, 5000);
}

// Auto animasi ucapan random
function startAutoAnimasiUcapan() {
  if (DATA.animasi_ucapan === false) return;
  if (!DATA.ucapan || DATA.ucapan.length === 0) return;

  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * DATA.ucapan.length);
    showAnimasiUcapan(DATA.ucapan[randomIndex]);
  }, 8000);
}

// ===== AUDIO CONTROL =====
let isMusicPlaying = false;
function toggleMusic() {
  const audio = document.getElementById('audio-bg');
  const btn = document.getElementById('btn-music');
  if (!audio) return;

  if (audio.paused) {
    audio.play().then(() => {
      isMusicPlaying = true;
      btn.innerHTML = '<i class="fa fa-pause"></i>';
      btn.classList.add('active');
    }).catch(err => {
      console.log('Audio play error:', err);
    });
  } else {
    audio.pause();
    isMusicPlaying = false;
    btn.innerHTML = '<i class="fa fa-music"></i>';
    btn.classList.remove('active');
  }
}

function initAudio() {
  const audio = document.getElementById('audio-bg');
  if (!audio) return;

  // Set volume
  audio.volume = 0.5;

  // Autoplay saat buka undangan
  if (DATA.autoplay !== false) {
    document.getElementById('btn-buka-undangan').addEventListener('click', function() {
      setTimeout(() => {
        audio.play().then(() => {
          isMusicPlaying = true;
          const btn = document.getElementById('btn-music');
          if (btn) {
            btn.innerHTML = '<i class="fa fa-pause"></i>';
            btn.classList.add('active');
          }
        }).catch(err => {
          console.log('Autoplay blocked:', err);
        });
      }, 500);
    });
  }
}

// ===== COVER / BUKA UNDANGAN =====
function initCover() {
  const btnBuka = document.getElementById('btn-buka-undangan');
  const cover = document.getElementById('cover');
  const fixMenu = document.getElementById('fix-menu');

  if (!btnBuka || !cover) return;

  btnBuka.addEventListener('click', function() {
    cover.classList.add('cover-opened');
    if (fixMenu) fixMenu.style.display = 'flex';

    // Hide loading screen
    const loading = document.getElementById('loading-screen');
    if (loading) {
      loading.classList.add('hidden');
      setTimeout(() => loading.remove(), 1000);
    }

    // Init AOS after cover opened
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 50
        });
      }
    }, 1000);

    // Start auto animasi ucapan
    setTimeout(startAutoAnimasiUcapan, 3000);
  });
}

// ===== LOADING SCREEN =====
function initLoadingScreen() {
  setTimeout(() => {
    const loading = document.getElementById('loading-screen');
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
  document.querySelector('.header-section').scrollIntoView({behavior: 'smooth'});
}
function scrollToUcapan() {
  document.querySelector('.rsvp-section').scrollIntoView({behavior: 'smooth'});
}
function scrollToGallery() {
  document.querySelector('.story-section').scrollIntoView({behavior: 'smooth'});
}
function scrollToMap() {
  document.querySelector('.acara-section').scrollIntoView({behavior: 'smooth'});
}
function scrollToBox2() {
  document.querySelector('.couple-section').scrollIntoView({behavior: 'smooth'});
}

// ===== ICON @ 5X KLIK =====
let clickCount = 0;
let clickTimer = null;

function attachIconAtListener() {
  const iconAt = document.getElementById('icon-at');
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
  const modal = document.getElementById('modal-login');
  if (modal) {
    modal.classList.add('active');
    document.getElementById('input-password').focus();
  }
}

function closeModalLogin() {
  const modal = document.getElementById('modal-login');
  if (modal) {
    modal.classList.remove('active');
    document.getElementById('input-password').value = '';
    document.getElementById('login-error').textContent = '';
  }
}

function submitLogin() {
  const input = document.getElementById('input-password');
  const error = document.getElementById('login-error');
  const password = input.value;

  if (!password) {
    error.textContent = 'Masukkan password!';
    return;
  }

  const correctPassword = DATA.password_admin || 'y2103';

  if (password === correctPassword) {
    error.textContent = '';
    closeModalLogin();
    // Redirect ke admin.html
    window.location.href = 'admin.html';
  } else {
    error.textContent = 'Password salah!';
    input.value = '';
    input.focus();
  }
}

// Enter key untuk submit login
document.addEventListener('DOMContentLoaded', function() {
  const inputPassword = document.getElementById('input-password');
  if (inputPassword) {
    inputPassword.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        submitLogin();
      }
    });
  }
});

// ===== ACTIVE MENU ON SCROLL =====
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const menuItems = document.querySelectorAll('.menu-item');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    menuItems.forEach(item => {
      item.classList.remove('active');
    });

    // Simple mapping
    if (current === 'cover' || current === 'header') {
      menuItems[0]?.classList.add('active');
    } else if (current === 'rsvp') {
      menuItems[1]?.classList.add('active');
    } else if (current === 'story') {
      menuItems[2]?.classList.add('active');
    } else if (current === 'acara') {
      menuItems[3]?.classList.add('active');
    }
  });
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', function() {
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
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50
    });
  }

  console.log('%c🎉 Undangan Digital Loaded Successfully!', 'color: #0A878E; font-size: 16px; font-weight: bold;');
  console.log('%c💡 Klik icon @ 5x di footer untuk akses admin', 'color: #666; font-size: 12px;');
});

// ===== UTILITY FUNCTIONS =====
// Expose functions to global scope for onclick handlers
window.scrollToHome = scrollToHome;
window.scrollToUcapan = scrollToUcapan;
window.scrollToGallery = scrollToGallery;
window.scrollToMap = scrollToMap;
window.scrollToBox2 = scrollToBox2;
window.toggleMusic = toggleMusic;
window.closeModalLogin = closeModalLogin;
window.submitLogin = submitLogin;
