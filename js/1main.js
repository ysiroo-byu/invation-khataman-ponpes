// ============ DATA DEFAULT ============
const defaultData = {
  nama_acara: "Haflah At Tasyakur Likhtitam Al Qur'an wal Kutub ke-XII",
  nama_tamu: "Bapak/Ibu/Saudara/i",
  tanggal_acara: "2023-05-08T18:00:00",
  tanggal_display: "Senin, 08 Mei 2023",
  waktu_acara: "Pukul 18:00 WIB Sampai Selesai",
  alamat_acara: "Halaman Pondok Pesantren Al Husna<br>Pembicara : KH. Thoifur Mawardi",
  link_maps: "https://goo.gl/maps/hovfxnkdwJH4WVDc9",
  embed_maps: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3956.318819741475!2d110.2257257147759!3d-7.42992749463963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjUnNDcuNyJTIDExMMKwMTMnNDAuNSJF!5e0!3m2!1sid!2sid!4v1680313757205!5m2!1sid!2sid",
  ucapan_pembuka: "<p>Dengan memohon ridho Allah SWT., kami keluarga besar Pondok Pesantren Al Husna bermaksud untuk menyelenggarakan Haflah At Tasyakur Likhtitam Al Qur'an wal Kutub ke-XII.</p>",
  deskripsi_acara: "<p class='arabic-small'>لجنة حفله التشكر لاختتام القران والكتب</p><p>Haflah attasyakur likhtitam AlQur'an wal kutub merupakan kegiatan akhiruddirosah pondok pesantren Al Husna payaman yang dilaksanakan setiap dua tahun sekali sebagai wujud syukur kepada Allah swt.</p>",
  ucapan_penutup: "Merupakan Suatu Kebahagiaan dan Kehormatan bagi Kami, Apabila Bapak/Ibu/Saudara/i, Berkenan Hadir di Acara kami",
  foto_sampul: "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/25426/1680314473foto_berdua.jpeg",
  foto_penutup: "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314192.jpeg",
  gallery: [
    "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314176.jpeg",
    "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314192.jpeg",
    "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314200.jpeg",
    "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314207.jpeg",
    "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314217.jpeg",
    "https://media.indoinvite.com/2db3bf1e16cd47a08843bb881e39cce7:indoinvite-staging/indoinvite-staging/indoinvite-staging/nikah/upload/galery/1680314244.jpeg"
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
  ucapan_list: [
    { nama: "Wali santri Alhusna", pesan: "Semoga diberikan ilmu yang berkah manfaat bagi putra putri kami. Amminn", waktu: "19 Apr 2023", hadir: true },
    { nama: "Bapak Budi", pesan: "Selamat ya, semoga acaranya lancar dan berkah", waktu: "06 Agu 2023", hadir: true }
  ]
};

// ============ LOAD DATA ============
function loadData() {
  const saved = localStorage.getItem('undangan_data');
  return saved ? JSON.parse(saved) : defaultData;
}

function saveData(data) {
  localStorage.setItem('undangan_data', JSON.stringify(data));
}

let data = loadData();

// ============ RENDER DATA KE HALAMAN ============
function renderAll() {
  // Nama acara
  document.getElementById('display-nama-acara').textContent = data.nama_acara;
  document.getElementById('display-nama-acara-2').textContent = data.nama_acara;
  document.getElementById('display-nama-acara-3').textContent = data.nama_acara;
  document.getElementById('display-nama-acara-4').textContent = data.nama_acara;

  // Nama tamu dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const kpd = urlParams.get('kpd') || data.nama_tamu;
  document.getElementById('display-nama-tamu').textContent = decodeURIComponent(kpd);

  // Tanggal & waktu
  document.getElementById('display-tanggal-acara').textContent = data.tanggal_display;
  document.getElementById('display-waktu-acara').textContent = data.waktu_acara;
  document.getElementById('display-alamat-acara').innerHTML = data.alamat_acara;
  document.getElementById('display-link-maps').href = data.link_maps;
  document.getElementById('display-embed-maps').src = data.embed_maps;

  // Text
  document.getElementById('display-ucapan-pembuka').innerHTML = data.ucapan_pembuka;
  document.getElementById('display-deskripsi-acara').innerHTML = data.deskripsi_acara;
  document.getElementById('display-ucapan-penutup').textContent = data.ucapan_penutup;

  // Foto
  document.getElementById('display-foto-sampul').style.backgroundImage = `url('${data.foto_sampul}')`;
  document.getElementById('display-foto-penutup').style.backgroundImage = `url('${data.foto_penutup}')`;

  // Gallery
  const galleryEl = document.getElementById('display-gallery');
  galleryEl.innerHTML = data.gallery.map((url, i) => 
    `<div class="gallery-item" data-aos="fade-${i % 2 === 0 ? 'left' : 'right'}" style="background-image: url('${url}')" onclick="openGallery(${i})"></div>`
  ).join('');

  // Hero slides
  data.hero_slides.forEach((url, i) => {
    const slide = document.getElementById(`slide-${i+1}`);
    if (slide) slide.style.backgroundImage = `url('${url}')`;
  });

  // Susunan acara
  const susunanEl = document.getElementById('display-susunan-acara');
  susunanEl.innerHTML = data.susunan_acara.map(item => 
    `<div class="timeline-item">${item}</div>`
  ).join('');

  // Rekening
  const rekEl = document.getElementById('display-rekening');
  rekEl.innerHTML = data.rekening.map(r => `
    <div class="bank-card">
      <img src="${r.logo}" class="bank-logo" alt="${r.bank}">
      <div class="bank-number">${r.nomor}</div>
      <div class="bank-name">a.n. ${r.atas_nama}</div>
      <button class="btn-copy" onclick="copyRek('${r.nomor}')">
        <i class="fas fa-copy"></i> Copy
      </button>
    </div>
  `).join('');

  // Ucapan list
  renderUcapan();

  // Countdown
  startCountdown(data.tanggal_acara);
}

function renderUcapan() {
  const listEl = document.getElementById('ucapan-list');
  listEl.innerHTML = data.ucapan_list.map(u => `
    <div class="ucapan-item">
      <div class="nama">${u.nama}</div>
      <div class="waktu">${u.waktu}</div>
      <div class="pesan">${u.pesan}</div>
      <span class="badge ${u.hadir ? 'badge-hadir' : 'badge-tidak'}">
        ${u.hadir ? '✓ Hadir' : '✗ Tidak Hadir'}
      </span>
    </div>
  `).join('');
}

// ============ COUNTDOWN ============
function startCountdown(targetDate) {
  const target = new Date(targetDate).getTime();
  
  const update = () => {
    const now = new Date().getTime();
    const distance = target - now;
    
    if (distance < 0) {
      document.getElementById('countdown').innerHTML = '<p style="color: var(--secondary);">Acara telah berlangsung</p>';
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  };
  
  update();
  setInterval(update, 1000);
}

// ============ OPEN INVITATION ============
document.getElementById('btn-open').addEventListener('click', () => {
  document.getElementById('cover').classList.add('opened');
  document.getElementById('main-content').style.display = 'block';
  document.getElementById('floating-menu').style.display = 'flex';
  
  // Play music
  const music = document.getElementById('bg-music');
  music.play().catch(e => console.log('Autoplay blocked'));
  
  setTimeout(() => {
    document.getElementById('cover').style.display = 'none';
  }, 800);
});

// ============ MUSIC TOGGLE ============
let isMusicPlaying = true;
document.getElementById('btn-music').addEventListener('click', function() {
  const music = document.getElementById('bg-music');
  if (isMusicPlaying) {
    music.pause();
    this.style.background = '#f0f0f0';
    this.style.color = 'var(--primary)';
  } else {
    music.play();
    this.style.background = 'var(--primary)';
    this.style.color = 'white';
  }
  isMusicPlaying = !isMusicPlaying;
});

// ============ HERO SLIDER ============
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000);

// ============ SCROLL TO SECTION ============
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ============ COPY REKENING ============
function copyRek(number) {
  navigator.clipboard.writeText(number.replace(/-/g, '')).then(() => {
    alert('Nomor rekening disalin: ' + number);
  });
}

// ============ OPEN GALLERY ============
function openGallery(index) {
  window.open(data.gallery[index], '_blank');
}

// ============ FORM UCAPAN ============
document.getElementById('input-kehadiran').addEventListener('change', function() {
  document.getElementById('jumlah-group').style.display = this.value === '1' ? 'block' : 'none';
});

document.getElementById('form-ucapan').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nama = document.getElementById('input-nama').value;
  const ucapan = document.getElementById('input-ucapan').value;
  const kehadiran = document.getElementById('input-kehadiran').value;
  const jumlah = document.getElementById('input-jumlah').value;
  
  if (!nama || !ucapan) {
    alert('Mohon isi nama dan ucapan');
    return;
  }
  
  const newUcapan = {
    nama: nama,
    pesan: ucapan,
    waktu: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
    hadir: kehadiran === '1',
    jumlah: jumlah
  };
  
  data.ucapan_list.unshift(newUcapan);
  saveData(data);
  renderUcapan();
  
  // Reset form
  this.reset();
  document.getElementById('jumlah-group').style.display = 'none';
  
  alert('Terima kasih! Ucapan Anda telah dikirim.');
});

// ============ INIT ============
window.addEventListener('load', () => {
  // Hide loading
  setTimeout(() => {
    document.getElementById('loading-screen').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('loading-screen').style.display = 'none';
    }, 1000);
  }, 1500);
  
  // Init AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
  
  // Render data
  renderAll();
});
