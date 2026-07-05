// Data
const defaultData = {
    nama_acara: "Haflah At Tasyakur Likhtitam Al Qur'an wal Kutub ke-XII",
    nama_tamu: "Bapak/Ibu/Saudara/i",
    tanggal_acara: "2023-05-08T18:00:00",
    ucapan_list: []
};

// Load Data
function loadData() {
    const saved = localStorage.getItem('undangan_data');
    return saved ? JSON.parse(saved) : defaultData;
}

let data = loadData();

// Open Invitation
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
    
    // Hide loading
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 1000);
    }, 1500);
});

// Music Toggle
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

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000);

// Scroll to Section
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Copy Rekening
function copyRek(number) {
    navigator.clipboard.writeText(number).then(() => {
        alert('Nomor rekening disalin: ' + number);
    });
}

// Countdown
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

// Form Ucapan
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
        waktu: new Date().toLocaleDateString('id-ID'),
        hadir: kehadiran === '1',
        jumlah: jumlah
    };
    
    data.ucapan_list.unshift(newUcapan);
    localStorage.setItem('undangan_data', JSON.stringify(data));
    renderUcapan();
    
    this.reset();
    document.getElementById('jumlah-group').style.display = 'none';
    
    alert('Terima kasih! Ucapan Anda telah dikirim.');
});

function renderUcapan() {
    const listEl = document.getElementById('ucapan-list');
    if (!listEl) return;
    
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

// Admin Access - Click Counter
let adminClickCount = 0;
const adminTrigger = document.getElementById('admin-trigger');

if (adminTrigger) {
    adminTrigger.addEventListener('click', function() {
        adminClickCount++;
        
        if (adminClickCount >= 5) {
            window.location.href = 'admin.html';
            adminClickCount = 0;
        } else {
            // Visual feedback
            this.style.transform = 'scale(1.3)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        }
    });
}

// Initialize
window.addEventListener('load', () => {
    startCountdown(data.tanggal_acara);
    renderUcapan();
    
    // Get nama tamu from URL
    const urlParams = new URLSearchParams(window.location.search);
    const kpd = urlParams.get('kpd');
    if (kpd) {
        document.getElementById('nama-tamu').textContent = decodeURIComponent(kpd);
    }
});
