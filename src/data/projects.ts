import type { SlideData } from '@/components/ui/carousel';

export const initialProjects: SlideData[] = [
  // Website 1: AcheeZ
  {
    id: 'acheez',
    title: 'AcheeZ',
    category: 'Website',
    button: 'Detail',
    src: '/acheez.png',
    description:
      'Aplikasi pencatat keuangan multi-rekening (Bank, E-Wallet, Tunai) yang instan. Dirancang khusus untuk mengeliminasi jeda loading yang lambat dan kerumitan hitung manual saat mencatat transfer antar-rekening.',
    tags: ['React.js', 'Tailwind CSS', 'Cloudflare (Workers & D1)', 'JavaScript/TypeScript', 'RESTful API'],
    details: {
      overview:
        'Aplikasi pencatat keuangan multi-rekening (Bank, E-Wallet, Tunai) yang instan. Dirancang khusus untuk mengeliminasi jeda loading yang lambat dan kerumitan hitung manual saat mencatat transfer antar-rekening.',
      techStack: [
        'React.js',
        'Tailwind CSS',
        'Cloudflare (Workers & D1)',
        'JavaScript/TypeScript',
        'RESTful API',
        'Zustand',
        'Recharts',
      ],
      skills: ['Web Development', 'Problem Solving', 'Project Management'],
      keyInsights: [
        {
          title: 'Anti-Gagal (Atomic Transfer)',
          description:
            'Mengamankan perpindahan dana antar-rekening. Jika koneksi terputus di tengah jalan, sistem otomatis membatalkan transaksi agar saldo tidak "nyangkut".',
        },
        {
          title: 'Koreksi Saldo Otomatis',
          description:
            'Membangun algoritma revert & deduct yang menjamin saldo langsung menyesuaikan dengan akurat saat transaksi lama diedit atau dihapus.',
        },
        {
          title: 'Performa Milidetik',
          description:
            'Memanfaatkan infrastruktur cloud edge serverless (Cloudflare Workers & D1) agar aplikasi langsung terbuka dan merespons tanpa jeda loading.',
        },
        {
          title: 'UI Real-Time',
          description:
            'Menggunakan Zustand untuk manajemen data, membuat angka saldo berubah seketika di layar tanpa perlu refresh.',
        },
        {
          title: 'Fitur Terpusat',
          description:
            'Dilengkapi fitur budgeting, target tabungan (celengan), dan visualisasi grafik interaktif (Recharts).',
        },
      ],
      outcome:
        'Sukses merilis aplikasi manajemen keuangan berkinerja tinggi. Kombinasi arsitektur edge dan logika transaksi yang menjamin akurasi data 100% secara otomatis, sehingga pengguna bisa mencatat keuangan dengan cepat dan tanpa repot.',
      githubUrl: 'https://github.com/Faisalt28/react-financial-management',
      liveUrl: 'https://acheez.pages.dev/',
      videoDemoUrl: '/projects/acheez-demo-compressed.mp4',
    },
  },

  // Website 2: RS MediTrack
  {
    id: 'rs-meditrack',
    title: 'RS MediTrack',
    category: 'Website',
    button: 'Detail',
    src: '/rs-meditrack.png',
    description:
      'Aplikasi web manajemen staf rumah sakit untuk mengatur presensi, jadwal (sif), dan cuti. Solusi digital untuk mengeliminasi kecurangan absensi dan mencegah kekosongan tenaga medis akibat miskomunikasi saat pertukaran jadwal di unit kritis.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Cloudflare (Workers & D1)', 'RESTful API'],
    details: {
      overview:
        'Aplikasi web manajemen staf rumah sakit untuk mengatur presensi, jadwal (sif), dan cuti. Solusi digital untuk mengeliminasi kecurangan absensi dan mencegah kekosongan tenaga medis akibat miskomunikasi saat pertukaran jadwal di unit kritis.',
      techStack: [
        'React.js',
        'TypeScript',
        'Tailwind CSS',
        'Cloudflare (Workers & D1)',
        'RESTful API',
      ],
      skills: ['Web Development', 'Problem Solving', 'Project Management'],
      keyInsights: [
        {
          title: 'Presensi Anti-Curang',
          description:
            'Memadukan geofencing (radius GPS 100m) dan selfie real-time dari kamera sebagai bukti fisik untuk mencegah titip absen.',
        },
        {
          title: 'Tukar Sif Anti-Bentrok',
          description:
            'Menerapkan persetujuan berantai (2-Tier Approval: Rekan & Supervisor) yang secara otomatis menukar jadwal di database tanpa risiko bentrok.',
        },
        {
          title: 'Sinkronisasi Instan',
          description:
            'Pembaruan jadwal oleh HRD di PC akan langsung muncul di HP staf detik itu juga, berkat polling otomatis berbasis deteksi fokus browser.',
        },
        {
          title: 'Akses Berbasis Peran',
          description:
            'Memisahkan akses (Admin HRD, Supervisor, Pegawai) agar pengelolaan jadwal tiap departemen lebih aman dan terarah.',
        },
        {
          title: 'Otomatisasi Laporan',
          description:
            'Klasifikasi kehadiran otomatis dan ekspor data kehadiran ke format Excel (SheetJS) untuk mempercepat perhitungan payroll.',
        },
      ],
      outcome:
        'Sukses merilis sistem manajemen sif dan presensi yang ketat dan transparan. Validasi lokasi, kewajiban bukti foto, dan alur persetujuan terstruktur berhasil menjamin ketersediaan tenaga medis secara akurat sekaligus memangkas drastis waktu rekap laporan HRD.',
      githubUrl: 'https://github.com/Faisalt28/react-hospital-attendant',
      liveUrl: 'https://rs-meditrack.pages.dev/',
      videoDemoUrl: '/projects/rs-meditrack-demo-compressed.mp4',
    },
  },

  // Website 3: Frameify
  {
    id: 'frameify',
    title: 'Frameify',
    category: 'Website',
    button: 'Detail',
    src: '/frameify.png',
    description:
      'Platform eksplorasi visual interaktif berbasis Unsplash API untuk mencari dan mengunduh foto berkualitas tinggi. Aplikasi ini dirancang dengan antarmuka galeri masonry adaptif yang berfokus pada performa mulus dan pengalaman imersif tanpa hambatan loading.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'RESTful API', 'Cloudflare Pages'],
    details: {
      overview:
        'Platform eksplorasi visual interaktif berbasis Unsplash API untuk mencari dan mengunduh foto berkualitas tinggi. Aplikasi ini dirancang dengan antarmuka galeri masonry adaptif yang berfokus pada performa mulus dan pengalaman imersif tanpa hambatan loading.',
      techStack: [
        'React.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'RESTful API',
        'Cloudflare Pages',
      ],
      skills: ['Web Development', 'Problem Solving', 'Project Management'],
      keyInsights: [
        {
          title: 'Eliminasi Layout Shift (CLS)',
          description:
            'Mencegah tata letak lompat-lompat saat gambar dimuat dengan mengalkulasi metadata dimensi secara deterministik (Radix UI Aspect Ratio & skeleton shimmer), sehingga ruang foto teralokasi presisi sebelum gambar diunduh.',
        },
        {
          title: 'Optimasi Limit API',
          description:
            'Mengatasi kuota ketat API Unsplash dengan menerapkan custom debounce hook (350ms) pada pencarian dan membangun fallback data pool lokal yang otomatis tampil saat limit API habis atau koneksi terputus.',
        },
        {
          title: 'Galeri Masonry & Infinite Scroll',
          description:
            'Menyusun grid responsif adaptif (2 hingga 6 kolom) yang memuat foto secara otomatis dan ringan menggunakan IntersectionObserver.',
        },
        {
          title: 'Interaksi Visual Mendalam',
          description:
            'Menghadirkan fitur Interactive Magnifier Lens (zoom 2.4x) pada modal detail untuk memeriksa ketajaman foto.',
        },
        {
          title: 'Unduh Langsung & Share',
          description:
            'Menggunakan konversi Blob untuk pengunduhan gambar instan tanpa redirect, didukung integrasi Web Share API.',
        },
      ],
      outcome:
        'Sukses merilis galeri visual profesional yang imersif dan ringan. Optimasi tata letak gambar dan manajemen permintaan API yang cerdas berhasil memastikan eksplorasi foto berjalan mulus, tanpa patah-patah (lag), dan tahan terhadap kendala batasan limit server.',
      githubUrl: 'https://github.com/Faisalt28/Frameify',
      liveUrl: 'https://frameify.pages.dev/',
      videoDemoUrl: '/projects/frameify-demo.mp4',
    },
  },

  // Android 1: ArtoZ
  {
    id: 'artoz',
    title: 'ArtoZ',
    category: 'Android',
    button: 'Detail',
    src: '/artoz.png',
    collageImages: ['/artoz-left.png', '/artoz.png', '/artoz-right.png'],
    description:
      'Aplikasi Android manajemen keuangan offline-first khusus mahasiswa. Fokus pada pencatatan pengeluaran harian ala anak kos dengan visualisasi grafik interaktif yang beroperasi penuh tanpa butuh koneksi internet.',
    tags: ['Kotlin', 'Android Studio', 'Room Database', 'Android WebView', 'MVVM', 'Coroutines'],
    details: {
      overview:
        'Aplikasi Android manajemen keuangan offline-first khusus mahasiswa. Fokus pada pencatatan pengeluaran harian ala anak kos dengan visualisasi grafik interaktif yang beroperasi penuh tanpa butuh koneksi internet.',
      techStack: [
        'Kotlin',
        'Android Studio',
        'Room Database',
        'Android WebView',
        'MVVM',
        'Coroutines',
      ],
      skills: [
        'Mobile Development',
        'Problem Solving',
        'Team Collaboration',
        'Project Management',
        'Communication',
        'Time Management',
      ],
      keyInsights: [
        {
          title: 'Offline-First & Bebas Lag',
          description:
            'Menggunakan Room Database (SQLite) dan Kotlin Coroutines untuk eksekusi baca-tulis asinkron, sehingga UI dijamin tetap berjalan mulus.',
        },
        {
          title: 'Injeksi Grafik Ringan',
          description:
            'Menghindari library chart native yang membebani ukuran aplikasi dengan cara menginjeksi Chart.js (HTML5 Canvas) secara dinamis melalui Android WebView.',
        },
        {
          title: 'UI Reaktif (MVVM)',
          description:
            'Menerapkan arsitektur MVVM dan LiveData untuk memisahkan logika dan tampilan, memastikan angka saldo selalu sinkron secara real-time di layar.',
        },
        {
          title: 'Input Cepat ala Anak Kos',
          description:
            'Form pencatatan didesain instan dengan pilihan kategori yang sangat spesifik untuk mahasiswa (biaya kos, fotokopi/tugas, uang saku, pulsa).',
        },
        {
          title: 'Evaluasi Fleksibel',
          description:
            'Fitur pemfilteran riwayat transaksi untuk mempermudah mahasiswa melacak pos pengeluaran bulanan terbesar.',
        },
      ],
      outcome:
        'Berhasil merilis aplikasi pencatat keuangan mobile yang ringan, responsif, dan 100% offline. Perpaduan arsitektur database lokal yang solid dan trik injeksi grafik berbasis web menjadikan aplikasi ini alat evaluasi finansial yang cepat dan tepat guna.',
      githubUrl: 'https://github.com/Faisalt28/Mobile-Artoz-Offline',
      videoDemoUrl: '/projects/artoz-demo.mp4',
    },
  },

  // Android 2: FindThem
  {
    id: 'findthem',
    title: 'FindThem',
    category: 'Android',
    button: 'Detail',
    src: '/findthem.png',
    collageImages: ['/findthem-left.png', '/findthem.png', '/findthem-right.png'],
    description:
      'Aplikasi Android direktori mahasiswa yang terintegrasi dengan Google Maps API. Dibangun untuk mencatat data profil mahasiswa sekaligus memetakan koordinat tempat tinggal mereka secara interaktif dalam satu aplikasi.',
    tags: ['Kotlin', 'Android Studio', 'Google Maps SDK', 'Room Database', 'MVVM'],
    details: {
      overview:
        'Aplikasi Android direktori mahasiswa yang terintegrasi dengan Google Maps API. Dibangun untuk mencatat data profil mahasiswa sekaligus memetakan koordinat tempat tinggal mereka secara interaktif dalam satu aplikasi.',
      techStack: [
        'Kotlin',
        'Android Studio',
        'Google Maps SDK',
        'Room Database',
        'MVVM',
      ],
      skills: [
        'Mobile Development',
        'Problem Solving',
        'Team Collaboration',
        'Project Management',
        'Communication',
        'Time Management',
      ],
      keyInsights: [
        {
          title: 'Custom Marker Peta',
          description:
            'Mencegah lag saat memuat peta dengan mengubah foto profil menjadi marker lingkaran (circular crop) secara efisien menggunakan BitmapDescriptor.',
        },
        {
          title: 'WhatsApp Deep-Linking',
          description:
            'Memfasilitasi komunikasi darurat tanpa perlu simpan kontak melalui Android Implicit Intent berskema https://wa.me/ dengan format +62 otomatis.',
        },
        {
          title: 'Performa UI Responsif',
          description:
            'Mengandalkan arsitektur MVVM dan Room Database (SQLite) agar proses manajemen data (Tambah/Edit/Hapus) berjalan lancar dan cepat.',
        },
        {
          title: 'Visualisasi Lokasi Real-Time',
          description:
            'Sinkronisasi form biodata dengan opsi "Masukkan ke Peta" untuk memantau sebaran domisili mahasiswa secara akurat.',
        },
      ],
      outcome:
        'Sukses membangun direktori pemetaan domisili yang responsif dan praktis. Kombinasi custom marker visual di Google Maps dan fitur pesan instan WhatsApp berhasil mempercepat proses pencarian alamat dan koordinasi antar-mahasiswa.',
      githubUrl: 'https://github.com/Faisalt28/Mobile-FindThem',
      videoDemoUrl: '/projects/findthem-demo.mp4',
    },
  },

  // Machine Learning: Film Recommendation
  {
    id: 'film-recommendation',
    title: 'Sistem Rekomendasi Film',
    category: 'Machine Learning',
    button: 'Detail',
    src: '/film-recommendation.png',
    description:
      'Sistem rekomendasi film cerdas berbasis Content-Based Filtering (CBF). Dirancang untuk menyajikan rekomendasi tontonan personal dengan menganalisis tingkat kemiripan sinopsis, genre, dan tahun rilis dari dataset IMDb.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Gradio', 'TF-IDF', 'Cosine Similarity', 'Hugging Face Spaces'],
    details: {
      overview:
        'Sistem rekomendasi film cerdas berbasis Content-Based Filtering (CBF). Dirancang untuk menyajikan rekomendasi tontonan personal dengan menganalisis tingkat kemiripan sinopsis, genre, dan tahun rilis dari dataset IMDb.',
      techStack: [
        'Python',
        'Pandas',
        'Scikit-learn',
        'Gradio',
        'TF-IDF',
        'Cosine Similarity',
        'Hugging Face Spaces',
      ],
      skills: ['Machine Learning', 'Data & AI', 'Problem Solving', 'Time Management'],
      keyInsights: [
        {
          title: 'Pembersihan & Rekayasa Data',
          description:
            'Mengolah 10.000 dataset IMDb mentah dari Kaggle, menangani null values dan 366 data duplikat untuk menghasilkan 9.627 data bersih. Fitur genre, tahun, dan sinopsis digabung menjadi satu kesatuan teks terpadu.',
        },
        {
          title: 'Komputasi Model Efisien',
          description:
            'Mengekstrak 19.490 kosakata menggunakan TfidfVectorizer dan menghitung Cosine Similarity Matrix. Model diserialisasi (Pickle) agar proses inferensi 5 rekomendasi film teratas berjalan instan tanpa komputasi ulang.',
        },
        {
          title: 'Filter Interaktif & Deployment',
          description:
            'Menggunakan Gradio untuk antarmuka web yang memungkinkan penyaringan Top 10 film berdasarkan genre, dan mendistribusikannya secara ringan di cloud container Hugging Face Spaces.',
        },
      ],
      outcome:
        'Sukses deploy model Machine Learning ke platform web interaktif. Integrasi vektor TF-IDF dan kalkulasi cosine similarity terbukti efektif memberikan rekomendasi film yang relevan secara akurat, cepat, dan siap digunakan oleh pengguna akhir.',
      liveUrl: 'https://huggingface.co/spaces/Axion28/Sistem-Rekomendasi-Film',
      githubUrl: 'https://github.com/Faisalt28/Rekomendasi-Film',
    },
  },
];
